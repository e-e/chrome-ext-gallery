/* global chrome */
import {
  set_images,
  get_images,
  remove_image,
  image_src_exists,
  guid
} from '../utils';

export const ADD_IMAGE = 'ADD_IMAGE';
export const SET_IMAGES_FROM_LOCAL_STORAGE = 'SET_IMAGES_FROM_LOCAL_STORAGE';
export const SET_VIEW = 'SET_VIEW';
export const CLEAR_ALL_IMAGES = 'CLEAR_ALL_IMAGES';
export const SET_ACTIVE_IMAGE = 'SET_ACTIVE_IMAGE';
export const NEXT_GALLERY_PAGE = 'NEXT_GALLERY_PAGE';
export const PREV_GALLERY_PAGE = 'PREV_GALLERY_PAGE';

export function loadImagesFromLocalStorage() {
  return dispatch => {
    get_images().then(images => {
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
    get_images()
      .then(images => {
        // don't add images with same src url
        if (!image_src_exists(image, images)) {
          images = [...images, image];
        }
        return set_images(images);
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
    remove_image(image).then(images => {
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

export function nextGalleryPage() {
  return {
    type: NEXT_GALLERY_PAGE
  };
}

export function prevGalleryPage() {
  return {
    type: PREV_GALLERY_PAGE
  };
}
