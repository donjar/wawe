class Wawe {
  constructor() {
    const body = document.getElementsByTagName('body')[0];

    this.storage = browser.storage.local.get();

    for (const methodName of ['disableHeader']) {
      body.innerHTML += `<input type="checkbox" id="${methodName}">
                         <label for="${methodName}">${methodName}</label>`;
      this.bindState(methodName);
    }
  }

  /**
   * Does two things:
   * 1. Gets the saved state from storage and applies it to the checkbox.
   * 2. Makes the checkbox listen to click events and act accordingly.
   */
  bindState(checkboxId) {
    const elem = document.getElementById(checkboxId);

    this.storage.then((item) => {
      elem.checked = item[checkboxId];
    });

    elem.addEventListener('click', (e) => {
      this.act(checkboxId, e.target.checked);
    });
  }

  /**
   * Runs the method associated with the event, and sets the local storage.
   */
  act(eventName, eventValue) {
    const methodName = this.getMethodName(eventName);
    this[methodName](eventValue);

    browser.storage.local.set({ [eventName]: eventValue });
  }

  /**
   * Gets the method name to be run from the event name.
   */
  getMethodName(eventName) {
    return 'set' + eventName.charAt(0).toUpperCase() + eventName.substring(1);
  }

  setDisableHeader(disable) {
    const cssCode = '._3YewW:not(._1UvQg):not(.MwhOx) { display: none; }';

    if (disable) {
      browser.tabs.insertCSS(null, { code: cssCode });
    } else {
      browser.tabs.removeCSS(null, { code: cssCode });
    }
  }
}

new Wawe();
