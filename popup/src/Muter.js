import Helper from './Helper.js';

export default class Muter {
  static on() {
    Helper.getWhatsAppTabs().then((tabs) => {
      for (const tab of tabs) {
        browser.tabs.sendMessage(
          tab.id,
          { title: 'Whatsapp' }
        )
      }
    });
  }

  static off() {
  }
}
