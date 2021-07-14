chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    name: "Oracle"
  });
});

chrome.storage.local.get('name', data => {

});
