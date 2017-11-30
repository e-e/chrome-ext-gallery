/* eslint-disable */
/* disabling eslint for use of the chrome.* api */
export const ADD_IMAGE = 'ADD_IMAGE';
export const SET_IMAGES_FROM_LOCAL_STORAGE = 'SET_IMAGES_FROM_LOCAL_STORAGE';
export const SET_VIEW = 'SET_VIEW';
export const CLEAR_ALL_IMAGES = 'CLEAR_ALL_IMAGES';

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
        return SET_IMAGES([...images, image]);
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
