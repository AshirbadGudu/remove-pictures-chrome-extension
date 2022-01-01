console.log("Running background.js");

// Add onclick event to the browser action
chrome.browserAction.onClicked.addListener((tab) => {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { message: "clicked_browser_action" });
  });
});
