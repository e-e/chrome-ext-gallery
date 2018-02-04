/* global chrome */

const manifest = chrome.runtime.getManifest();

function getBase64(src) {
  return new Promise((resolve, reject) => {
    const cvs = document.createElement('canvas');
    const ctx = cvs.getContext('2d');
    let image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = function () {
      console.dir(image);
      ctx.canvas.height = image.height;
      ctx.canvas.width = image.width;
      ctx.drawImage(image, 0, 0);
      let base64 = cvs.toDataURL();
      resolve(base64);
    };
    image.src = src;
  });
}

function convert(src) {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log('converted: ', this);
        resolve(this);
      }
    };
    console.log('going to convert image: ', src);
    ajax.open('POST', manifest.api_endpoint, true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    ajax.send(JSON.stringify({ src }));
  });
}

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log('request: ', request);
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    if (request.src) {
      convert(request.src)
        .then(resp => {
          console.log(resp);
          sendResponse({ base64: JSON.parse(resp.responseText).base64 });
          // sendResponse({ base64 });
        });
    }
    return true;
  }
);

