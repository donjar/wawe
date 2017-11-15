let portFromBG;

function setUnreadCount(count) {
  setTitle(count === 0 ? 'WhatsApp' : `(${count}) WhatsApp`);
}

function setTitle(newTitle) {
  document.title = newTitle;
}

browser.runtime.onConnect.addListener(p => {
  portFromBG = p;

  portFromBG.onMessage.addListener(msg => {
    if (msg.unreadCount !== undefined) {
      setUnreadCount(msg.unreadCount);
    }
  });
});
