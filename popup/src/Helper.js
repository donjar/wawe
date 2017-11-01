export default class Helper {
  static getWhatsAppTabs() {
    return browser.tabs.query({ url: 'https://web.whatsapp.com/' });
  }
}
