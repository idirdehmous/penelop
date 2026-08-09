/* The main Js file :
 * The file contains functions to show and hide the waiting spinner 
 * Calls the other functions   
 * loadTimeSteps   --> get the dates 
 * buildSideBar    --> show all the added layers 
 * startTimeline   --> init the timeline slider  
 * Updates the geoserver status on the header  
 * */

// Add a Spinner (To don't get borred !)
function showSpinner() {
    document.getElementById("loading-overlay").style.display = "flex";
}
function hideSpinner() {
    document.getElementById("loading-overlay").style.display = "none";
}
/*async function initializeApplication() {
    showSpinner();
    //checkGeoServer() ; 
    updateServerStatus()   ; 
    await loadTimeSteps(MNAME);
    await updateActiveRaster();
    buildSidebar(sidebarConfig);
    startTimeline() ;     
    hideSpinner();
}
document.addEventListener("DOMContentLoaded", initializeApplication);*/
async function initializeApplication() {
    showSpinner();
    
    try {
        // get the dates 
        await loadTimeSteps();        
        // Build the sidebar and the layers menu  
        buildSidebar(sidebarConfig);
        startTimeline();       // Build and stat the timeline  
        
    } catch (error) {
        // If there is an error   (failed to connect or dates not found )
        console.error("Failed to init the app  :", error);
        
        // The menu is still there , but not  doesn't  send any query  
         buildSidebar(sidebarConfig);
         startTimeline();
        
    } finally {
        // stop the spinner !
        hideSpinner();
    }
}
document.addEventListener("DOMContentLoaded", initializeApplication);
