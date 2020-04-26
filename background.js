"use strict"
let tabActual={};
let resultado=[];

chrome.browserAction.onClicked.addListener(btnClicked)

function btnClicked() {
    let querying = chrome.tabs.query({}, function logTabs(tabs) {
        for (let tab of tabs) {
            tabActual={
                Nombre: tab.title,
                URL: tab.url
            }

            resultado.push(tabActual);
        }
    });
}

