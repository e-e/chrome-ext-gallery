import { SET_IMAGES_FROM_LOCAL_STORAGE, SET_VIEW } from '../actions';

const DEFUALT_STATE = {
  imagesLoadedFromStorage: false,
  view: 'gallery'
};

function returnLog(obj, label = '', doLog = true) {
  doLog && console.log(label, obj);
  return obj;
}

export default (state = DEFUALT_STATE, action) => {
  switch (action.type) {
    case SET_IMAGES_FROM_LOCAL_STORAGE:
      return returnLog(
        { ...state, imagesLoadedFromStorage: true, view: 'gallery' },
        'new state'
      );
    case SET_VIEW:
      return { ...state, view: action.payload };
    default:
      return state;
  }
};
