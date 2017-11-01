export default class Helper {
  static getWhatsAppTabs() {
    browser.tabs.query({ url: 'https://web.whatsapp.com/' });
  }
}
