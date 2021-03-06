/* global chrome */
// import { get_images, set_images, guid } from '../src/utils/index.js';

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
}

function image_src_exists(image, images) {
  for (let i = 0; i < images.length; i++) {
    if (image.src.trim().toLowerCase() === images[i].src.trim().toLowerCase()) {
      return true;
    }
  }
  return false;
}

function get_images() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get('images', obj => {
      let { images } = obj;
      if (images) {
        resolve(images);
      } else {
        chrome.storage.local.set({ images: [] }, () => {
          resolve([]);
        });
      }
    });
  });
}

function remove_image(image) {
  return new Promise((resolve, reject) => {
    get_images()
      .then(images => {
        images = images.filter(img => {
          return image.id !== img.id;
        });
        return set_images(images);
      })
      .then(images => {
        resolve(images);
      });
  });
}

function set_images(images) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ images }, () => {
      console.log('images set!');
      get_images().then(images => resolve(images));
    });
  });
}

/* ----------------------------------- */
// function getBase64(src) {
//   return new Promise((resolve, reject) => {
//     const cvs = document.createElement('canvas');
//     const ctx = cvs.getContext('2d');
//     let image = new Image();
//     image.crossOrigin = 'anonymous';
//     image.onload = function () {
//       console.dir(image);
//       ctx.canvas.height = image.height;
//       ctx.canvas.width = image.width;
//       ctx.drawImage(image, 0, 0);
//       let base64 = cvs.toDataURL();
//       resolve(base64);
//     };
//     image.src = src;
//   });
// }

function saveImage(target) {
  console.log(target);
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { type: 'add-image', src: target.srcUrl }, function (response) {
      console.log(response);

      const image = {
        id: guid(),
        src: target.srcUrl,
        pageUrl: target.pageUrl,
        tags: [],
        base64: response.base64
      };

      get_images()
        .then(images => {
          // don't add images with same src url
          if (!image_src_exists(image, images)) {
            images = [...images, image];
          }
          return set_images(images);
        })
        .then(images => {
          console.log(images);
        });

    });
  });
}

function selectAndInsert(target) {
  console.log('SELECT AND INSERT TARGET: ', target);
  get_images()
    .then(images => {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'select-and-insert', images }, function (response) {
          console.log('done! image selected...', response);
        });
      });
    });
}



const manifest = chrome.runtime.getManifest();
chrome.contextMenus.create({
  title: `Add to collection`,
  contexts: ['image', 'video'],
  onclick: saveImage
});

chrome.contextMenus.create({
  title: `Select Image And Insert`,
  contexts: ['editable'],
  onclick: selectAndInsert
});