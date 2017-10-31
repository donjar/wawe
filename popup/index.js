function disableHeader() {
  browser.tabs.insertCSS(null, {
    code: '._3YewW:not(._1UvQg):not(.MwhOx) { display: none; }'
  });

  browser.storage.local.set({ disableHeader: true });
}

function enableHeader() {
  browser.tabs.removeCSS(null, {
    code: '._3YewW:not(._1UvQg):not(.MwhOx) { display: none; }'
  });

  browser.storage.local.set({ disableHeader: false });
}

browser.storage.local.get().then((item) => {
  document.getElementById('disable-header').checked = item.disableHeader;
});

document.getElementById('disable-header').addEventListener('click', (e) => {
  e.target.checked ? disableHeader() : enableHeader();
});
