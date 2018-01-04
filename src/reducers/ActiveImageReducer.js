import {
  SET_ACTIVE_IMAGE,
  CLEAR_ACTIVE_IMAGE,
  ADDED_IMAGE_TAG,
  REMOVED_IMAGE_TAG,
  SET_IMAGES_FROM_LOCAL_STORAGE
} from '../actions';

const DEFAULT_STATE = {
  id: null,
  src: null,
  pageUrl: null,
  tags: []
};
function returnLog(obj, label = '', doLog = true) {
  doLog && console.log(label, obj);
  return obj;
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADDED_IMAGE_TAG:
      let tag = action.payload.tag;
      let image = action.payload.image;
      if (!image.tags.includes(tag)) {
        image.tags.push(tag);
      }
      // return returnLog({ ...state, ...action.payload.image }, 'active image');
      return returnLog({ ...state, ...image }, 'active image');

    case REMOVED_IMAGE_TAG:
    case SET_ACTIVE_IMAGE:
      return returnLog({ ...state, ...action.payload }, 'active image');

    case SET_IMAGES_FROM_LOCAL_STORAGE:
    case CLEAR_ACTIVE_IMAGE:
      return DEFAULT_STATE;

    default:
      return state;
  }
};
