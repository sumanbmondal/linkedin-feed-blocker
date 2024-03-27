const startBlocker = async() => {
    feedContainer = document.getElementsByClassName("scaffold-finite-scroll");
    feedContainer[0].remove();
};

(() => {

    chrome.runtime.onMessage.addListener((obj) => {
        const {type} = obj;
        if (type === "NEW") {
            startBlocker();
        }
    });

})();