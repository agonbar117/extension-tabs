"use strict"

/////////////////////
/// FUNCIONES
//////////////////////

//Función btnClicked:
//Obtiene los datos de cada pestaña y los guarda en un objeto. Guardará todos los objetos en un array vacío con el que operar.
//Al tener el array completo se usará un blob para crear una URL con el que descargar los datos de ese array en un fichero .txt.
function btnClicked() {
    //chrome.tabs.query ejecuta una función sobre todas las pestañas, puedes limitar las pestañas a las que esto afecta en el objeto vacio.
    chrome.tabs.query({}, (tabs) =>{ //La función debe recibir el parámetro "tabs" para poder operar con las pestañas, también debe estar declarado en el manifest.json.
        for (let tab of tabs) { //Este bucle for recorrerá todas las pestañas abiertas del navegador y le aplicará lo que tiene indicado entre corchetes.           
            tabActual={
            Nombre: tab.title, //Guarda el nombre de la pestaña.
            URL: tab.url, //Guarda la URL de la pestaña
            toString: function(){return this.Nombre+"\n"+this.URL+"\n";} //JS no sabe bien como convertir objetos a string, hay que indicarle cómo hacerlo de esta forma.
        }

        resultado.push(tabActual); //Va añadiendo cada objeto al array de resultado.
        }
       






        //TODO: Crear una función solo para obtener la fecha

        //Obtenemos la fecha actual y dividimos en variables el dia, mes y año        
        let hoy = new Date();
        let dd = hoy.getDate();
        let mm = hoy.getMonth()+1; //Por algun motivo pone un mes menos del actual por defecto, sumamos +1 para evitarlo
        let yyyy = hoy.getFullYear();

        //Nos aseguramos que el dia y el mes tienen siempre 2 dígitos
        if(dd<10) {
            dd='0'+dd;
        } 
 
        if(mm<10) {
            mm='0'+mm;
        } 
        
        //Creamos el nombre del fichero a guardar
        let numPestañas = tabs.length;
        let nombre = yyyy + "-" + mm + "-" + dd + "-" + numPestañas + "p.txt";

        
        
        


        //TODO: Crear una función solo para hacer la descarga

        let blob= new Blob(resultado, {type: "text/plain; charset=UTF-8"}); //Crea un blob del array resultado, de tipo texto plano.
        let url= URL.createObjectURL(blob); //Crea una URL a partir del blob creado anteriormente.
        chrome.downloads.download({ //API de descargas de Google. 
            url:url, //Recibe una URL y lo descarga.
            filename: nombre 
        });
        window.close(); //Al iniciar la descarga cierra el popup.html.
    });
}



////////////////////
/// MAIN
/////////////////////

let tabActual={}; //Declara el objeto vacío, se usará para guardar los datos de cada pestaña.
let resultado=[]; //Declara el array vacío, se usará para guardar todos los objetos con los datos de cada pestaña.

document.getElementById("btnDescargar").addEventListener("click", btnClicked);

