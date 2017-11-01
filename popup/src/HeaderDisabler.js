// TODO use Helper.getWhatsAppTabs()
import Helper from './Helper.js';

const cssCode = '._3YewW:not(._1UvQg):not(.MwhOx) { display: none; }';

export default class HeaderDisabler {
  static on() {
    browser.tabs.query({ url: 'https://web.whatsapp.com/' }).then((tabs) => {
      for (const tab of tabs) {
        browser.tabs.insertCSS(tab.id, { code: cssCode });
      }
    });
  }

  static off() {
    browser.tabs.query({ url: 'https://web.whatsapp.com/' }).then((tabs) => {
      for (const tab of tabs) {
        browser.tabs.removeCSS(tab.id, { code: cssCode });
      }
    });
  }
}
