const counter = 4;
console.log(counter);
console.log("This is a popup!");
console.log('Hello world console from file');
var myName  = 'Carsten Preene Binderup';
console.log(myName);
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }
console.log(getCurrentTab().url);
