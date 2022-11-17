
var button = document.getElementById("remove-button")
var headers = document.getElementsByTagName("head")

button.addEventListener('click', function removeBlue(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {clicked: "true"})
    });
})

