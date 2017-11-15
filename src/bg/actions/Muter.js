import WhatsApp from '../WhatsApp.js';

export default class Muter {
  static on() {
    WhatsApp.setUnreadCount(0);
  }

  static off() {
  }
}
