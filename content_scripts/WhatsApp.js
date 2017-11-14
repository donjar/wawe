browser.runtime.onMessage.addListener(receive);

function receive(msg) {
  if (msg.unreadCount) {
    setUnreadCount(msg.unreadCount);
  }
}

function setUnreadCount(count) {
  setTitle(count === 0 ? 'WhatsApp' : `(${count}) WhatsApp`)
}

function setTitle(newTitle) {
  document.title = newTitle;
}
