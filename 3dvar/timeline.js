// Variables globales
let timeSteps = [];
let currentIndex = 0;
let playTimer = null;
let isPlaying = false;




// Animation speed 
const PLAY_INTERVAL = 500;
const CON_TIMEOUT   = 5000 ; 


// Use a layer to fetch the dates from geoserver
const  MNAME = 'ao13_surf:clst'; 

// Format time in ISO 
function parseTimeValues(raw) {
  let dates = [];
  if (!raw) return dates;
  // in case of a list 
  if (raw.includes(",")) {
    dates = raw
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);
  }
  // in case of a intervals and reolution 
  else if (raw.includes("/")) {
    const [start, end, step] = raw.split("/");
    let   current = new Date(start);
    const endDate = new Date(end);
    const stepHours = parseISODuration(step);
    while (current <= endDate) {
      dates.push(current.toISOString());
      current.setHours(current.getHours() + stepHours);
    }
  }
  // case of one date
  else {
    dates = [raw.trim()];
  }
  return dates;
}

// Append to timeSteps array  
function setTimeSteps(dates) {
  timeSteps = dates || [];
  if (!timeSteps.length) return;
  currentIndex = 0;
  window.timeSteps = timeSteps;
  window.currentIndex = currentIndex;
  const time_slider = document.querySelector(".time-slider");
  if (time_slider) {
    time_slider.min = 0;
    time_slider.max = timeSteps.length - 1;
    time_slider.value = 0;
  }
  updateDisplay();
  // buildTimeAxis(timeSteps);  
   
   
  // The app start automatically from the 1st date 
  const firstDate = timeSteps[0];
  //console.log(firstDate)   ; 
  if (firstDate && window.reloadWindForDate) {
    console.log("Loading the first date item  :", firstDate);
    window.reloadWindForDate(firstDate);
  }
}


// Scan the document 'getCapabilities.xml'
// 
/*async function fetchCapabilitiesXML(signal) {
  if (typeof WMS_BASE_URL === "undefined") {
    throw new Error("WMS_BASE_URL variable is undefined.");
  }
  let url = WMS_BASE_URL;
  url += "service=WMS&request=GetCapabilities";

  // Pass the fail signal if something went wrong  
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`GetCapabilities failed: ${response.status}`);
  }
  const text = await response.text();
  const parser = new DOMParser();
  return parser.parseFromString(text, "text/xml");
}*/



// Get the dates  from  <Dimension> or <time>  tags 
function extractLayerTimes(xml, layerName) {
  const layers = xml.querySelectorAll("Layer");
  for (let layer of layers) {
    const name = layer.querySelector("Name")?.textContent;
//console.log(name) ; 
    if (name !== layerName) continue;
    const timeNode =  layer.querySelector('Dimension[name="time"]') || layer.querySelector('Extent[name="time"]');
    if (!timeNode) {
      console.error("No time dimension found for the layer : ", layerName);
      return [];
    }
    const raw = timeNode.textContent.trim();
    return parseTimeValues(raw);
  }
  console.error("The layer :", layerName, " Not found !");
  return [];
}





//  
async function fetchCapabilitiesXML(signal) {
  if (typeof WMS_BASE_URL === "undefined") {
    throw new Error("WMS_BASE_URL variable is undefined.");
  }
  let url = WMS_BASE_URL;
  url += "service=WMS&request=GetCapabilities";

  // Pass the error signal if it fails   !  
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`GetCapabilities failed: ${response.status}`);
  }
  const text = await response.text();
  const parser = new DOMParser();
  return parser.parseFromString(text, "text/xml");
}








// Load the timesteps items in the getCapabilities.xml   
async function loadTimeSteps() {
  // Timeout Controller 
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), CON_TIMEOUT);

  // Wait for the promise since we are dealing with asynchroneous functions  !
  const minimalDisplayTime = new Promise(resolve => setTimeout(resolve, CON_TIMEOUT));

  try {
    //get xml raws  
    const xml = await fetchCapabilitiesXML(controller.signal);
    clearTimeout(timeoutId); 

    // If found   , the red/green dot is updated  
    updateServerStatus(true);

    const dates = extractLayerTimes(xml, MNAME);
    if (!dates || !dates.length) {
      console.error("No date has been found", MNAME);
      await minimalDisplayTime; // wait  CON_TIMEOUT  ms
      return;
    }

    setTimeSteps(dates);    
    
    // Waiting duration for the spinner  
    await minimalDisplayTime;
    if (typeof updateActiveRaster === "function") {
      updateActiveRaster();
    }
    return dates;

  } catch (err) {
    clearTimeout(timeoutId);

    // If no connection  the dot is RED 
    updateServerStatus(false);

    if (err.name === 'AbortError') {
      console.error("Error while loading WMS layer : The server or the network is unreachable (Timeout).");
    } else {
      console.error("Error while loading WMS layer :", err);
    }
    await minimalDisplayTime;
    throw err; 
  }
}



function updateDisplay() {
    if (!timeSteps.length) return;
    const dateEl = document.querySelector(".timeline-date");
    const timeEl = document.querySelector(".timeline-hour");
    const iso = timeSteps[currentIndex];
    const d   = new Date(iso);
    // Date in UTC
    if (dateEl) {
        dateEl.textContent = d.toLocaleDateString("en-US", {
            weekday: "long",day: "2-digit", month: "long",year: "numeric", timeZone: "UTC"  });
    }
    // Hour in UTC
    if (timeEl) {
        const hour   = String(d.getUTCHours()).padStart(2, "0");
        const minute = String(d.getUTCMinutes()).padStart(2, "0");
        timeEl.textContent = `${hour}:${minute} UTC`;
    }
}

// Previous/next buttons  
function bindTimeButtons() {
  const btnPrev = document.querySelector(".time-btn.prev");
  const btnNext = document.querySelector(".time-btn.next");
  const time_slider  = document.querySelector(".time-slider");

//console.log(btnPrev)  ;
btnPrev.addEventListener("click", async () => {
    stopTimelinePlayback();
    let prev = currentIndex - 1;
    if (prev < 0)
        prev = timeSteps.length - 1;
    await setCurrentIndex(prev);
});

btnNext.addEventListener("click", async () => {
    stopTimelinePlayback();
    let next = currentIndex + 1;
    if (next >= timeSteps.length)
        next = 0;
    await setCurrentIndex(next);
});
}



function bindPlayButton() {
  const btnPlay = document.querySelector(".time-btn.play");
  if (!btnPlay) return;
  btnPlay.addEventListener("click", () => {
    toggleTimelinePlayback();
  });
}



/*function updatePlayButtonUI() {
  const btnPlay = document.querySelector(".time-btn.play");
  if (!btnPlay) return;
  btnPlay.classList.toggle("playing", isPlaying);
}*/

function updatePlayButtonUI() {
    const btnPlay = document.querySelector(".time-btn.play");
    if (!btnPlay) return;

    const svg = btnPlay.querySelector("svg");
    if (!svg) return;

    if (isPlaying) {
        // Icône Pause
        svg.innerHTML = `
            <path d="M7 5h3v14H7z"/>
            <path d="M14 5h3v14h-3z"/>
        `;
        btnPlay.setAttribute("aria-label", "Pause");
    } else {
        // Icône Play
        svg.innerHTML = `
            <path d="M8 5v14l11-7z"/>
        `;
        btnPlay.setAttribute("aria-label", "Play");
    }
}

function bindTimeSlider() {
    const time_slider = document.querySelector(".time-slider");
    const tooltip = document.querySelector(".time-tooltip");
    if (!time_slider) return;
   
   time_slider.addEventListener("input", () => {
        currentIndex = parseInt(time_slider.value, 10);
        tooltip.textContent = timeSteps[currentIndex]
            .replace(".000Z", "Z");
        tooltip.style.display = "block";
    });

time_slider.addEventListener("mousemove", (e) => {
    const rect = time_slider.getBoundingClientRect();
 
    const x = e.clientX - rect.left;

    const ratio = x / rect.width;

    const index = Math.round(ratio * (timeSteps.length - 1));
    tooltip.textContent = timeSteps[index].replace(".000Z", "");
    tooltip.style.display = "block";
    tooltip.style.left = `${e.clientX + 10}px`;
    tooltip.style.top  = `${e.clientY - 30}px`;
});    
    
time_slider.addEventListener("click", async (e) => {
    const rect =time_slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = x / rect.width;
    const index = Math.round(ratio * (timeSteps.length - 1));
    await setCurrentIndex(index);

});    
    
    
    time_slider.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });	
}

// Animation 
function startTimelinePlayback(){
    if (isPlaying || !timeSteps.length)
        return;
    isPlaying = true;
    playTimer = setInterval(async () => {
        let next = currentIndex + 1;
        if (next >= timeSteps.length)
            next = 0;
        await setCurrentIndex(next);    }, PLAY_INTERVAL);
    updatePlayButtonUI();
}

function startTimelinePlayback() {
    if (isPlaying || !timeSteps.length)
        return;
    isPlaying = true;
    async function loop() {
        if (!isPlaying)
            return;
        let next = currentIndex + 1;
        if (next >= timeSteps.length)
            next = 0;
        await setCurrentIndex(next);
        playTimer = setTimeout(loop, PLAY_INTERVAL);
    }
    loop();
    updatePlayButtonUI();
}
function stopTimelinePlayback() {
    isPlaying = false;
    clearTimeout(playTimer);
    playTimer = null;
    updatePlayButtonUI();
}


function bindPlayButton(){
    const btnPlay = document.querySelector(".time-btn.play");
    if (!btnPlay)
        return;
    btnPlay.addEventListener("click", () => {
        if (isPlaying)
            stopTimelinePlayback();
        else
            startTimelinePlayback();
    });
}

async function setCurrentIndex(index,  redraw = true){
    if (!timeSteps.length) return;
    currentIndex = Math.max(0, Math.min(index, timeSteps.length - 1));
    window.currentIndex = currentIndex;
    const time_slider = document.querySelector(".time-slider");
    if (time_slider)
        time_slider.value = currentIndex;
    updateDisplay();
    if (typeof onTimeChange === "function") {
        await onTimeChange(currentIndex, timeSteps[currentIndex]);
    }
}

async function stepForwardTime(){
    if (!timeSteps.length) return;
    let next = currentIndex + 1;
    if (next >= timeSteps.length)
        next = 0;
    await setCurrentIndex(next);
}

function onTimeChange(index, isoDate) {
  //console.log("A new date is selected :", index, isoDate);
  if (typeof updateActiveRaster === "function") {
     updateActiveRaster();
  }
}


function buildTimeAxis() {

    const axis = document.querySelector(".time-axis");
    axis.innerHTML = "";

    const n = timeSteps.length - 1;

    timeSteps.forEach((iso, i) => {

        const d = new Date(iso);
        const hour = d.getUTCHours();

        if (hour % 3 !== 0)
            return;

        const tick = document.createElement("div");
        tick.className = "time-tick";

        tick.textContent = String(hour).padStart(2, "0");

tick.style.background = "red";
tick.style.padding = "8px";
tick.style.border = "1px solid yellow";

        tick.style.position = "absolute";
        tick.style.left = `${100 * i / n}%`;
/*tick.addEventListener("mousemove", (e) => {

    const tooltip = document.querySelector(".time-tooltip");

console.log(document.querySelector(".time-tooltip"));
    tooltip.textContent =
        iso.replace("T", " ").substring(0,16) + " UTC";

    tooltip.style.display = "block";
    tooltip.style.left = `${e.clientX + 10}px`;
    tooltip.style.top  = `${e.clientY - 30}px`;

});

tick.addEventListener("mouseleave", () => {

    document.querySelector(".time-tooltip").style.display = "none";

});*/
        axis.appendChild(tick);
      
    });
}
/*function updateSliderProgress() {
    const slider = document.querySelector(".time-slider");
    if (!slider || timeSteps.length < 2) return;
    //const percent = (currentIndex * 100) / (timeSteps.length - 1);
    slider.style.setProperty("--progress", `${percent}%`);
    //const slider = document.querySelector(".time-slider");

const percent = currentIndex * 100 / (timeSteps.length - 1);
console.log(percent);
slider.style.background =
    `linear-gradient(to right,
        #38BDF8 0%,
        #38BDF8 ${percent}%,
        #E5E5E5 ${percent}%,
        #E5E5E5 100%)`;    
}*/

const timelineContainer = document.getElementById('timeline-id');
console.log( timelineContainer  ) ;
L.DomEvent.disableClickPropagation(timelineContainer);
L.DomEvent.disableScrollPropagation(timelineContainer);

// start the timeSlider 
async function startTimeline() {
  bindTimeSlider();
  bindTimeButtons() ; 
  bindPlayButton();  
  await loadTimeSteps();
  //time_slider.value = currentIndex; 
}

