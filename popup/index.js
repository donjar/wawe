function disableHeader() {
  browser.tabs.insertCSS(null, {
    code: '._3YewW:not(._1UvQg):not(.MwhOx) { display: none; }'
  });
}

function enableHeader() {
  browser.tabs.removeCSS(null, {
    code: '._3YewW:not(._1UvQg):not(.MwhOx) { display: none; }'
  });
}

document.getElementById('disable-header').addEventListener('click', (e) => {
  e.target.checked ? disableHeader() : enableHeader();
});
