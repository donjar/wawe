import HeaderDisabler from './HeaderDisabler.js';

const storage = browser.storage.local.get();

/**
 * Does two things:
 * 1. Gets the saved state from storage and applies it to the checkbox.
 * 2. Makes the checkbox listen to click events and act accordingly.
 */
function bindState(checkboxId) {
  const elem = document.getElementById(checkboxId);

  storage.then((item) => {
    elem.checked = item[checkboxId];
  });

  elem.addEventListener('click', (e) => {
    act(checkboxId, e.target.checked);
  });
}

/**
 * Runs the method associated with the event, and sets the local storage.
 */
function act(eventName, eventValue) {
  if (eventName === 'disableHeader') {
    eventValue ? HeaderDisabler.on() : HeaderDisabler.off();
  }

  browser.storage.local.set({ [eventName]: eventValue });
}

for (const methodName of ['disableHeader']) {
  document.getElementsByTagName('body')[0].innerHTML +=
    `<input type="checkbox" id="${methodName}">
     <label for="${methodName}">${methodName}</label>`;
  bindState(methodName);
}
