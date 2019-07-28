
function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function basename(path) {
   return path.split('/').reverse()[0];
}

export {
  openInNewTab,
  basename
};