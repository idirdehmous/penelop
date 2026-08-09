const PARTICLE_RES = 80;

// ======================================================
// Ressources globales
// ======================================================
let windTexture = null;
let windTextureReady = false;

// --- Particles state ping-pong
let particleTexA = null;
let particleTexB = null;
let particleFboB = null;

// --- Trail ping-pong
let trailTexA = null;
let trailTexB = null;
let trailFboA = null;
let trailFboB = null;
let trailWidth = 0;
let trailHeight = 0;

// --- Programs
let updateProgram = null;
let particleRenderProgram = null;
let trailFadeProgram = null;
let trailDisplayProgram = null;

// --- Uniforms / locations
let updateParticleLocation = null;
let updateWindLocation = null;

let renderParticleLocation = null;
let topLeftXLocation = null;
let topLeftYLocation = null;
let bottomRightXLocation = null;
let bottomRightYLocation = null;
let canvasWidthLocation = null;
let canvasHeightLocation = null;

let fadeTrailLocation = null;
let displayTrailLocation = null;

// --- Buffers
let quadBuffer = null;
let particleIndexBuffer = null;

// --- Overlay canvas / renderer maison
let windCanvas = null;
let gl = null;
let renderer = null;

let windEnabled = true;

let windGPU = {
    header: null,
    uv: null,
    nx: 0,
    ny: 0
};








// ======================================================
// Canvas overlay maison
function initWindCanvas() {
    // crée le canvas
    windCanvas = L.DomUtil.create("canvas", "leaflet-wind-layer");

    // l'insère dans l'overlayPane Leaflet
    map.getPanes().overlayPane.appendChild(windCanvas);

    // style
    windCanvas.style.position = "absolute";
    windCanvas.style.top = "0";
    windCanvas.style.left = "0";
    windCanvas.style.width = "100%";
    windCanvas.style.height = "100%";
    windCanvas.style.pointerEvents = "auto";
    windCanvas.style.zIndex = "400";

    gl = windCanvas.getContext("webgl2", {
        alpha: true,
        antialias: false,
        premultipliedAlpha: false
    });

    if (!gl) {
        console.error("WebGL2 non disponible");
        return;
    }

    renderer = { gl };

    resizeWindCanvas();
}

function resizeWindCanvas() {
    if (!windCanvas || !gl) return;

    const rect = map.getContainer().getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width));
    const h = Math.max(1, Math.round(rect.height));

    windCanvas.width = w;
    windCanvas.height = h;
    windCanvas.style.width = w + "px";
    windCanvas.style.height = h + "px";

    gl.viewport(0, 0, w, h);
}




// Utils WebGL stuff
function compileShader(gl, type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);

    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error("Erreur compilation shader:", gl.getShaderInfoLog(s));
        console.error(src);
    }
    return s;
}

function linkProgram(gl, vsSrc, fsSrc) {
    const vs = compileShader(gl, gl.VERTEX_SHADER, vsSrc);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, fsSrc);

    const p = gl.createProgram();
    gl.attachShader(p, vs);
    gl.attachShader(p, fs);
    gl.linkProgram(p);

    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
        console.error("Erreur link program:", gl.getProgramInfoLog(p));
    }

    return p;
}

// Init shaders / programmes
function initGL(renderer) {
    const gl = renderer.gl;

    // Fullscreen quad vertex shader
    const vsQuad = `#version 300 es
    precision highp float;

    in  vec2 aPos;
    out vec2 vUV;

    void main() {
        vUV = aPos * 0.5 + 0.5;
        gl_Position = vec4(aPos, 0.0, 1.0);
    }`;

    // Particle render vertex shader
    const vsParticle = `#version 300 es
    precision highp float;

    uniform sampler2D uParticle;

    uniform float uTopLeftX;
    uniform float uTopLeftY;
    uniform float uBottomRightX;
    uniform float uBottomRightY;
    uniform float uWidth;
    uniform float uHeight;

    in float aIndex;

    out float vSpeed;

    void main() {
        float res = float(${PARTICLE_RES});
        float x = mod(aIndex, res);
        float y = floor(aIndex / res);

        vec2 uv = vec2(x / res, y / res);
        vec4 particle = texture(uParticle, uv);

        vec2 pos = particle.rg;
        float speed = particle.a;
        vSpeed = speed;

        // Domaine ALARO normalisé [0..1] -> pixels écran du rectangle ALARO
        float screenX = uTopLeftX + pos.x * (uBottomRightX - uTopLeftX);

        // IMPORTANT : inversion verticale du domaine au rendu
        float screenY = uTopLeftY + (1.0 - pos.y) * (uBottomRightY - uTopLeftY);

        // pixels -> NDC OpenGL
        float ndcX = screenX / uWidth * 2.0 - 1.0;
        float ndcY = 1.0 - screenY / uHeight * 2.0;

        gl_Position = vec4(ndcX, ndcY, 0.0, 1.0);
        gl_PointSize = 2.3;
    }`;

    // Particle render fragment shader
    const fsParticle = `#version 300 es
    precision highp float;

    in float vSpeed;
    out vec4 fragColor;

    void main() {
        vec2 p = gl_PointCoord - vec2(0.5);
        float d = length(p);
        if (d > 0.5) {
            discard;
        }

        float s = clamp(vSpeed / 40.0, 0.0, 1.0);

        vec3 color;
        if (s < 0.25) {
            color = vec3(0.1, 0.4, 1.0);
        } else if (s < 0.5) {
            color = vec3(0.0, 1.0, 0.5);
        } else if (s < 0.75) {
            color = vec3(1.0, 0.9, 0.1);
        } else {
            color = vec3(1.0, 0.2, 0.1);
        }
// color not applied 
        fragColor = vec4(1.0, 1.0, 1.0, 0.8);
    }`;

    // Particle update fragment shader
    const fsUpdate = `#version 300 es
    precision highp float;

    in vec2 vUV;

    uniform sampler2D uParticle;
    uniform sampler2D uWind;

    out vec4 fragColor;

    float rand(vec2 co) {
        return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
        vec4 p = texture(uParticle, vUV);

        vec2 pos  = p.rg;
        float age = p.b;

        // texture vent lue en coordonnées normalisées
        pos = fract(pos);

        // IMPORTANT : flip vertical du vent
        vec2 wind = texture(uWind, vec2(pos.x, 1.0 - pos.y)).rg;
        float speed = length(wind);

        // facteur de déplacement
        pos += wind * 0.00002;

        // soft wrap 
        if (pos.x < 0.0) pos.x += 1.0;
        if (pos.x > 1.0) pos.x -= 1.0;
        if (pos.y < 0.0) pos.y += 1.0;
        if (pos.y > 1.0) pos.y -= 1.0;

        age += 1.0;

        // regenerate a particle
        if (age > 100.0 || speed < 0.0001) {
            pos = vec2(
                rand(vUV + age * 0.013),
                rand(vUV + age * 0.071 + 2.0)
            );
            age = 0.0;
        }

        fragColor = vec4(pos, age, speed);
    }`;

    // Fade trail shader
    const fsTrailFade = `#version 300 es
    precision highp float;

    in vec2 vUV;
    uniform sampler2D uTrail;

    out vec4 fragColor;

    void main() {
        vec4 c = texture(uTrail, vUV);
        c.rgb *= 0.92;
        c.a   *= 0.90;
        fragColor = c;
    }`;

    // Trails texture display
    const fsTrailDisplay = `#version 300 es
    precision highp float;

    in vec2 vUV;
    uniform sampler2D uTrail;

    out vec4 fragColor;

    void main() {
        fragColor = texture(uTrail , vUV);
    }`;

    // GLSL progs
    updateProgram         = linkProgram(gl, vsQuad, fsUpdate);
    particleRenderProgram = linkProgram(gl, vsParticle, fsParticle);
    trailFadeProgram      = linkProgram(gl, vsQuad, fsTrailFade);
    trailDisplayProgram   = linkProgram(gl, vsQuad, fsTrailDisplay);

    // locations
    updateParticleLocation = gl.getUniformLocation(updateProgram, "uParticle");
    updateWindLocation     = gl.getUniformLocation(updateProgram, "uWind");

    renderParticleLocation = gl.getUniformLocation(particleRenderProgram, "uParticle");
    topLeftXLocation       = gl.getUniformLocation(particleRenderProgram, "uTopLeftX");
    topLeftYLocation       = gl.getUniformLocation(particleRenderProgram, "uTopLeftY");
    bottomRightXLocation   = gl.getUniformLocation(particleRenderProgram, "uBottomRightX");
    bottomRightYLocation   = gl.getUniformLocation(particleRenderProgram, "uBottomRightY");
    canvasWidthLocation    = gl.getUniformLocation(particleRenderProgram, "uWidth");
    canvasHeightLocation   = gl.getUniformLocation(particleRenderProgram, "uHeight");

    fadeTrailLocation      = gl.getUniformLocation(trailFadeProgram   , "uTrail");
    displayTrailLocation   = gl.getUniformLocation(trailDisplayProgram, "uTrail");

    // Fill the Particles Buffer indices
    const n = PARTICLE_RES * PARTICLE_RES;
    const indices = new Float32Array(n);
    for (let i = 0; i < n; i++) {
        indices[i] = i;
    }

    particleIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, particleIndexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    // Fullscreen quad
    quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([
            -1, -1,
             1, -1,
             1,  1,
            -1,  1
        ]),
        gl.STATIC_DRAW
    );

    console.log("GL initialized");
}

// Init particles as RGBA Float32 array (RGBA32F)
function initParticles(renderer) {
    const gl = renderer.gl;

    const ext = gl.getExtension("EXT_color_buffer_float");
    if (!ext) {
        console.error("EXT_color_buffer_float unsupported");
        alert("Your GPU renderer doesn't support EXT_color_buffer_float");
        return;
    }

    const n = PARTICLE_RES * PARTICLE_RES;
    const state = new Float32Array(n * 4);

    for (let i = 0; i < n; i++) {
        state[4 * i + 0] = Math.random();           // x
        state[4 * i + 1] = Math.random();           // y
        state[4 * i + 2] = Math.random() * 120.0;   // age
        state[4 * i + 3] = 0.0;                     // speed
    }

    // Texture A = source
    particleTexA = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, particleTexA);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA32F,
        PARTICLE_RES,
        PARTICLE_RES,
        0,
        gl.RGBA,
        gl.FLOAT,
        state
    );

    // Texture B = destination
    particleTexB = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, particleTexB);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA32F,
        PARTICLE_RES,
        PARTICLE_RES,
        0,
        gl.RGBA,
        gl.FLOAT,
        state
    );

    // FBO destination for update
    particleFboB = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, particleFboB);
    gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        particleTexB,
        0
    );

    const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    if (status !== gl.FRAMEBUFFER_COMPLETE) {
        console.error("incomplete Particle FBO :", status);
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    console.log("Particles initialized:", n);
}

// ======================================================
// Init buffers de traînées
// ======================================================
function initTrailBuffers(renderer) {
    const gl = renderer.gl;

    trailWidth = gl.canvas.width;
    trailHeight = gl.canvas.height;

    // ---------- Texture A
    trailTexA = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, trailTexA);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA8,
        trailWidth,
        trailHeight,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        null
    );

    // ---------- Texture B
    trailTexB = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, trailTexB);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA8,
        trailWidth,
        trailHeight,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        null
    );

    // ---------- FBO A
    trailFboA = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, trailFboA);
    gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        trailTexA,
        0
    );

    // ---------- FBO B
    trailFboB = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, trailFboB);
    gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        trailTexB,
        0
    );

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // clear initial
    gl.bindFramebuffer(gl.FRAMEBUFFER, trailFboA);
    gl.viewport(0, 0, trailWidth, trailHeight);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.bindFramebuffer(gl.FRAMEBUFFER, trailFboB);
    gl.viewport(0, 0, trailWidth, trailHeight);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    console.log("Trail buffers initialized:", trailWidth, trailHeight);
}

function resizeTrailBuffers(renderer) {
    const gl = renderer.gl;
    const w = gl.canvas.width;
    const h = gl.canvas.height;

    if (trailTexA && trailWidth === w && trailHeight === h) {
        return;
    }

    if (trailTexA) gl.deleteTexture(trailTexA);
    if (trailTexB) gl.deleteTexture(trailTexB);
    if (trailFboA) gl.deleteFramebuffer(trailFboA);
    if (trailFboB) gl.deleteFramebuffer(trailFboB);

    trailTexA = null;
    trailTexB = null;
    trailFboA = null;
    trailFboB = null;

    initTrailBuffers(renderer);
}

function clearTrails(renderer) {
    const gl = renderer.gl;

    if (!trailFboA || !trailFboB) return;

    gl.bindFramebuffer(gl.FRAMEBUFFER, trailFboA);
    gl.viewport(0, 0, trailWidth, trailHeight);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.bindFramebuffer(gl.FRAMEBUFFER, trailFboB);
    gl.viewport(0, 0, trailWidth, trailHeight);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}

function clearTrailsIfReady() {
    if (!renderer) return;
    clearTrails(renderer);
}

// Build the wind texture
function buildWindTexture(renderer) {
    if (!windGPU.uv) return;

    const gl = renderer.gl;

    if (windTexture) {
        gl.deleteTexture(windTexture);
        windTexture = null;
    }

    windTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, windTexture);

    // IMPORTANT : RG32F + NEAREST pour éviter texture incomplète
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RG32F,
        windGPU.nx,
        windGPU.ny,
        0,
        gl.RG,
        gl.FLOAT,
        windGPU.uv
    );

    gl.bindTexture(gl.TEXTURE_2D, null);
    windTextureReady = true;
    console.log("Wind texture ready", windGPU.nx, windGPU.ny);
}

// Update particules : particleTexA -> particleTexB and swap
function updateParticles(renderer) {
    const gl = renderer.gl;

    if (!updateProgram || !particleTexA || !windTexture) return;

    gl.bindFramebuffer(gl.FRAMEBUFFER, particleFboB);
    gl.viewport(0, 0, PARTICLE_RES, PARTICLE_RES);

    gl.useProgram(updateProgram);

    // source particules
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, particleTexA);
    gl.uniform1i(updateParticleLocation, 0);

    // Wind texture
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, windTexture);
    gl.uniform1i(updateWindLocation, 1);

    // fullscreen quad
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    const loc = gl.getAttribLocation(updateProgram, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // swap textures A/B
    const tmp = particleTexA;
    particleTexA = particleTexB;
    particleTexB = tmp;

    // rattacher la nouvelle texture destination au FBO
    gl.bindFramebuffer(gl.FRAMEBUFFER, particleFboB);
    gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        particleTexB,
        0
    );
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}

// Uniforms for particles projection
function setParticleRenderUniforms(renderer) {
    const gl = renderer.gl;

    const topLeft = map.latLngToContainerPoint([ll_ymax, ll_xmin]);
    const bottomRight = map.latLngToContainerPoint([ll_ymin, ll_xmax]);

    gl.uniform1f(topLeftXLocation, topLeft.x);
    gl.uniform1f(topLeftYLocation, topLeft.y);
    gl.uniform1f(bottomRightXLocation, bottomRight.x);
    gl.uniform1f(bottomRightYLocation, bottomRight.y);

    gl.uniform1f(canvasWidthLocation, gl.canvas.width);
    gl.uniform1f(canvasHeightLocation, gl.canvas.height);
}

// ======================================================
// PASS TRAILS
// ======================================================
function renderTrails(renderer) {
    const gl = renderer.gl;

    if (!trailTexA || !trailTexB || !particleTexA) return;

    // PASS 1 : trailTexA -> trailFboB with fade
    gl.bindFramebuffer(gl.FRAMEBUFFER, trailFboB);
    gl.viewport(0, 0, trailWidth, trailHeight);

    gl.disable(gl.BLEND);

    gl.useProgram(trailFadeProgram);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, trailTexA);
    gl.uniform1i(fadeTrailLocation, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    let loc = gl.getAttribLocation(trailFadeProgram, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

    // PASS 2 : draw current particles into trailFboB
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    gl.useProgram(particleRenderProgram);

    setParticleRenderUniforms(renderer);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, particleTexA);
    gl.uniform1i(renderParticleLocation, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, particleIndexBuffer);
    loc = gl.getAttribLocation(particleRenderProgram, "aIndex");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 1, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.POINTS, 0, PARTICLE_RES * PARTICLE_RES);

    gl.disable(gl.BLEND);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // SWAP trail A/B
    let tmpTex = trailTexA;
    trailTexA = trailTexB;
    trailTexB = tmpTex;

    let tmpFbo = trailFboA;
    trailFboA = trailFboB;
    trailFboB = tmpFbo;
}

// Draw on screen
function drawTrailToScreen(renderer) {
    const gl = renderer.gl;
    if (!trailTexA) return;

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.disable(gl.BLEND);

    gl.useProgram(trailDisplayProgram);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, trailTexA);
    gl.uniform1i(displayTrailLocation, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    const loc = gl.getAttribLocation(trailDisplayProgram, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
}



function bindWindToggle() {
    const cb = document.getElementById("toggle-wind");
    if (!cb) {
        console.warn("toggle-wind introuvable");
        return;
    }

    windEnabled = cb.checked;

    cb.addEventListener("change", () => {
        windEnabled = cb.checked;
        console.log("windEnabled =", windEnabled);

        if (!windEnabled) {
            clearTrailsIfReady();

            // optionnel : effacer aussi le canvas principal
            if (renderer && renderer.gl) {
                const gl = renderer.gl;
                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
                gl.clearColor(0, 0, 0, 0);
                gl.clear(gl.COLOR_BUFFER_BIT);
            }
        }
    });
}




// Load the json file
function loadWindData(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const uRecord = data.find(r => r.header.parameterNumber === 2);
            const vRecord = data.find(r => r.header.parameterNumber === 3);

            if (!uRecord || !vRecord) {
                console.error("U or V component missing");
                return;
            }

            const header = uRecord.header;
            const nx = header.nx;
            const ny = header.ny;

            const uv = new Float32Array(nx * ny * 2);

            for (let i = 0; i < nx * ny; i++) {
                uv[2 * i + 0] = uRecord.data[i];
                uv[2 * i + 1] = vRecord.data[i];
            }

            windGPU.header = header;
            windGPU.uv = uv;
            windGPU.nx = nx;
            windGPU.ny = ny;

            windTexture = null;
            windTextureReady = false;

            console.log("Wind loaded", nx, ny);
        })
        .catch(err => console.error(err));
}

// ======================================================
// Rendu overlay maison : remplace le callback Pixi
// ======================================================
function renderWindFrame() {
    if (!windEnabled) return;

    if (!renderer || !gl) return;

    if (!updateProgram) {
        initGL(renderer);
    }

    if (!particleTexA) {
        initParticles(renderer);
    }

    if (!trailTexA) {
        initTrailBuffers(renderer);
    }

    resizeTrailBuffers(renderer);

    if (windGPU.uv && !windTexture) {
        buildWindTexture(renderer);
    }

    if (windTextureReady && windTexture) {
        updateParticles(renderer);
        renderTrails(renderer);
        drawTrailToScreen(renderer);
    }
}


// Animation
function animate() {
    renderWindFrame();
    requestAnimationFrame(animate);
}







let level ="900" ;  
function buildWindUrlFromDate(isoDate, level) {
    if (!isoDate) return null;

    const d = new Date(isoDate);

    const yyyy = d.getUTCFullYear();
    const mm   = String(d.getUTCMonth() + 1).padStart(2, "0");
    const dd   = String(d.getUTCDate()).padStart(2, "0");
    const hh   = String(d.getUTCHours()).padStart(2, "0");

    // adapte ici le niveau si besoin ; pour l'instant on fixe 900
    return `uv_json/ao13/wind_${yyyy}${mm}${dd}T${hh}0000Z_900.json`;
}



window.reloadWindForDate = function(isoDate) {
    console.log("reloadWindForDate ->", isoDate);

    const url = buildWindUrlFromDate(isoDate);
    if (!url) return;

    // reset visuel
    clearTrailsIfReady();

    // forcer la reconstruction de la texture vent
    windTexture = null;
    windTextureReady = false;

    // recharge le JSON vent correspondant à la date
    loadWindData(url);
};


// ======================================================
// Wind date + level helpers
// ======================================================

// niveaux disponibles dans tes fichiers
//const AVAILABLE_WIND_LEVELS = [200, 250, 500, 600, 800, 900, 950];

// Follow geoserver layers 
const AVAILABLE_WIND_LEVELS = [800, 850, 900, 950];

// ======================================================
// Wind levels / date / reload helpers
// ======================================================

// Niveaux réellement disponibles dans uv_json/
//const AVAILABLE_WIND_LEVELS = [200, 250, 500, 600, 800, 900, 950];

// UI niveau
const levelSlider  = document.getElementById("levelSlider");
const levelDisplay = document.querySelector(".level-display");

// ------------------------------------------------------
// Retourne la vraie pression à partir de l'index slider
// ------------------------------------------------------
function getSelectedLevel() {
    if (!levelSlider) return 900;

    const idx = parseInt(levelSlider.value, 10);
    return AVAILABLE_WIND_LEVELS[idx] ?? 900;
}

// ------------------------------------------------------
// Met à jour l'affichage "900 hPa", etc.
// ------------------------------------------------------
function updateLevelDisplay() {
    if (!levelDisplay) return;
    levelDisplay.textContent = `${getSelectedLevel()} hPa`;
}

// ------------------------------------------------------
// Construit l'URL du JSON vent à partir de la date ISO
// et du niveau réel
// Ex:
// isoDate = "2022-07-25T03:00:00.000Z"
// level   = 900
// => uv_json/wind_20220725T030000Z_900.json
// ------------------------------------------------------
function buildWindUrlFromDateAndLevel(isoDate, level) {
    if (!isoDate || !level) return null;

    const d = new Date(isoDate);

    const yyyy = d.getUTCFullYear();
    const mm   = String(d.getUTCMonth() + 1).padStart(2, "0");
    const dd   = String(d.getUTCDate()).padStart(2, "0");
    const hh   = String(d.getUTCHours()).padStart(2, "0");

    return `uv_json/wind_${yyyy}${mm}${dd}T${hh}0000Z_${level}.json`;
}

// ------------------------------------------------------
// Recharge le vent pour une date donnée
// en utilisant le niveau actuellement sélectionné
// Cette fonction est appelée depuis timeline.js
// ------------------------------------------------------
window.reloadWindForDate = function(isoDate) {
    const level = getSelectedLevel();
    const url = buildWindUrlFromDateAndLevel(isoDate, level);

    console.log("reloadWindForDate ->", isoDate, "| level =", level, "| url =", url);

    if (!url) return;

    // 1) reset visuel des trails
    clearTrailsIfReady();

    // 2) invalider le vent courant
    windTexture = null;
    windTextureReady = false;

    // si tu veux repartir avec un nuage neuf à chaque changement de date/niveau,
    // on pourra décommenter plus tard :
    // initParticles(renderer);

    // 3) charger le nouveau champ de vent
    loadWindData(url);
};

// ------------------------------------------------------
// Recharge le vent pour la date courante timeline
// mais avec le niveau courant du slider
// ------------------------------------------------------
function reloadWindForCurrentDateAndLevel() {
    if (!window.timeSteps || !window.timeSteps.length) return;

    const idx = window.currentIndex || 0;
    const isoDate = window.timeSteps[idx];
    if (!isoDate) return;

    window.reloadWindForDate(isoDate);
}

// ------------------------------------------------------
// Branche le slider de niveau
// ------------------------------------------------------
function bindLevelSlider() {
    if (!levelSlider) {
        console.warn("levelSlider introuvable");
        return;
    }

    // affichage initial
    updateLevelDisplay();

    // changement de niveau
    levelSlider.addEventListener("input", () => {
        updateLevelDisplay();
        reloadWindForCurrentDateAndLevel();
    });
}

// ------------------------------------------------------
// recharge le vent pour la date courante timeline
// mais avec un NOUVEAU niveau
// ------------------------------------------------------
function reloadWindForCurrentDateAndLevel() {
    if (!window.timeSteps || !window.timeSteps.length) return;

    const idx = window.currentIndex || 0;
    const isoDate = window.timeSteps[idx];
    if (!isoDate) return;

    window.reloadWindForDate(isoDate);
}

// ------------------------------------------------------
// branche le slider de niveau
// ------------------------------------------------------
function bindLevelSlider() {
    if (!levelSlider) {
        console.warn("levelSlider introuvable");
        return;
    }

    // affichage initial
    updateLevelDisplay();

    // changement de niveau
    levelSlider.addEventListener("input", () => {
        updateLevelDisplay();
        reloadWindForCurrentDateAndLevel();
    });
}



// Init
initWindCanvas();
bindWindToggle();
bindLevelSlider();
animate();
// chargement initial : on prend la date actuellement sélectionnée dans la timeline
/*etTimeout(() => {
    if (window.timeSteps && window.timeSteps.length > 0) {
        const iso = window.timeSteps[window.currentIndex || 0];
        window.reloadWindForDate(iso);
    } else {
        console.warn("Aucune date timeline disponible au démarrage");
    }
}, 0);*/



// ======================================================
// Evénements Leaflet
// ======================================================
map.on("zoomstart", () => {
    clearTrailsIfReady();
});

map.on("movestart", () => {
    clearTrailsIfReady();
});



map.on("resize", () => {
    resizeWindCanvas();
    resizeTrailBuffers(renderer);
    clearTrailsIfReady();
});

map.on("zoom", () => {
    clearTrailsIfReady();
});

map.on("move", () => {
    // pas de redraw explicite nécessaire :
    // la boucle animate() tourne déjà
});




// PATCH FOR THE ZOOM AND PAN MISS ALIGNEMENT 
// Le canvas reste en pointer-events = "none"
const maSouris = { x: 0, y: 0 };
const cont = document.querySelector('.leaflet-wind-layer');
cont.addEventListener('mousemove', (event) => {
    const rect = cont.getBoundingClientRect();
    
    // Correction du zoom et du redimensionnement
    maSouris.x = (event.clientX - rect.left) * (cont.width / rect.width);
    maSouris.y = (event.clientY - rect.top)  * (cont.height / rect.height);
});

window.addEventListener('mousemove', (event) => {
    const rect = cont.getBoundingClientRect();
    
    // 1. Position brute corrigée du zoom (votre code actuel)
    let mouseX = (event.clientX - rect.left) * (cont.width / rect.width);
    let mouseY = (event.clientY - rect.top) * (cont.height / rect.height);

    // 2. Correction du PAN 
    // Soustrayez les variables qui stockent le décalage de votre caméra/pan
    //maSouris.x = mouseX - pan.x; 
    //maSouris.y = mouseY - pan.y;
});


/*
let ndcX = 0;
let ndcY = 0;

window.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    
    // Position de la souris en pixels relative au canvas
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Conversion en coordonnées normalisées WebGL (entre -1 et 1)
    ndcX = (mouseX / rect.width) * 2 - 1;
    ndcY = -(mouseY / rect.height) * 2 + 1; // Le Y est inversé en WebGL
});

// 2. Multipliez les coordonnées de la souris par cette matrice inversée
let mouseVector = [ndcX, ndcY, 0, 1]; // Coordonnées homogènes


// 1. Créez un tableau (vecteur de 4 éléments) pour recevoir le résultat
let worldMouse = null ; 

// 2. Créez la matrice inversée de votre vue (qui contient le Pan/Zoom)
let inverseViewMatrix = mat4.create();
mat4.invert(inverseViewMatrix, viewMatrix); 

// 3. Multipliez la position souris (ndcX, ndcY) par la matrice inversée
// Le résultat est directement injecté dans votre variable 'worldMouse'
vec4.transformMat4(worldMouse, [ndcX, ndcY, 0, 1], inverseViewMatrix);

// 4. Vous avez enfin les bonnes coordonnées alignées avec vos particules !
maSourisWebGL.x = worldMouse[0];
maSourisWebGL.y = worldMouse[1];*/



