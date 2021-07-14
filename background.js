chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    name: "Ibrahim"
  });
});

chrome.storage.local.get('name', data => {

});
