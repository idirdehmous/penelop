
const LAYER_PALETTES = {
  
'clst': [
    { val: -10.0,  r: 0,   g: 0,   b: 131, a: 200 }, 
    { val: -7.67,  r: 0,   g: 0,   b: 255, a: 200 }, 
    { val: -5.33,  r: 0,   g: 100, b: 255, a: 200 },
    { val: -3.0,   r: 0,   g: 200, b: 255, a: 200 },
    { val: -0.67,  r: 0,   g: 255, b: 150, a: 200 },
    { val: 1.67,   r: 0,   g: 255, b: 0,   a: 200 },  
    { val: 4.0,    r: 100, g: 255, b: 0,   a: 200 }, 
    { val: 6.33,   r: 200, g: 255, b: 0,   a: 200 },   
    { val: 8.67,   r: 255, g: 255, b: 0,   a: 200 },  
    { val: 11.0,   r: 255, g: 200, b: 0,   a: 200 },  
    { val: 13.33,  r: 255, g: 140, b: 0,   a: 200 },   
    { val: 15.67,  r: 255, g: 60,  b: 0,   a: 200 },   
    { val: 18.0,   r: 255, g: 0,   b: 0,   a: 200 },  
    { val: 20.33,  r: 200, g: 0,   b: 0,   a: 200 }, 
    { val: 22.67,  r: 130, g: 0,   b: 0,   a: 200 },  
    { val: 25.0,   r: 80,  g: 0,   b: 0,   a: 200 }  
],
'sst': [
    { val: -10.0,  r: 0,   g: 0,   b: 131, a: 200 }, 
    { val: -7.67,  r: 0,   g: 0,   b: 255, a: 200 }, 
    { val: -5.33,  r: 0,   g: 100, b: 255, a: 200 },
    { val: -3.0,   r: 0,   g: 200, b: 255, a: 200 },
    { val: -0.67,  r: 0,   g: 255, b: 150, a: 200 },
    { val: 1.67,   r: 0,   g: 255, b: 0,   a: 200 },  
    { val: 4.0,    r: 100, g: 255, b: 0,   a: 200 }, 
    { val: 6.33,   r: 200, g: 255, b: 0,   a: 200 },   
    { val: 8.67,   r: 255, g: 255, b: 0,   a: 200 },  
    { val: 11.0,   r: 255, g: 200, b: 0,   a: 200 },  
    { val: 13.33,  r: 255, g: 140, b: 0,   a: 200 },   
    { val: 15.67,  r: 255, g: 60,  b: 0,   a: 200 },   
    { val: 18.0,   r: 255, g: 0,   b: 0,   a: 200 },  
    { val: 20.33,  r: 200, g: 0,   b: 0,   a: 200 }, 
    { val: 22.67,  r: 130, g: 0,   b: 0,   a: 200 },  
    { val: 25.0,   r: 80,  g: 0,   b: 0,   a: 200 }  
],
/* Style windy 
 * 'clst': [
    { val: -10.0,  r: 44,  g: 53,  b: 121, a: 200 }, 
    { val: -7.67,  r: 70,  g: 105, b: 174, a: 200 },
    { val: -5.33,  r: 114, g: 160, b: 209, a: 200 },
    { val: -3.0,   r: 169, g: 209, b: 232, a: 200 }, 
    { val: -0.67,  r: 222, g: 240, b: 247, a: 200 }, 
    { val: 1.67,   r: 255, g: 255, b: 215, a: 200 }, 
    { val: 4.0,    r: 254, g: 235, b: 151, a: 200 }, 
    { val: 6.33,   r: 254, g: 201, b: 101, a: 200 },
    { val: 8.67,   r: 253, g: 159, b: 66,  a: 200 }, 
    { val: 11.0,   r: 244, g: 112, b: 46,  a: 200 }, 
    { val: 13.33,  r: 227, g: 68,  b: 42,  a: 200 },  
    { val: 15.67,  r: 200, g: 30,  b: 49,  a: 200 }, 
    { val: 18.0,   r: 162, g: 14,  b: 61,  a: 200 }, 
    { val: 20.33,  r: 122, g: 4,   b: 67,  a: 200 }, 
    { val: 22.67,  r: 89,  g: 1,   b: 63,  a: 200 }, 
    { val: 25.0,   r: 59,  g: 0,   b: 48,  a: 200 }   
]*/
  'pcp': [
        { val: 0.0,   r: 255, g: 255, b: 255, a: 0   },
        { val: 0.01,   r: 255, g: 255, b: 255, a: 0   }, 
        { val: 0.05,   r: 255, g: 255, b: 255, a: 0   }, 
        { val: 0.1,   r: 161, g: 215, b: 236, a: 10 }, 
        { val: 1.0,   r: 161, g: 215, b: 236, a: 100 },
        { val: 2.5,   r: 100, g: 180, b: 220, a: 100 }, 
        { val: 5.0,   r: 45,  g: 135, b: 200, a: 180 }, 
        { val: 10.0,  r: 30,  g: 90,  b: 180, a: 200 }, 
        { val: 15.0,  r: 35,  g: 140, b: 60,  a: 200 }, 
        { val: 20.0,  r: 90,  g: 175, b: 50,  a: 200 }, 
        { val: 30.0,  r: 220, g: 220, b: 50,  a: 200 }, 
        { val: 40.0,  r: 240, g: 150, b: 30,  a: 200 }, 
        { val: 50.0,  r: 220, g: 50,  b: 40,  a: 200 }, 
        { val: 65.0,  r: 170, g: 25,  b: 35,  a: 200 }, 
        { val: 80.0,  r: 140, g: 40,  b: 130, a: 200 }, 
        { val: 100.0, r: 200, g: 70,  b: 190, a: 220 }  
    ], 


    //  Cloud cover ( 0.0 to 1.0 x100)
    'hcc':  [
        { val: 0.,  r: 255, g: 255, b: 255, a: 0   },
        { val: 0.5,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 1.,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 5.,  r: 255, g: 255, b: 255, a: 10   }, 
        { val: 10.,  r: 255, g: 255, b: 255, a: 20  }, 
        { val: 20.,  r: 255, g: 255, b: 255, a: 45  }, 
        { val: 30.,  r: 245, g: 245, b: 250, a: 70  }, 
        { val: 40.,  r: 235, g: 235, b: 240, a: 95  },
        { val: 50.,  r: 225, g: 225, b: 230, a: 120 }, 
        { val: 60.,  r: 215, g: 215, b: 220, a: 140 },
        { val: 70.,  r: 200, g: 200, b: 205, a: 150 }, 
        { val: 80.,  r: 185, g: 185, b: 190, a: 160 },
        { val: 90.,  r: 170, g: 170, b: 175, a: 200 }, 
        { val: 100,  r: 150, g: 150, b: 155, a: 200 } 
    ] , 
    
      'lcc':  [
        { val: 0.,  r: 255, g: 255, b: 255, a: 0   },
        { val: 0.5,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 1.,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 5.,  r: 255, g: 255, b: 255, a: 10   }, 
        { val: 10.,  r: 255, g: 255, b: 255, a: 20  }, 
        { val: 20.,  r: 255, g: 255, b: 255, a: 45  }, 
        { val: 30.,  r: 245, g: 245, b: 250, a: 70  }, 
        { val: 40.,  r: 235, g: 235, b: 240, a: 95  },
        { val: 50.,  r: 225, g: 225, b: 230, a: 120 }, 
        { val: 60.,  r: 215, g: 215, b: 220, a: 140 },
        { val: 70.,  r: 200, g: 200, b: 205, a: 150 }, 
        { val: 80.,  r: 185, g: 185, b: 190, a: 160 },
        { val: 90.,  r: 170, g: 170, b: 175, a: 200 }, 
        { val: 100,  r: 150, g: 150, b: 155, a: 200 } 
    ] , 
          'mcc': [
        { val: 0.,  r: 255, g: 255, b: 255, a: 0   },
        { val: 0.5,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 1.,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 5.,  r: 255, g: 255, b: 255, a: 10   }, 
        { val: 10.,  r: 255, g: 255, b: 255, a: 20  }, 
        { val: 20.,  r: 255, g: 255, b: 255, a: 45  }, 
        { val: 30.,  r: 245, g: 245, b: 250, a: 70  }, 
        { val: 40.,  r: 235, g: 235, b: 240, a: 95  },
        { val: 50.,  r: 225, g: 225, b: 230, a: 120 }, 
        { val: 60.,  r: 215, g: 215, b: 220, a: 140 },
        { val: 70.,  r: 200, g: 200, b: 205, a: 150 }, 
        { val: 80.,  r: 185, g: 185, b: 190, a: 160 },
        { val: 90.,  r: 170, g: 170, b: 175, a: 200 }, 
        { val: 100,  r: 150, g: 150, b: 155, a: 200 } 
    ] , 
  'tcc': [
        { val: 0.,  r: 255, g: 255, b: 255, a: 0   },
        { val: 0.5,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 1.,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 5.,  r: 255, g: 255, b: 255, a: 10   }, 
        { val: 10.,  r: 255, g: 255, b: 255, a: 20  }, 
        { val: 20.,  r: 255, g: 255, b: 255, a: 45  }, 
        { val: 30.,  r: 245, g: 245, b: 250, a: 70  }, 
        { val: 40.,  r: 235, g: 235, b: 240, a: 95  },
        { val: 50.,  r: 225, g: 225, b: 230, a: 120 }, 
        { val: 60.,  r: 215, g: 215, b: 220, a: 140 },
        { val: 70.,  r: 200, g: 200, b: 205, a: 150 }, 
        { val: 80.,  r: 185, g: 185, b: 190, a: 160 },
        { val: 90.,  r: 170, g: 170, b: 175, a: 200 }, 
        { val: 100,  r: 150, g: 150, b: 155, a: 200 } 
    ] , 
    
 
 'sfc': [
    { val:   0, r:   0, g:   0, b: 131, a: 200 }, // Bleu foncé
    { val:  100, r:   0, g:   0, b: 255, a: 200 }, // Bleu
    { val:  200, r:   0, g: 100, b: 255, a: 200 }, // Bleu clair
    { val:  300, r:   0, g: 200, b: 255, a: 200 }, // Cyan
    { val:  400, r:   0, g: 255, b: 150, a: 200 }, // Vert d'eau
    { val:  500, r:   0, g: 255, b:   0, a: 200 }, // Vert
    { val:  600, r: 100, g: 255, b:   0, a: 200 }, // Vert-jaune
    { val:  700, r: 200, g: 255, b:   0, a: 200 }, // Jaune-vert
    { val:  800, r: 255, g: 255, b:   0, a: 200 }, // Jaune
    { val:  900, r: 255, g: 200, b:   0, a: 200 }, // Jaune-orange
    { val: 1000, r: 255, g: 140, b:   0, a: 200 }, // Orange
    { val: 1100, r: 255, g:  60, b:   0, a: 200 }, // Orange foncé
    { val: 1200, r: 255, g:   0, b:   0, a: 200 }, // Rouge
    { val: 1300, r: 200, g:   0, b:   0, a: 200 }, // Rouge sombre
    { val: 1400, r: 130, g:   0, b:   0, a: 200 }, // Brun rouge
    { val: 1500, r:  80, g:   0, b:   0, a: 200 }  // Brun foncé
] ,    
 
'clsh': [
        { val: 0.0,   r: 139, g: 69,  b: 19,  a: 180 },
        { val: 10.0,  r: 160, g: 82,  b: 45,  a: 180 }, 
        { val: 20.0,  r: 210, g: 105, b: 30,  a: 180 }, 
        { val: 30.0,  r: 244, g: 164, b: 96,  a: 180 }, 
        { val: 40.0,  r: 245, g: 222, b: 179, a: 150 }, 
        { val: 50.0,  r: 230, g: 245, b: 230, a: 150 },
        { val: 60.0,  r: 174, g: 213, b: 129, a: 180 }, 
        { val: 70.0,  r: 100, g: 180, b: 100, a: 180 },
        { val: 80.0,  r: 50,  g: 150, b: 150, a: 200 }, 
        { val: 85.0,  r: 45,  g: 135, b: 200, a: 200 }, 
        { val: 90.0,  r: 30,  g: 90,  b: 180, a: 200 }, 
        { val: 95.0,  r: 20,  g: 50,  b: 140, a: 220 }, 
        { val: 100.0, r: 74,  g: 20,  b: 140, a: 220 } 
    ], 

'acrr': [
        { val: 0.0,   r: 255, g: 255, b: 255, a: 0   }, 
        { val: 1.0,   r: 102, g: 204, b: 255, a: 140 }, 
        { val: 2.0,   r: 0,   g: 153, b: 255, a: 170 }, 
        { val: 5.0,   r: 0,   g: 102, b: 204, a: 190 }, 
        { val: 10.0,  r: 0,   g: 0,   b: 255, a: 200 }, 
        { val: 15.0,  r: 0,   g: 200, b: 0,   a: 200 }, 
        { val: 20.0,  r: 0,   g: 150, b: 0,   a: 200 }, 
        { val: 30.0,  r: 255, g: 255, b: 0,   a: 200 }, 
        { val: 40.0,  r: 255, g: 153, b: 0,   a: 200 }, 
        { val: 50.0,  r: 255, g: 0,   b: 0,   a: 200 }, 
        { val: 65.0,  r: 204, g: 0,   b: 0,   a: 200 },
        { val: 80.0,  r: 153, g: 0,   b: 153, a: 220 }, 
        { val: 100.0, r: 255, g: 255, b: 255, a: 240 }  
    ] 

}; 

// Global vars  
let pixiOverlay = null;
let currentGeoRaster = null;
let georaster; 
let isRasterLoading; 

let currentWidth = null;
let currentHeight = null; 
//let currentType = null  ; 

// Extent of ALARO 1.3Km (ESPG 4326)
const ll_xmin = -1.051405;
const ll_ymin =  47.59286 - 0.2 ;
const ll_xmax =  10.154072;
const ll_ymax =  54.277354 -0.2 ; 

// Substract 0.2 degrees --> corresponds to the starting  of the raster (TopLeft  )
/*const ll_xmin = -1.051405;
const ll_ymin =  47.39286;
const ll_xmax =  10.154072;
const ll_ymax =  54.077354; */


// Wind variables for animation 
let windGrid = { uData: null, vData: null, header: null };
//const particles = [];
//const MAX_PARTICLES = 8000; // Particles density
//const MAX_AGE = 250;        // Age of a particle 
let particleContainer = null;
let isWindInitialized = false;

// Pre-load N Layers and save in cache 
 let N_PRE_LOADS =  3  ; 

// Init  popup 
const pop_tooltip = L.popup({
    closeButton: false,
    autoPan: false,
    className: 'custom-tooltip'
});


// Init the PixiJs containers for textures 
const textureCache = {};
const globalContainer = new PIXI.Container();
const globalSprite    = new PIXI.Sprite(); 
globalContainer.addChild(globalSprite);

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
PIXI.settings.ROUND_PIXELS = false; 

/*const fxaaFilter = new PIXI.filters.FXAAFilter();
globalSprite.filters = [fxaaFilter];*/



// baseMap Leaflet
const southWest_corner  = L.latLng([38.5, 2.5]);
const northEast_corner  = L.latLng([55.5,  8.5]);
const map_extent        = L.latLngBounds(southWest_corner, northEast_corner);

// init the map object  
const map = L.map('map', {
	crs: L.CRS.EPSG3857,
 //   maxBounds: map_extent ,       
//    maxBoundsViscosity: 1.0,        
//    minZoom: 5,                     
//    maxZoom: 10,                    
    //dragging: true ,                
//    touchZoom: true,                
//    scrollWheelZoom: true           
}).setView([51.0, 4.75], 6);


// Use two different map providers 
const osm1 = L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
    {
        minZoom: 6,
        maxZoom: 12,
        opacity: 0.8,
        attribution: '© OpenStreetMap'
    }
);

var osm2  = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 6,
	maxZoom: 12,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

/*var  osm2  = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
//	minZoom: 6,
//	maxZoom: 10,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});*/


let activeBasemap = osm1;

activeBasemap.addTo(map);






// Basemap  
const basemapsConfig = [
{  id: "osm_dark", label: "CartoDB_DarkMatter", category: "Basemaps",  icon: "map"     ,layer: osm1 },
{  id: "osm_topo", label: "OpenStreetMap_CH"  , category: "Basemaps",  icon: "mountain",layer: osm2 }
] ; 

// Layers config  
const 	layersConfig = [
{    id: "behra_surf__clst"    , name : "behra_surf__clst"  ,label: "Temperature"             ,    category: "Surface"   ,    icon: "thermometer",  group: L.layerGroup()},
{    id: "behra_surf__clsh"    , name : "behra_surf__clsh"  ,label: "Humidity"                 ,    category: "Surface"   ,    icon: "droplets",     group: L.layerGroup()},
{    id: "behra_surf__hcc"     , name : "behra_surf__hcc"   ,label: "Heigh cloud cover"       ,    category: "surface"   ,    icon: "cloudy",       group: L.layerGroup()},
{    id: "behra_surf__mcc"     , name : "behra_surf__mcc"   ,label: "Mid-level cloud cover"   ,    category: "surface"   ,    icon: "cloudy",       group: L.layerGroup()},
{    id: "behra_surf__lcc"     , name : "behra_surf__lcc"   ,label: "Low level cloud cover"   ,    category: "surface"   ,    icon: "cloudy",       group: L.layerGroup()},
{    id: "behra_surf__tcc"     , name : "behra_surf__tcc"   ,label: "Tot level cloud cover"   ,    category: "surface"   ,    icon: "cloudy",       group: L.layerGroup()},
{    id: "behra_surf__sst"     , name : "behra_surf__sst"   ,label: "Sea surface temperature" ,    category: "surface"   ,    icon: "tehrmometer",  group: L.layerGroup()},
{    id: "behra_surf__pcp"     , name : "behra_surf__pcp"   ,label: "Surface precipitation"    ,    category: "surface"   ,    icon: "cloud-rain",   group: L.layerGroup()},
{    id: "behra_surf__sfc_geo" , name : "behra_surf__sfc_geo" ,label: "Surface geopotentiel"    ,    category: "surface"   ,    icon: "cloud-rain",   group: L.layerGroup()},


{    id: "behra__temp_950" , name : "behra__temp_950", label: "950 hPa",    category: "Temperature",    icon: "thermometer",    group: L.layerGroup()},
{    id: "behra__temp_900" , name : "behra__temp_900", label: "900 hPa",    category: "Temperature",    icon: "thermometer",    group: L.layerGroup()},
{    id: "behra__hum_950"  , name : "behra__hum_950" , label: "950 hPa",    category: "Humidity",       icon: "droplets",       group: L.layerGroup()},
{    id: "behra__hum_900"  , name : "behra__hum_900" , label: "900 hPa",    category: "Humidity",       icon: "droplets",       group: L.layerGroup()},
{    id: "behra__acrr"     , name : "behra__acrr"    , label: "Radar rain", category: "Radar"   ,       icon: "cloud-rain",     group: L.layerGroup()}
];


const sidebarConfig = {
    basemaps: basemapsConfig,
    layers: layersConfig
};








// Find the layer 4 first characters and get the legend from the server 
/*function getLayerType(layer_name) {
    const match = layer_name.match(/__([a-zA-Z]+)/);
    return match ? match[1] : null;
}*/

// Legend position 
const geoserverLegendControl = L.control({ position: 'topleft' });

// Get the legend from geoserver
geoserverLegendControl.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'info legend');
    div.innerHTML = '<img id="geoserver-legend-img" src="" alt="Légende GeoServer" style="display:none;">';
    return div;
};
geoserverLegendControl.addTo(map);


// legend upadate with layer selection 
function updateLegend(layerNameWCS, style_name) {
    const legendImg = document.querySelector('#geoserver-legend-img');
    if (!legendImg) return;
    
    // legend url
    const layerNameWMS = layerNameWCS.replace("__", ":");
    let url = WMS_BASE_URL; 
    url += "REQUEST=GetLegendGraphic&";
    url += "VERSION=1.3.0&";
    url += "TRANSPARENT=true&" ; 
    //url +="OPACITY=0.2&" ; 
    url += "FORMAT=image/png&";
    url += "LAYER=" + layerNameWMS;
    
    // get the legend 
    if (style_name) {  url += "&STYLE=" + style_name;   }
    legendImg.src = url;
    legendImg.style.display = "block";
}


// Set color palette 
function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}	




function setColors(raster, canvas, imageData, layerType) {
    const data = imageData.data;
    const canvasW = canvas.width;
    const canvasH = canvas.height;
    const rasterW = currentWidth;  
    const rasterH = currentHeight; 

   // Get the right color palette 
    const thresholds = LAYER_PALETTES[layerType];
//console.log(layerType)  ;     
//console.log(LAYER_PALETTES[layerType])  ; 


    for (let y = 0; y < canvasH; y++) {
        for (let x = 0; x < canvasW; x++) {
            
            // Bilinear  Interpolation 
            const gx = (x / (canvasW - 1)) * (rasterW - 1);
            const gy = (y / (canvasH - 1)) * (rasterH - 1);
            const gX0 = Math.floor(gx);
            const gY0 = Math.floor(gy);
            const gX1 = Math.min(gX0 + 1, rasterW - 1);
            const gY1 = Math.min(gY0 + 1, rasterH - 1);
            const tx = gx - gX0;
            const ty = gy - gY0;
            
            const v00 = raster[gY0][gX0];
            const v10 = raster[gY0][gX1];
            const v01 = raster[gY1][gX0];
            const v11 = raster[gY1][gX1];
            
            const val = (1 - tx) * (1 - ty) * v00 + tx * (1 - ty) * v10 + (1 - tx) * ty * v01 + tx * ty * v11;

            // Color to interpolate 
            let r = 38, g = 0, b = 0, a = 0;

                if (val <= thresholds[0].val) {
                    // Less than the 1 st threshold 
                    r = thresholds[0].r; g = thresholds[0].g; b = thresholds[0].b; a = thresholds[0].a;
                } else if (val >= thresholds[thresholds.length - 1].val) {
                    // Greater than the 2nd threshhold 
                    r = 38; g = 0; b = 0; a = 0;
                } else {
                    // interval of interpolation  
                    for (let i = 0; i < thresholds.length - 1; i++) {
                        if (val >= thresholds[i].val && val < thresholds[i+1].val) {
                            const c1 = thresholds[i];
                            const c2 = thresholds[i+1];
                            
                            // the ratio of the value in between 
                            const tColor = (val - c1.val) / (c2.val - c1.val);
                            
                            // Interpolate  RGBA  values 
                            r = lerp(c1.r, c2.r, tColor);
                            g = lerp(c1.g, c2.g, tColor);
                            b = lerp(c1.b, c2.b, tColor);
                            a = lerp(c1.a, c2.a, tColor);
                            break;
                        }
                    }
                }            
            const idx = (y * canvasW + x) * 4;
            data[idx]     = r;
            data[idx + 1] = g;
            data[idx + 2] = b;
            data[idx + 3] = a;
        }
    }
}




const singlePixiOverlay = L.pixiOverlay((utils) => {
    const renderer = utils.getRenderer();
    const project  = utils.latLngToLayerPoint;
   // const container = utils.getContainer ? utils.getContainer() : globalContainer;
   
//const container =   globalContainer;
    // Reproject on the leaflet map 
    if (globalSprite.texture && globalSprite.texture.valid) {
        const topLeft     = project(L.latLng(ll_ymax, ll_xmin));
        const bottomRight = project(L.latLng(ll_ymin, ll_xmax));
        globalSprite.x      = topLeft.x;
        globalSprite.y      = topLeft.y;
        globalSprite.width  = bottomRight.x - topLeft.x;
        globalSprite.height = bottomRight.y - topLeft.y;
    }
    //
    if (!isWindInitialized && windGrid.uData) {
        initWindParticles(renderer, globalContainer ); 
        
        return; 
    }
    // GPU wind rendering 
    // CORRECTION 2
    // startWindLoop function ( 60  frames / second)
    if (!isWindInitialized) {
        renderer.render(globalContainer);
    }    
}, globalContainer);

// Add Pixi container to map 
singlePixiOverlay.addTo(map);



// Get WCS coverage 
async function loadGeoTIFF(date, layer_name) {
    const cacheKey = `${layer_name}_${date}`;
    let  currentType = getLayerType(layer_name);

    // set a unique cache for each layer
    if (textureCache[cacheKey]) {
        if (textureCache[cacheKey].associatedGeoRaster) {
            const cachedGeo  = textureCache[cacheKey].associatedGeoRaster;
            currentGeoRaster = cachedGeo;
            currentWidth     = cachedGeo.width;
            currentHeight    = cachedGeo.height;
                       
            //The particle apears after initialisation 
            if (isWindInitialized) {
                particles.forEach(p => resetParticle(p));
            }
        }
        return textureCache[cacheKey];
    }
//console.log("CACHE :", cacheKey);
    // Compute the coordinates (EPSG:3857)
    var limites = map.getBounds();
    var southWest = map.options.crs.project(limites.getSouthWest());
    var northEast = map.options.crs.project(limites.getNorthEast());

    var xmin = southWest.x;
    var ymin = southWest.y;
    var xmax = northEast.x;
    var ymax = northEast.y;

    // Build the URL according to  "OGC WCS 2.0.1"
    let url = WCS_BASE_URL;
    url += 'SERVICE=WCS&REQUEST=GetCoverage&VERSION=2.0.1&';
    url += 'CoverageId=' + layer_name + '&FORMAT=image/tiff&'; 
    url += 'SUBSETTINGCRS=http://www.opengis.net/def/crs/EPSG/0/3857&';
    url += 'OUTPUTCRS=urn:ogc:def:crs:EPSG::3857&'; 
    url += 'subset=http://www.opengis.net/def/axis/OGC/0/Y(' + ymin + ',' + ymax + ')&';
    url += 'subset=http://www.opengis.net/def/axis/OGC/0/X(' + xmin + ',' + xmax + ')&';
    url += 'SUBSET=http://www.opengis.net/def/axis/OGC/0/time("' + date + '")';

console.log(layer_name ,  date) ; 
    // Asynchrone request to tiff data
    const tiffRes   = await fetch(url);
    const buffer    = await tiffRes.arrayBuffer();
    const georaster = await parseGeoraster(buffer);              
        
    //console.log("DOWNLOAD :", cacheKey);
    //console.log(georaster) ; 
    // Raster resolution  dx dy  
    georaster.pixelWidth  = (georaster.xmax - georaster.xmin) / georaster.width;
    georaster.pixelHeight = (georaster.ymax - georaster.ymin) / georaster.height;        
    
    currentGeoRaster = georaster;
    currentWidth     = georaster.width;
    currentHeight    = georaster.height;        

    // CONTOURS on leaflet canvas 
    const layerCanvas  = document.createElement('canvas');
    layerCanvas.width  = georaster.width;
    layerCanvas.height = georaster.height;        
    
    const layerCtx  = layerCanvas.getContext('2d');        
    const imageData = layerCtx.createImageData(layerCanvas.width, layerCanvas.height);        
    
    // Extract 2d values 
    const raster = georaster.values[0];                
    
    // Attribution de la palette de couleurs fixée (cf. partie 3)
    setColors(raster, layerCanvas, imageData, currentType);
    layerCtx.putImageData(imageData, 0, 0);       

    // Transform to texture and send to GPU
    const localTexture = PIXI.Texture.from(layerCanvas);
    localTexture.associatedGeoRaster = georaster;
    
    // Add to  Cache 
    textureCache[cacheKey] = localTexture;       
    window.lastLoadedGeoRaster = georaster; 
     
    return localTexture;    
}



/*function buildSidebar() {
    const menu = document.getElementById("menu-container");
    menu.innerHTML = "";
    // group Layers  by categories  ( surface , upper air , etc  )
    const categories = {};
    layersConfig.forEach(layer => {
        const key = layer.category.toLowerCase();
        if (!categories[key]) {

            categories[key] = {
                title: layer.category.charAt(0).toUpperCase() +
                       layer.category.slice(1).toLowerCase(),
                icon: layer.icon,
                layers: []
            };
        }
        categories[key].layers.push(layer);
    });
    basemapsConfig.forEach(layer => {
        const key = layer.category.toLowerCase();
        if (!categories[key]) {
            categories[key] = {
                title: layer.category.charAt(0).toUpperCase() +
                       layer.category.slice(1).toLowerCase(),
                icon: layer.icon,
                layers: []
            };
        }
        categories[key].layers.push(layer);
    });
    // Construction of menu
    Object.values(categories).forEach(cat => {
        const block = document.createElement("div");
        block.className = "menu-category";
        block.innerHTML = `
            <button class="category-trigger">
                <div class="trigger-content">
                    <i data-lucide="${cat.icon}"></i>
                    <span>${cat.title}</span>
                </div>
                <i data-lucide="chevron-down" class="chevron-icon"></i>
            </button>

            <div class="sub-levels"></div>
        `;
        const sub = block.querySelector(".sub-levels");
        cat.layers.forEach(layer => {
            const btn = document.createElement("button");
            btn.className = "level-item";
            btn.dataset.layer = layer.id;
            btn.innerHTML = `
                <i data-lucide="layers"></i>
                ${layer.label}
            `;
            sub.appendChild(btn);
        });
        menu.appendChild(block);
    });

    // Icônes
    lucide.createIcons();

    // Accordeon menu  
    menu.querySelectorAll(".category-trigger")
        .forEach(trigger => {
            trigger.onclick = () => {
                trigger.parentElement.classList.toggle("active");
            };
        });
    // Pick up a layer
    menu.querySelectorAll(".level-item")
        .forEach(button => {
            button.onclick = async () => {
                menu.querySelectorAll(".level-item")
                    .forEach(b => b.classList.remove("selected"));
                button.classList.add("selected");
                window.activeLayerId = button.dataset.layer;
                await updateActiveRaster();
            };
        });
}*/

function buildSidebar() {
    const menu = document.getElementById("menu-container");
    menu.innerHTML = "";

   // group by categories
    const categories = {};
    // Basemaps + Layers
    const allItems = [
        ...sidebarConfig.basemaps,
        ...sidebarConfig.layers
    ];
    allItems.forEach(item => {
        const key = item.category.toLowerCase();
        if (!categories[key]) {

            categories[key] = {
                title: item.category.charAt(0).toUpperCase() +
                       item.category.slice(1).toLowerCase(),
                icon: item.icon,
                items: []
            };
        }
        categories[key].items.push(item);
    });

    // Build  menu
    Object.values(categories).forEach(cat => {

        const block = document.createElement("div");

        block.className = "menu-category";

        block.innerHTML = `
            <button class="category-trigger">
                <div class="trigger-content">
                    <i data-lucide="${cat.icon}"></i>
                    <span>${cat.title}</span>
                </div>
                <i data-lucide="chevron-down" class="chevron-icon"></i>
            </button>

            <div class="sub-levels"></div>
        `;
        const sub = block.querySelector(".sub-levels");
        cat.items.forEach(item => {

            const btn = document.createElement("button");
            btn.className = "level-item";
            btn.dataset.id = item.id;
            // Basemap or layers ?
            btn.dataset.type = item.layer ? "basemap" : "layer";
            btn.innerHTML = `
                <i data-lucide="layers"></i>
                ${item.label}
            `;
            sub.appendChild(btn);
        });
        menu.appendChild(block);
    });


    // Icons 
    lucide.createIcons();
    // Accordeon
    menu.querySelectorAll(".category-trigger")
        .forEach(trigger => {
            trigger.onclick = () => {
                trigger.parentElement.classList.toggle("active");
            };
        });

   // Select 
    menu.querySelectorAll(".level-item")
        .forEach(button => {
            button.onclick = async () => {
                menu.querySelectorAll(".level-item")
                    .forEach(b => b.classList.remove("selected"));
                button.classList.add("selected");
                // Basemap
                if (button.dataset.type === "basemap") {
                    const basemap = sidebarConfig.basemaps.find(
                        b => b.id === button.dataset.id
                    );
                    if (!basemap) return;
                    if (window.activeBasemap) {
                        map.removeLayer(window.activeBasemap);
                    }
                    window.activeBasemap = basemap.layer;
                    window.activeBasemap.addTo(map);
                    return;
                }
                // Model field layer  
                window.activeLayerId = button.dataset.id;
                await updateActiveRaster();

            };
        });
}



// PRELOAD 3 Layers and put in cache 
async function preloadNextSteps(count = N_PRE_LOADS) {
    if (!window.timeSteps || window.timeSteps.length === 0) return;    
    // Get the Active layer 
    const activeLayer = layersConfig.find(layer => layer.id === window.activeLayerId);
    if (!activeLayer) return
    // pre load  (temp, h, lcc ...)
    for (let i = 1; i <= count; i++) {
        const nextIndex = (window.currentIndex + i) % window.timeSteps.length;
        const nextTime = window.timeSteps[nextIndex];
        const cacheKey = `${activeLayer.name}_${nextTime}`;        
        // Si l'échéance suivante n'est pas encore en mémoire, on la télécharge en tâche de fond
        if (!textureCache[cacheKey]) {
            loadGeoTIFF(nextTime, activeLayer.name).catch(err => 
                console.warn("Layer Preload failed  : 	", err)
            );
        }
    }
}



// get layer suffix 
function getLayerType(layer_name) {
    const match = layer_name.match(/__([a-zA-Z]+)/);
    if (!match) return null;
    const rawType = match[1].toLowerCase();
    return rawType  ;  
    //return rawType.startsWith("w") ? "w" : rawType;
}


// close the popup if the mouse if outside the domain
map.on('mouseout', () => map.closePopup(pop_tooltip));


// Layers group  
const groups = {};

layersConfig.forEach(layer => {    groups[layer.id] = layer.group; });
let activeLayer = null;
document.querySelectorAll(".level-item").forEach(btn => {
    btn.addEventListener("click", function () {
        const id = this.dataset.layer;
        // remove the previous layer
        if (activeLayer) {
            map.removeLayer(activeLayer);
        }
        // Add the selected 
        activeLayer = groups[id];
        activeLayer.addTo(map);
        document.querySelectorAll(".level-item")
            .forEach(b => b.classList.remove("selected"));
        this.classList.add("selected");
    });
});


document.querySelectorAll(".level-item").forEach(btn => {
    btn.addEventListener("click", async function () {
        const id = this.dataset.layer;
        if (id === activeLayerId)
            return;
        activeLayerId = id;
        window.activeLayerId = id;
        document.querySelectorAll(".level-item")
            .forEach(b => b.classList.remove("selected"));
        this.classList.add("selected");
        await updateActiveRaster();

    });
});


// set currentIndex as a 'visible' variable from the whole window
function onTimeChange(newIndex, currentDate) {
    window.currentIndex = newIndex;    
    updateActiveRaster();     
}

// Variables d'unités globales pour les infobulles (popups)
//window.currentDataTypeLabel = "Temperature";
//window.currentDataUnit = " K";


const layerDictionary = {};
layersConfig.forEach((layer, index) => {
			const htmlIndex = (index + 2).toString(); 
			layerDictionary[htmlIndex] = layer.id;
			//console.log(htmlIndex, layer.id)  ;  			
					});
let activeLayerId = layersConfig[0].id;
window.activeLayerId = activeLayerId;



// Update with  (TIMELINE)
/*async function updateActiveRaster() {
    if (!window.timeSteps || window.timeSteps.length === 0) {
        console.warn("Dates are not yet loaded from the server !");
        return;    }
    if (typeof window.currentIndex === "undefined") {
        window.currentIndex = 0;    }        
    let current_time = window.timeSteps[window.currentIndex];  
    const dateElement = document.querySelector('.time-display .date');
    if (dateElement) {
        dateElement.innerHTML = current_time;
    }        
const activeLayer = layersConfig.find( layer => layer.id === window.activeLayerId    );
let currentType = getLayerType(activeLayer.name);
console.log(activeLayer.id);
console.log(activeLayer.name);
console.log(activeLayer.category);
console.log(currentType) ; 
if (!activeLayer)
    return;
//console.log(window.activeLayerId)   ;    
currentType = getLayerType(activeLayer.name);  
    // refresh the raster data 
    currentGeoRaster = null;
    currentRaster    = null;
    // Clean the previous texture 
    globalSprite.texture = PIXI.Texture.EMPTY;
    singlePixiOverlay.redraw();
    // Load the GeoTIFF (WCS)
    const newTexture = await loadGeoTIFF(current_time, activeLayer.name);     
    if (newTexture) {
        // 
        globalSprite.texture = newTexture;
        singlePixiOverlay.redraw();
        // restrict to the domain extent with BBOX 
        if (window.lastLoadedGeoRaster) {
           //currentGeoRaster = window.lastLoadedGeoRaster;
            //currentRaster    = window.lastLoadedGeoRaster.values[0];             
            //currentWidth     = window.lastLoadedGeoRaster.width;
            //currentHeight    = window.lastLoadedGeoRaster.height;
            //currentGeoRaster = newTexture.associatedGeoRaster;
currentRaster = currentGeoRaster.values[0];
currentWidth  = currentGeoRaster.width;
currentHeight = currentGeoRaster.height;            
            BBOX = [window.lastLoadedGeoRaster.xmin,window.lastLoadedGeoRaster.ymin,window.lastLoadedGeoRaster.xmax,window.lastLoadedGeoRaster.ymax
            ];
        }             
        // Reset the variable name , the unit and style on the popup  if a layer is loaded !
        const layerNameWMS = activeLayer.name.replace("__", ":");
        let layerStyle = "default";        
        if      (currentType === "temp" ) { layerStyle = "temp_style" ;  window.currentDataTypeLabel = "Temperature";   window.currentDataUnit = " K";        } 
        else if (currentType === "hum"  ) { layerStyle = "hum_style"  ;  window.currentDataTypeLabel = "Humidity";      window.currentDataUnit = " %"   ; } 
        else if (currentType === "neb"  ) { layerStyle = "neb_style"  ;  window.currentDataTypeLabel = "Cloud Cover";   window.currentDataUnit = " Oktas";}
        else if (currentType === "acrr" ) { layerStyle = "acrr_style" ;  window.currentDataTypeLabel = "Accum radar rain rate";      window.currentDataUnit = "mm"; }
        
        else if (currentType === "clst" ) { console.log("===> CLST");layerStyle = "temp_style" ;  window.currentDataTypeLabel = "2 meter temperature";      window.currentDataUnit = "C"; }
        else if (currentType === "clsh" ) { console.log("===> CLSH");layerStyle = "hum_style"  ;  window.currentDataTypeLabel = "2 meter rel humodity";      window.currentDataUnit = "%"; }
        else if (currentType === "lcc"  ) { layerStyle = "cloud_style";  window.currentDataTypeLabel = "Low level cloud cover";      window.currentDataUnit = "%"; }
        else if (currentType === "hcc"  ) { layerStyle = "cloud_style";  window.currentDataTypeLabel = "Heigh level cloud cover";      window.currentDataUnit = "%"; }
        else if (currentType === "pcp"  ) { layerStyle = "rain_style" ;  window.currentDataTypeLabel = "1h Accum precipitation";      window.currentDataUnit = "mm"; }

        // Call updateLeged function  
        if (typeof updateLegend === "function") { updateLegend(layerNameWMS, layerStyle);           }        
        preloadNextSteps();
    }
}*/




// Update active raster on timeline buttons click  
async function updateActiveRaster() {
    // Check timeline
    if (!window.timeSteps || window.timeSteps.length === 0) {
        console.warn("Dates are not yet loaded from the server !");
        return;
    }

    if (window.currentIndex === undefined) {
        window.currentIndex = 0;
    }
    // Current date
    const current_time = window.timeSteps[window.currentIndex];
    const dateElement = document.querySelector(".time-display .date");
    if (dateElement) {
        dateElement.innerHTML = current_time;
    }
    // Active layer
    const activeLayer = layersConfig.find(
        layer => layer.id === window.activeLayerId
    );
    if (!activeLayer) {
        console.error("Unknown active layer :", window.activeLayerId);
        return;
    }
    const currentType = getLayerType(activeLayer.name);
    console.log("Layer :", activeLayer.name);
    console.log("Type  :", currentType);

    // Reset previous raster
    currentGeoRaster = null;
    currentRaster    = null;
    globalSprite.texture = PIXI.Texture.EMPTY;
    singlePixiOverlay.redraw();

    // Load the GeoTIFF
    const newTexture = await loadGeoTIFF(   current_time,        activeLayer.name    );

    if (!newTexture)
        return;
 
    // Display new texture
    globalSprite.texture = newTexture;
    singlePixiOverlay.redraw();


    // Synchronize raster Geo  information  texture & popup  
    currentGeoRaster = newTexture.associatedGeoRaster;
    currentRaster = currentGeoRaster.values[0];
    currentWidth = currentGeoRaster.width;
    currentHeight = currentGeoRaster.height;
    BBOX = [
        currentGeoRaster.xmin,
        currentGeoRaster.ymin,
        currentGeoRaster.xmax,
        currentGeoRaster.ymax
    ];


    // Popup + Legend
    const layerNameWMS = activeLayer.name.replace("__", ":");
    let layerStyle = "default";
    switch (currentType) {
        case "temp":
            layerStyle = "temp_style";  window.currentDataTypeLabel = "Temperature";  window.currentDataUnit = "K";
            break;

        case "hum":
            layerStyle = "hum_style";   window.currentDataTypeLabel = "Humidity";     window.currentDataUnit = "%";
            break;

        case "neb":
            layerStyle = "neb_style";   window.currentDataTypeLabel = "Cloud cover";  window.currentDataUnit = "%";
            break;

        case "acrr":
            layerStyle = "acrr_style";  window.currentDataTypeLabel = "Accumulated radar rain"; window.currentDataUnit = "mm";
            break;

        case "clst":
            layerStyle = "temp_style";  window.currentDataTypeLabel = "2 meter temperature";  window.currentDataUnit = "°C";
            break;

        case "clsh":
            layerStyle = "hum_style";   window.currentDataTypeLabel = "2 meter relative humidity";  window.currentDataUnit = "%";
            break;

        case "lcc":
            layerStyle = "cloud_style"; window.currentDataTypeLabel = "Low level cloud cover"; window.currentDataUnit = "%";
            break;

        case "hcc":
            layerStyle = "cloud_style"; window.currentDataTypeLabel = "High level cloud cover"; window.currentDataUnit = "%";
            break;
            
        case "tcc":
            layerStyle = "cloud_style"; window.currentDataTypeLabel = "High level cloud cover"; window.currentDataUnit = "%";
            break;
      
        case "mcc":
            layerStyle = "cloud_style"; window.currentDataTypeLabel = "Mid-level level cloud cover"; window.currentDataUnit = "%";
            break;
        case "pcp":
            layerStyle = "rain_style"; window.currentDataTypeLabel = "1h accumulated precipitation"; window.currentDataUnit = "mm";
            break;
        case "sst":
            layerStyle = "temp_style"; window.currentDataTypeLabel = "Sea surface temperature" ; window.currentDataUnit = "°C";
            break;
            
         case "sfc_geo":
            layerStyle = "geop_style"; window.currentDataTypeLabel = "Surface geopotentiel" ; window.currentDataUnit = "mgp";
            break;
    }


    // Update legend
    if (typeof updateLegend === "function") {
        updateLegend(layerNameWMS, layerStyle);
    }

    // Preload next timesteps
    preloadNextSteps();
}






// POPUP & Mousmove 
map.on('overlayadd', function(e) {
    const cleanName = e.name.trim();
    let   matchedId = layerDictionary[cleanName];
    console.log( matchedId , cleanName  )   ; 
    if   (!matchedId) {
        const foundByText = layersConfig.find(layer => layer.label === cleanName);
        if (foundByText) matchedId = foundByText.id;
    }    
    if (matchedId) {
		
        activeLayerId = matchedId;
        updateActiveRaster(); 
  //console.log( matchedId , cleanName  )   ;
    }
});





// The coordinates and value of raster data on the popup
map.on('mousemove', (e) => {
    if (!currentGeoRaster || !currentRaster) {
        map.removeLayer(pop_tooltip);
        return;
    }
    
    const lon = e.latlng.lng ;
    const lat = e.latlng.lat ; //+ 0.2 ;    
    
    // Domain  Bounding box  
    const xmin = ll_xmin;
    const ymin = ll_ymin;
    const xmax = ll_xmax;
    const ymax = ll_ymax;
    
    // Translate the geo coordinates to pixel coordinates
    const x = Math.floor(((lon - xmin) / (xmax - xmin)) * currentWidth);
    const y = Math.floor(((ymax - lat) / (ymax - ymin)) * currentHeight);
    
    let hasData = false;        
    if (x >= 0 && x < currentWidth && y >= 0 && y < currentHeight) {        
        const val = currentRaster[y] ? currentRaster[y][x] : null;        
        if (val !== undefined && val !== null && !isNaN(val) && val !== currentGeoRaster.noDataValue) {
            hasData = true;
            
            // Popup content  
            const labelText = window.currentDataTypeLabel || "Value";
            const unitText = window.currentDataUnit || "";
            const content = `
                <div class="elegant-popup">              
                    <div class="color-bar" style="background: #5a446e"></div>             
                    <div class="content-wrapper">
                        <span class="label">Parameter: ${labelText}</span>
                        <span class="label">Longitude: ${lon.toFixed(2)} <br/> Latitude : ${lat.toFixed(2)}</span>
                        <span class="value">Value : ${val.toFixed(2)}<span class="unit">${unitText}</span></span>
                    </div>
                </div>
            `;            
            
/*console.log("POPUP");
console.log(window.currentDataTypeLabel);
console.log(window.currentDataUnit);
const activeLayer = layersConfig.find(
    l => l.id === window.activeLayerId
);
console.log(activeLayer);*/

            pop_tooltip
                .setLatLng(e.latlng)
                .setContent(content);           
            if (!map.hasLayer(pop_tooltip)) {
                pop_tooltip.addTo(map);
            }
        }
    }    
    if (!hasData) {
        map.removeLayer(pop_tooltip);
    }
});




// The updateActiveRaster is called directly when the app starts 
updateActiveRaster();

// Call sidebar 
buildSidebar(sidebarConfig)  ; 










