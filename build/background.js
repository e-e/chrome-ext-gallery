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

function saveImage(target, tab) {
  console.log('SAVE: ', target);
  console.log('DOCUMENT', document);
  const image = {
    id: guid(),
    src: target.srcUrl,
    pageUrl: target.pageUrl,
    tags: []
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
}
const manifest = chrome.runtime.getManifest();
chrome.contextMenus.create({
  title: `${manifest.name}!`,
  contexts: ['image', 'video'],
  onclick: saveImage
});
