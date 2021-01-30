chrome.storage.sync.get(
  {
    iconUrl: "icons/icon48.png"
  },
  items => {
    setTitle(items.iconUrl);
  }
);

function setTitle(iconUrl) {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.href = chrome.runtime.getURL(iconUrl);
}