// background.js
self.addEventListener("activate", async () => {
  // This will be called only once when the service worker is activated.
  console.log("service worker activated");
});

chrome.action.onClicked.addListener((tab) => {
  // This will run each time the extension's icon is clicked.
  console.log("icon clicked");
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});
