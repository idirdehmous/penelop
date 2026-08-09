
const GEOSERVER_TIMEOUT = 5000;

async function checkGeoServer() {
    const controller = new AbortController();
    const timer      = setTimeout(() => controller.abort(), GEOSERVER_TIMEOUT);
    try {
        const response = await fetch(
            WMS_BASE_URL + "service=WMS&request=GetCapabilities",
            {
                method: "GET",
                signal: controller.signal
            }
        );
        clearTimeout(timer);
        if (!response.ok) {
            return {  ok: false, status: response.status, message: `HTTP ${response.status}` };
        }
        const text = await response.text();
        if (text.includes("<ServiceException") || text.includes("<ExceptionReport")) {
				
            return { ok: false, status: response.status, message: "GeoServer returned an exception." };
        }
        return { ok: true,status: response.status, message: "GeoServer is available." };
    }
    catch (err) {
        clearTimeout(timer);
        if (err.name === "AbortError") {
            return {  ok: false, status: 0,  message: "Connection timeout."  };
        }
        return { ok: false,  status: 0,  message: err.message };
    }
}

const status = document.getElementById("server-status");
const text   = document.getElementById("server-status-text");

function updateServerStatus(ok){
    if(ok){
        status.className = "status success";
        text.textContent = "Connected to GeoServer";
    }else{
        status.className = "status error";
        text.textContent = "Connection failed. Is the GeoServer running ?";
    }
}

//document.getElementById("current-date").textContent =new Date().toUTCString();
//updateServerStatus()   ; 
//checkGeoServer() ; 
