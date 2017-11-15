/**
 * Makes the respective function act on WhatsApp tabs. This function takes in
 * tabAction, a function that takes in a Tabs.Tab object. This tabAction will
 * be operated on all WhatsApp tabs.
 */
function actOnWhatsApp(tabAction) {
  browser.tabs.query({ url: 'https://web.whatsapp.com/' }).then(tabs => {
    for (const tab of tabs) {
      tabAction(tab);
    }
  });
}

function sendMessage(msg) {
  actOnWhatsApp(tab => {
    browser.tabs.sendMessage(tab.id, msg);
  });
}

export default class WhatsApp {
  static insertCSS(css) {
    actOnWhatsApp(tab => {
      browser.tabs.insertCSS(tab.id, { code: css });
    });
  }

  static removeCSS(css) {
    actOnWhatsApp(tab => {
      browser.tabs.removeCSS(tab.id, { code: css });
    });
  }

  static setUnreadCount(count) {
    actOnWhatsApp(tab => {
      sendMessage({ unreadCount: count });
    });
  }
}
