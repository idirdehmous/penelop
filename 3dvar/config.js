// Main  Configuration file 

const  BALIN_IP= "192.168.15.194";   // balin server
const  NORI_IP = "192.168.16.73" ; 	 // nori server 
const  LOCAL   = "localhost"     ;   // local machine  

// Ip address
const  HOST= BALIN_IP ;

// Geoserver start point urls 
const  WCS_BASE_URL  = 'http://'+HOST+':8080/geoserver/wcs?' ;   // WCS 
const  WMS_BASE_URL  = "http://"+HOST+":8080/geoserver/wms?" ;   // WMS 
const  CNAME = 'ao13_surf__clst'; 

// Path to wind   json file 
let  WIND_DATA_PATH="/home/idehmous/hds/webapp/behra/uv_json"  ;
let COMMON_DATE=null  ; 	
let  zoomIn=5  ; 
// Geoserver workspaces 
let WORKSPACE_SURF  = "ao13_surf"  ; 
let WORKSPACE_UPPER = "ao13_upper"  ;
