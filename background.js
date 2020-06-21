"use strict"

///////////////////////
/// FUNCIONES
/////////////////////

//Función contarPestañas:
//Obtiene el número de pestañas abiertas en todas las ventanas del navegador.
function contarPestañas(){
    //chrome.tabs.query ejecuta una función sobre todas las pestañas, puedes limitar las pestañas a las que esto afecta en el objeto vacio.
    chrome.tabs.query({}, (tabs)=>{ //La función debe recibir el parámetro "tabs" para poder operar con las pestañas, también debe estar declarado en el manifest.json. 
       numPestañas = tabs.length; //Obtiene el número de pestañas abiertas y lo guarda en la variable "numPestañas".
       actualizarBadge();
    });
 }
 
 //Función actualizarBadge:
 //Obtiene el número de pestañas y lo usa para actualizar el badge.
 function actualizarBadge(){
    chrome.browserAction.setBadgeText({ //Modifica el valor del texto del badge.
       text: numPestañas.toString() //El valor introducido en text debe ser un string.
    });
 }
 
 ////////////////////
 /// MAIN
 ///////////////////
 
 let numPestañas=0; //Declara el contador de pestañas vacío.
 
 contarPestañas();

 //Cada vez que se crea una pestaña se vuelve a ejecutar la función contarPestañas para actualizar el contador.
 chrome.tabs.onCreated.addListener(contarPestañas);
 
 //Cada vez que se elimina una pestaña se vuelve a ejecutar la función contarPestañas para actualizar el contador.
 chrome.tabs.onRemoved.addListener(contarPestañas);
 
 //Cambia el color de fondo del badge.
 chrome.browserAction.setBadgeBackgroundColor({
     color: "gray"
 })