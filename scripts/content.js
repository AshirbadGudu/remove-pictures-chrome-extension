// Receive message from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.message);
  console.log(" Time ", new Date().toString());
});
