// ===========================================================
// Calendar object
// ===========================================================


// Animation speed 
//const PLAY_INTERVAL = 500;

// Use a layer to fetch the dates from geoserver
const  MNAME = 'behra_surf:clst'; 


window.calendar = {

    // All ISO dates returned by GeoServer
    dates: [],
    // Dictionary :
    // key   = YYYY-MM-DD
    // value = array of ISO dates
    data: {},
    // List of available days
    availableDays: [],
    // Current selection
    selectedDate: null,
    // Index in the selected day
    selectedHour: 0,
    // Animation
    playing: false,
    timer: null

};




let fp = null;

function initializeCalendar() {
    // Évite de réinitialiser si l'instance existe déjà
    if (fp) {
        fp.destroy();
    }

    fp = flatpickr("#calendar-picker", {
        // Option "enable" pour n'activer QUE les dates présentes dans vos données
        enable: [
            function(date) {
                // Utilisation du format local YYYY-MM-DD pour éviter le décalage de fuseau horaire d'ISO
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const key = `${year}-${month}-${day}`;
                
                return window.calendar.data[key] !== undefined;
            }
        ],
        // Préfère le format ISO de base pour la valeur interne
        dateFormat: "Y-m-d",
        // Sélectionne par défaut la première date disponible
        defaultDate: window.calendar.selectedDate,
        // Événement déclenché lorsque l'utilisateur clique sur un jour
        onChange: function(selectedDates, dateStr) {
            if (selectedDates.length > 0) {
                // Met à jour la date sélectionnée (Format: YYYY-MM-DD)
                window.calendar.selectedDate = dateStr;
                window.calendar.selectedHour = 0; // Réinitialise à la première heure

                // Régénère le sélecteur d'heures HTML (balise <select>)
                buildHourSelector();

                // Met à jour votre carte/raster GeoServer
                if (typeof updateActiveRaster === "function") {
                    updateActiveRaster();
                }
            }
        }
    });
}





function buildHourSelector()
{
    const select = document.getElementById("hour-select");
    if (!select)
        return;

    select.innerHTML = "";
    const hours = window.calendar.data[ window.calendar.selectedDate ];
    if (!hours)
        return;
    hours.forEach((iso, index) =>
    {
        const option = document.createElement("option");
        option.value = index;
        const d = new Date(iso);
        option.textContent =
            d.getUTCHours()
             .toString()
             .padStart(2, "0") + ":00 UTC";

        select.appendChild(option);
    });

    select.selectedIndex = window.calendar.selectedHour;
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
  const layers = xml.querySelectorAll("Layer");
  for (let layer of layers) {
    const name = layer.querySelector("Name")?.textContent;
    if (name !== layerName) continue;

    const timeNode =      layer.querySelector('Dimension[name="time"]') || layer.querySelector('Extent[name="time"]');

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


// Load all available dates from GeoServer
async function loadTimeSteps(layerName)
{
    try
    {
        const xml = await fetchCapabilitiesXML();
        const dates = extractLayerTimes(xml, layerName);
        if (!dates || dates.length === 0)
        {
            console.error("No available dates.");
            return;
        }
        // Store all ISO dates

        window.calendar.dates = dates;
        // Build calendar dictionary
        window.calendar.data = {};
        dates.forEach(iso =>
        {
            const day = iso.substring(0,10);
            if (!window.calendar.data[day])
            {
                window.calendar.data[day] = [];
            }
            window.calendar.data[day].push(iso);
        });

        // Available days
        window.calendar.availableDays =            Object.keys(window.calendar.data);
        // First selected day
        window.calendar.selectedDate =            window.calendar.availableDays[0];
        window.calendar.selectedHour = 0;

        // Debug
        console.log(window.calendar);

        // Build interface
        buildCalendar();
        buildHourSelector();

     //   updateDateTimeDisplay();

        // Load first raster
        if (typeof updateActiveRaster === "function")
        {
            updateActiveRaster();
        }
    }
    catch(err)
    {
        console.error(err);
    }
}


// Return current ISO date
window.getCurrentISODate = function (){
    const day = window.calendar.selectedDate;
    if (!day)    return null;
    const hours = window.calendar.data[day];
    if (!hours || !hours.length)
        return null;
console.log( day ) ; 
    return hours[window.calendar.selectedHour];
};

loadTimeSteps(MNAME )   ; 
console.log(window.calendar);
