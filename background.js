  
chrome.tabs.onUpdated.addListener((tabId, tab, changeInfo) => {
    if (changeInfo.url.includes("www.linkedin.com/feed/")) {
      chrome.tabs.sendMessage(tabId, {
        type: "NEW"
      });
    }
});
