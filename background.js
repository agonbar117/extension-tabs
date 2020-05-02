"use strict"

///////////////////////
/// FUNCIONES
/////////////////////


function contarPestañas(){
    chrome.tabs.query({}, (tabs)=>{
       numPestañas = tabs.length;
       actualizarBadge();
    });
 }
 
 
 function actualizarBadge(){
    chrome.browserAction.setBadgeText({
       text: numPestañas.toString()
    });
 }
 
 ////////////////////
 /// MAIN
 ///////////////////
 
 let numPestañas=0;
 contarPestañas();
 chrome.tabs.onCreated.addListener(contarPestañas);
 chrome.tabs.onRemoved.addListener(contarPestañas);