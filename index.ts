import { chrome } from 'chrome-types/_all';

const handle = (tab: chrome.tabs.Tab) => {
    if (tab.status !== 'complete') return;

    console.log(tab);
};

chrome.tabs.onCreated.addListener((e) => {
    handle(e);
});
chrome.tabs.onUpdated.addListener((_, e) => {
    handle(e);
});