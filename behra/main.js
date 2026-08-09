/* The main Js file :
 * The file contains functions to show and hide the waiting spinner 
 * Calls the other functions   
 * loadTimeSteps   --> get the dates 
 * buildSideBar    --> show all the added layers 
 * Updates the geoserver status on the header  
 * */

// Add a Spinner ( see what the app is doing !)
function showSpinner() {
    document.getElementById("loading-overlay").style.display = "flex";
}
function hideSpinner() {
    document.getElementById("loading-overlay").style.display = "none";
}
async function initializeApplication() {
    showSpinner();
    
    try {
        // get the dates 
        await loadTimeSteps(MNAME );        
        // Build the sidebar and the layers menu  
        buildSidebar(sidebarConfig);
        
    } catch (error) {
        // If there is an error   (failed to connect or dates not found )
        console.error("Failed to init the app  :", error);
        
        // The menu is still there , but not  doesn't  send any query  
         buildSidebar(sidebarConfig);
        
    } finally {
        // stop the spinner !
        hideSpinner();
    }
}
document.addEventListener("DOMContentLoaded", initializeApplication);
