// Add onclick event to the browser action icon
chrome.browserAction.onClicked.addListener((tab) => {
  // Send a message to the active tab of the current window
  chrome.tabs.sendMessage(tab.id, {
    message: "Hide All The Images Of The Page",
  });
});
