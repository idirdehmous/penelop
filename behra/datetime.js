// ===========================================================
// Calendar object
// ===========================================================


// Animation speed 
const PLAY_INTERVAL = 500;
// Use a layer to fetch the dates from geoserver
const  MNAME = 'behra_surf:clst'; 


window.calendar = {
    dates: [],
    data: {},
    availableDays: [],
    selectedDate: null,
    selectedHour: 0,
    playing: false,
    timer: null
};




/*let fp = null;
function initializeCalendar() {
    if (fp) {
        fp.destroy();
    }
    // Récupère la toute première date de votre dictionnaire
    const firstAvailableDate = window.calendar.selectedDate; // Contient déjà window.calendar.availableDays[0]

    fp = flatpickr("#calendar-picker", {
        // Force le calendrier à se positionner sur cette date à l'ouverture
        defaultDate: firstAvailableDate, 
        
        // Optionnel : empêche l'utilisateur d'aller sur des mois vides avant cette date
        minDate: firstAvailableDate, 

        enable: [
            function(date) {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const key = `${year}-${month}-${day}`;
                
                return window.calendar.data[key] !== undefined;
            }
        ],
        dateFormat: "Y-m-d",
        onChange: function(selectedDates, dateStr) {
            if (selectedDates.length > 0) {
                window.calendar.selectedDate = dateStr;
                window.calendar.selectedHour = 0;

                buildHourSelector();

                if (typeof updateActiveRaster === "function") {
                    updateActiveRaster();
                }
            }
        }
    });
}*/


function buildHourSelector() {
    const select = document.getElementById("hour-select");
    if (!select) return;

    // Vide le menu déroulant avant de le reconstruire
    select.innerHTML = "";

    // Récupère le tableau d'heures ISO pour le jour actuellement sélectionné
    const hoursISOArray = window.calendar.data[window.calendar.selectedDate];
    
    // Sécurité si aucune heure n'existe pour ce jour
    if (!hoursISOArray || hoursISOArray.length === 0) {
        const option = document.createElement("option");
        option.textContent = "--:--";
        select.appendChild(option);
        return;
    }

    // Boucle sur les dates ISO pour créer les balises <option>
    hoursISOArray.forEach((isoString, index) => {
        const option = document.createElement("option");
        option.value = index; // L'index correspond à window.calendar.selectedHour

        // Extraction directe des heures/minutes depuis la chaîne ISO (ex: "2019-01-02T03:00:00.000Z" -> "03:00")
        // Cela évite les effets de bord liés aux fuseaux horaires locaux du navigateur
        const timePart = isoString.substring(11, 16); 
        
        option.textContent = `${timePart} UTC`;
        select.appendChild(option);
    });

    select.selectedIndex = window.calendar.selectedHour;
    
    select.onchange = function() {
    window.calendar.selectedHour = parseInt(this.value, 10);
    
    syncTimelineIndex(); // recompute the index 

    if (typeof window.updateActiveRaster === "function") {
        window.updateActiveRaster().catch(console.error);
    }
};
    
  /*  select.onchange = function() {
        window.calendar.selectedHour = parseInt(this.value, 10);
        
        // Info and debug 
        console.log("New selected datetime  :", window.getCurrentISODate());

        // Met à jour la carte GeoServer
        if (typeof updateActiveRaster === "function") {
            updateActiveRaster();
        }
    };*/
}






// Scan GetCapabilities xml file 
async function fetchCapabilitiesXML() {
  if (typeof WMS_BASE_URL === "undefined") {
    throw new Error("WMS_BASE_URL variable is undefined.");
  }
  let url = WMS_BASE_URL;
  url += "service=WMS&request=GetCapabilities";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`GetCapabilities failed: ${response.status}`);
  }
  const text = await response.text();
  const parser = new DOMParser();
  return parser.parseFromString(text, "text/xml");
}


// Format time in ISO 
function parseTimeValues(raw) {
  let dates = [];
  if (!raw) return dates;

  // in case of a list 
  if (raw.includes(",")) {
    dates = raw.split(",").map(s => s.trim()).filter(Boolean);
  }

  // in case of a intervals and reolution 
  else if (raw.includes("/")) {
    const [start, end, step] = raw.split("/");
    let current = new Date(start);
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


// Get the dates  from  <Dimension> or <time>  tags 
function extractLayerTimes(xml, layerName) {
//const names = [...xml.querySelectorAll("Layer > Name")]
//    .map(n => n.textContent);
console.log(layerName);
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




function updateDateTimeDisplay()
{
    const dateEl =        document.querySelector(".timeline-date");
    const hourEl =        document.querySelector(".timeline-hour");
    if(!dateEl || !hourEl)
        return;
    const iso =   getCurrentISODate();
    if(!iso)
        return;

    const d =  new Date(iso);

    dateEl.textContent = d.toLocaleDateString("en-GB",
        { weekday:"long",   day:"2-digit", month  :"long",  year   :"numeric", timeZone:"UTC" });

    hourEl.textContent =  d.toLocaleTimeString("en-GB",
        { hour   :"2-digit", minute :"2-digit", hour12 :false,timeZone:"UTC" }) + " UTC";
}




// Get date in ISO 
window.getCurrentISODate = function() {
    const day = window.calendar.selectedDate;
    if (!day) return null;
    
    const hours = window.calendar.data[day];
    if (!hours || !hours.length) return null;
    
    // Récupère la chaîne ISO exacte (ex: "2019-01-02T06:00:00.000Z")
    const targetISO = hours[window.calendar.selectedHour];
    //console.log( targetISO  )  ; 
    return targetISO;
};



let fp = null;
function initializeCalendar() {
    // Sécurité : si aucune date n'a été chargée depuis GeoServer, on stoppe
    if (!window.calendar.selectedDate) {
        console.warn("Waiting for date array from geoserver ...");
        return;
    }

    if (fp) {
        fp.destroy();
    }

    // Set first date to the first date inn the array 
    const startDate = window.calendar.selectedDate; 

    fp = flatpickr("#calendar-picker", {
        defaultDate: startDate, 
        dateFormat: "Y-m-d",
        //inline: true , 
        // Empêche l'utilisateur de naviguer inutilement hors de votre plage de données
        minDate: window.calendar.availableDays[0], 
        maxDate: window.calendar.availableDays[window.calendar.availableDays.length - 1],

        enable: [
            function(date) {
                const year  = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day   = String(date.getDate()).padStart(2, '0');
                const key   = `${year}-${month}-${day}`;
                //console.log( window.calendar.data[key] ,  key  )  ;
                return window.calendar.data[key] !== undefined;
            }
        ],
  onChange: function(selectedDates, dateStr) {
    if (selectedDates.length > 0) {
        window.calendar.selectedDate = dateStr;
        window.calendar.selectedHour = 0; 

        buildHourSelector();   
        syncTimelineIndex();   

        if (typeof window.updateActiveRaster === "function") {
            window.updateActiveRaster().catch(console.error);
        }
    }
}

    });
    buildHourSelector();
}

// loadTime items from geoserver  
async function loadTimeSteps(layerName) {
    try {
        const xml = await fetchCapabilitiesXML();
        const dates = extractLayerTimes(xml, layerName);
        if (!dates || dates.length === 0) {
            console.error("No available dates.");
            return;
        }

        window.calendar.dates = dates;
        window.timeSteps      = dates;
        window.calendar.data  = {};
        
        dates.forEach(iso => {
            const day = iso.substring(0,10);
            if (!window.calendar.data[day]) {
                window.calendar.data[day] = [];
            }
            window.calendar.data[day].push(iso);
        });

        // Expose the vars to the window object  
        window.calendar.availableDays = Object.keys(window.calendar.data);
        window.calendar.selectedDate = window.calendar.availableDays[0]; //  init  dates 
        window.calendar.selectedHour = 0;

        // init the calendar and drop down hour menu 
        initializeCalendar(); 
        buildHourSelector();

        if (typeof updateActiveRaster === "function") {
            updateActiveRaster();
        }
    }
    catch(err) {
        console.error(err);
    }

    
}


function syncTimelineIndex() {
    const currentISO = window.getCurrentISODate(); // e.g : "2019-01-02T06:00:00.000Z"    
    if (!currentISO || !window.timeSteps) return;
    // Get the first
    const index = window.timeSteps.indexOf(currentISO);
    if (index !== -1) {
        window.currentIndex = index; 
    } else {
        console.warn("Date time not found :", currentISO);
    }
}
//loadTimeSteps(MNAME )   ; 

