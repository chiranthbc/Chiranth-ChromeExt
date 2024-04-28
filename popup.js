document.addEventListener("DOMContentLoaded", function () {
  var getTitleButton = document.getElementById("getTitleButton");
  getTitleButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var currentTab = tabs[0];
      var title = currentTab.title;
      document.getElementById("tabTitle").textContent = title;
    });
  });
});
