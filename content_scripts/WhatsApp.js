browser.runtime.onMessage.addListener(receive);

function receive(msg) {
  if (msg.title) {
    setTitle(msg.title);
  }
}

function setTitle(newTitle) {
  document.title = newTitle;
}
