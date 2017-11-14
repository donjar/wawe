import WhatsApp from '../WhatsApp.js';

const cssCode = '._3YewW:not(._1UvQg):not(.MwhOx) { display: none; }';

export default class HeaderDisabler {
  static on() {
    WhatsApp.insertCSS(cssCode);
  }

  static off() {
    WhatsApp.removeCSS(cssCode);
  }
}
