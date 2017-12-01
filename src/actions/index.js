/* eslint-disable */
/* disabling eslint for use of the chrome.* api */
export const ADD_IMAGE = 'ADD_IMAGE';
export const SET_IMAGES_FROM_LOCAL_STORAGE = 'SET_IMAGES_FROM_LOCAL_STORAGE';
export const SET_VIEW = 'SET_VIEW';
export const CLEAR_ALL_IMAGES = 'CLEAR_ALL_IMAGES';
export const SET_ACTIVE_IMAGE = 'SET_ACTIVE_IMAGE';

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

function imageSrcExists(image, images) {
  for (let i = 0; i < images.length; i++) {
    if (image.src.trim().toLowerCase() === images[i].src.trim().toLowerCase()) {
      return true;
    }
  }
  return false;
}
function GET_IMAGES() {
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

function REMOVE_IMAGE(image) {
  return new Promise((resolve, reject) => {
    GET_IMAGES()
      .then(images => {
        images = images.filter(img => {
          return image.id !== img.id;
        });
        return SET_IMAGES(images);
      })
      .then(images => {
        resolve(images);
      });
  });
}

function SET_IMAGES(images) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ images }, () => {
      console.log('images set!');
      GET_IMAGES().then(images => resolve(images));
    });
  });
}

export function loadImagesFromLocalStorage() {
  return dispatch => {
    GET_IMAGES().then(images => {
      dispatch({
        type: SET_IMAGES_FROM_LOCAL_STORAGE,
        payload: images
      });
    });
  };
}

export function setView(view) {
  return {
    type: SET_VIEW,
    payload: view
  };
}

export function addImage(srcUrl) {
  const image = {
    id: guid(),
    src: srcUrl,
    tags: []
  };
  return dispatch => {
    GET_IMAGES()
      .then(images => {
        // don't add images with same src url
        if (!imageSrcExists(image, images)) {
          images = [...images, image];
        }
        return SET_IMAGES(images);
      })
      .then(images => {
        dispatch({
          type: SET_IMAGES_FROM_LOCAL_STORAGE,
          payload: images
        });
      });
  };
}

export function clearAllImages() {
  return dispatch => {
    chrome.storage.local.clear(function() {
      dispatch({
        type: CLEAR_ALL_IMAGES
      });
    });
  };
}

export function removeImage(image) {
  return dispatch => {
    REMOVE_IMAGE(image).then(images => {
      dispatch({
        type: SET_IMAGES_FROM_LOCAL_STORAGE,
        payload: images
      });
    });
  };
}

export function setActiveImage(image) {
  return {
    type: SET_ACTIVE_IMAGE,
    payload: image
  };
}
