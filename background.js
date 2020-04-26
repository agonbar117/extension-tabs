"use strict"


chrome.browserAction.onClicked.addListener(btnClicked)

function btnClicked() {
    let querying = chrome.tabs.query({}, function logTabs(tabs) {
        for (let tab of tabs) {
        console.log(tab.title+ ": "+tab.url);
        }
    });
}

