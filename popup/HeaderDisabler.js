import './Helper.js';

const cssCode = '._3YewW:not(._1UvQg):not(.MwhOx) { display: none; }';

function on() {
  Helper.getWhatsAppTabs().then((tabs) => {
    for (const tab of tabs) {
      browser.tabs.insertCSS(tab.id, { code: cssCode });
    }
  });
}

function off() {
  Helper.getWhatsAppTabs().then((tabs) => {
    for (const tab of tabs) {
      browser.tabs.removeCSS(tab.id, { code: cssCode });
    }
  });
}
