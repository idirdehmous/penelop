// Global timeline variables 
let timeSteps = [];
let currentIndex = 0;


let isPlaying = false;
let playTimer = null;

// Animation speed 
const PLAY_INTERVAL = 500;

// Use a layer to fetch the dates from geoserver
const  MNAME = 'behra_surf:clst'; 


// Scan GetCapabilities xml file 
async function fetchCapabilitiesXML() {
  if (typeof WMS_BASE_URL === "undefined") {
    throw new Error("WMS_BASE_URL n'est pas défini.");
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


// Load dates from  WMS layer --> "the WCS doesn't serve the dates" 
async function loadTimeSteps() {
  try {
    const xml = await fetchCapabilitiesXML();
    const dates = extractLayerTimes(xml, MNAME);

    if (!dates || !dates.length) {
      console.error("No date has been found", MNAME);
      return;
    }
    setTimeSteps(dates);
    if (typeof updateActiveRaster === "function") {
      updateActiveRaster();
    }

    return dates;
  } catch (err) {
    console.error("Error while loadinf WMS layer :", err);
  }
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


// Parser 
function parseISODuration(duration) {
  // support simple : PTnH
  const m = duration.match(/^PT(\d+)H$/);
  if (m) return parseInt(m[1], 10);

  console.warn("Unkown ISO notation , fallback 1h :", duration);
  return 1;
}

// Append to timeSteps array  
function setTimeSteps(dates) {
  timeSteps = dates || [];
  if (!timeSteps.length) return;

  currentIndex = 0;
  window.timeSteps = timeSteps;
  window.currentIndex = currentIndex;

  const slider = document.querySelector(".time-slider");
  if (slider) {
    slider.min = 0;
    slider.max = timeSteps.length - 1;
    slider.value = 0;
  }

  updateDisplay();


   buildTimeAxis(timeSteps);  
   
   
  // The app start automatically from the 1st date 
  const firstDate = timeSteps[0];
  if (firstDate && window.reloadWindForDate) {
    console.log("Loading the first date item  :", firstDate);
    window.reloadWindForDate(firstDate);
  }
}


window.getCurrentISODate = function () {
  if (!window.timeSteps || !window.timeSteps.length) return null;
  return window.timeSteps[window.currentIndex] || null;
};


// Format how to display 
/*function updateDisplay() {
  if (!timeSteps.length) return;
  const dateEl = document.querySelector(".time-display .date");
  const timeEl = document.querySelector(".time-display .time");
  const iso = timeSteps[currentIndex];
  const d = new Date(iso);
  if (dateEl) {
    dateEl.textContent = d.toLocaleDateString("fr-BE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  }
  if (timeEl) {
    timeEl.textContent = d.toLocaleTimeString("fr-BE", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
  }
}*/

function buildTimeAxis(timeSteps)
{
    const axis = document.querySelector(".time-axis");
    if (!axis) return;
    axis.innerHTML = "";
    timeSteps.forEach((t, index) =>
    {
        const d = new Date(t);
        // une graduation toutes les 3 heures UTC
        if (d.getUTCHours() % 3 !== 0)
            return;
        const tick = document.createElement("div");
        tick.className = "time-tick";
        tick.style.left = (index / (timeSteps.length - 1) * 100) + "%";
        tick.textContent =  d.getUTCHours().toString().padStart(2, "0");
        axis.appendChild(tick);
    });
}

function updateDisplay() {

    if (!timeSteps.length) return;
    const dateEl = document.querySelector(".timeline-date");
    const timeEl = document.querySelector(".timeline-hour");

//console.log(  document.querySelector(".time-axis").innerHTML )   ;  
//let ax =   document.querySelectorAll(".time-tick").length   ; 
//console.log(ax) ; 
//console.log(dateEl);
//console.log(timeEl);
//console.log(timeSteps.length);
//console.log(timeSteps[currentIndex]);
    const iso = timeSteps[currentIndex];
    const d = new Date(iso);

    if (dateEl) {
        dateEl.textContent = d.toLocaleDateString("en-US",{ 
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    }
    if (timeEl) {
        timeEl.textContent = d.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        }) + " UTC";
    }
}





// Link to   the timeSlider in HTML
function bindTimeSlider() {
  const slider = document.querySelector(".time-slider");
  if (!slider) return;

    slider.addEventListener("input", () => {
    stopTimelinePlayback();
    currentIndex = parseInt(slider.value, 10) || 0;
    window.currentIndex = currentIndex;
    updateDisplay();

    if (typeof onTimeChange === "function") {
      onTimeChange(currentIndex, timeSteps[currentIndex]);
    }
  });
}





// Previous/next buttons  
function bindTimeButtons() {
  const btnPrev = document.querySelector(".time-btn.prev");
  const btnNext = document.querySelector(".time-btn.next");
  const slider  = document.querySelector(".time-slider");
  /*const dateElement = document.querySelector(".timeline-date");
  const timeElement = document.querySelector(".timeline-hour"); */
if (btnPrev) {
    btnPrev.addEventListener("click", () => {
	    stopTimelinePlayback();

      if (!timeSteps.length) return;
      currentIndex = Math.max(0, currentIndex - 1);
      window.currentIndex = currentIndex;

      if (slider) slider.value = currentIndex;
      updateDisplay();

      if (typeof onTimeChange === "function") {
        onTimeChange(currentIndex, timeSteps[currentIndex]);
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
	    stopTimelinePlayback();

      if (!timeSteps.length) return;

      currentIndex = Math.min(timeSteps.length - 1, currentIndex + 1);
      window.currentIndex = currentIndex;

      if (slider) slider.value = currentIndex;
      updateDisplay();

      if (typeof onTimeChange === "function") {
        onTimeChange(currentIndex, timeSteps[currentIndex]);
      }
    });
  }
}



// Increment or decrement
function stepForwardTime() {
  if (!timeSteps.length) return;

  currentIndex += 1;

  // By the end the slider comes back to the first date
  if (currentIndex >= timeSteps.length) {
    currentIndex = 0;
  }

  window.currentIndex = currentIndex;
  const slider = document.querySelector(".time-slider");
  if (slider) {
    slider.value = currentIndex;
  }
  updateDisplay();
  if (typeof onTimeChange === "function") {
    onTimeChange(currentIndex, timeSteps[currentIndex]);
  }
}

// Animation 
function startTimelinePlayback() {
  if (isPlaying) return;
  if (!timeSteps.length) return;

  isPlaying = true;
  playTimer = setInterval(() => {
    stepForwardTime();
  }, PLAY_INTERVAL);

  updatePlayButtonUI();
}

function stopTimelinePlayback() {
  isPlaying = false;
  if (playTimer) {
    clearInterval(playTimer);
    playTimer = null;
  }
  updatePlayButtonUI();
}

function bindPlayButton() {
  const btnPlay = document.querySelector(".time-btn.play");
  if (!btnPlay) return;

  btnPlay.addEventListener("click", () => {
    toggleTimelinePlayback();
  });
}


function toggleTimelinePlayback() {
  if (isPlaying) {
    stopTimelinePlayback();
  } else {
    startTimelinePlayback();
  }
}

function updatePlayButtonUI() {
  const btnPlay = document.querySelector(".time-btn.play");
  if (!btnPlay) return;

  btnPlay.classList.toggle("playing", isPlaying);
}

//  Init timeSlider 
async function initTimeline() {
  bindTimeSlider();
  bindTimeButtons();
  bindPlayButton();
  await loadTimeSteps();
}

// 
function onTimeChange(index, isoDate) {
  console.log("A new date is selected :", index, isoDate);
  if (window.reloadWindForDate) {
    window.reloadWindForDate(isoDate);
  }
}

 
// call the timeline functions 
initTimeline();

//buildTimeAxis();
