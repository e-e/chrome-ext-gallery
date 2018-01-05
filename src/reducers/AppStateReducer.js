import {
  SET_IMAGES_FROM_LOCAL_STORAGE,
  SET_VIEW,
  SET_ACTIVE_IMAGE,
  SET_SLIDE_INDEX,
  GALLERY_INDEX,
  EDIT_INDEX
} from '../actions';

const DEFUALT_STATE = {
  imagesLoadedFromStorage: false,
  slideIndex: 0
};

function returnLog(obj, label = '', doLog = true) {
  doLog && console.log(label, obj);
  return obj;
}

export default (state = DEFUALT_STATE, action) => {
  switch (action.type) {
    case SET_IMAGES_FROM_LOCAL_STORAGE:
      return returnLog(
        { ...state, imagesLoadedFromStorage: true, slideIndex: GALLERY_INDEX },
        'new state'
      );

    case SET_SLIDE_INDEX:
      return { ...state, slideIndex: action.payload };
    case SET_ACTIVE_IMAGE:
      return { ...state, slideIndex: EDIT_INDEX };
    default:
      return state;
  }
};
