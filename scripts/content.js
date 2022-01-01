// Listen for the click event from background script
chrome.runtime.onMessage.addListener(() => {
  // Hide all the available images of the page
  const images = document.getElementsByTagName("img");
  for (const image of images) image.style.display = "none";
  // Hide all the background images of the page
  const bgImages = document.getElementsByTagName("*");
  for (const bgImage of bgImages) bgImage.style.backgroundImage = "none";
  // Hide all the svg images of the page
  const svgImages = document.getElementsByTagName("svg");
  for (const svgImage of svgImages) svgImage.style.display = "none";
});
