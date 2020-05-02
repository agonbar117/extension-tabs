"use strict"

/////////////////////
/// FUNCIONES
//////////////////////

function btnClicked() {
    let querying = chrome.tabs.query({}, function logTabs(tabs) {
        for (let tab of tabs) {            
            tabActual={
            Nombre: tab.title,
            URL: tab.url,
            toString: function(){return "Nombre: "+this.Nombre+"\n - URL: "+this.URL+"\n\n";}
        }

        resultado.push(tabActual);
        }
       
        let blob= new Blob([resultado], {type: "text/plain; charset=UTF-8"});
        let url= URL.createObjectURL(blob);
        chrome.downloads.download({
            url:url,
            saveAs:true
        });
        window.close(); //Al iniciar la descarga cierra el popup.html
    });
}



////////////////////
/// MAIN
/////////////////////

let tabActual={};
let resultado=[];

document.getElementById("btnDescargar").addEventListener("click", btnClicked);

