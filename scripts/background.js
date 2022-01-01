console.log("Running background.js");

// Add onclick event to the browser action
chrome.browserAction.onClicked.addListener((tab) => {
  // Send a message to the active tab
  console.log(tab);
});
