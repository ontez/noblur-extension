var setInnerHTML = function(elm, html) {
    elm.innerHTML = html;
    Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes)
        .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
      newScript.appendChild(document.createTextNode(oldScript.innerHTML));
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.clicked === "true"){
        let head = document.getElementsByTagName("head")[0]
        let html = head.innerText

        setInnerHTML(head, head.innerHTML +  "<style>*{filter: none !important; color: black !important;}</style>")
        //head.innerHTML += "<style>filter: none !important; color: black !important</style>"
        console.log(html)
      }
    }


);

//https://stackoverflow.com/questions/2592092/executing-script-elements-inserted-with-innerhtml