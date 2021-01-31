var iconUrl = "icons/icon48.png";
var browserExtension = (typeof browser !== 'undefined') ? browser : chrome;

browserExtension.storage.sync.get({
    iconUrl: iconUrl
  },
  items => {
    var icon = items ? items.iconUrl : iconUrl;
    setTitle(icon);
  }
);

function setTitle(icon) {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.href = chrome.runtime.getURL(icon);
}