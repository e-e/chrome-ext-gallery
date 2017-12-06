import {
  SET_ACTIVE_IMAGE,
  ADDED_IMAGE_TAG,
  REMOVED_IMAGE_TAG
} from '../actions';

const DEFUALT_STATE = {
  id: null,
  src: null,
  tags: []
};
function returnLog(obj, label = '', doLog = true) {
  doLog && console.log(label, obj);
  return obj;
}

export default (state = DEFUALT_STATE, action) => {
  switch (action.type) {
    case ADDED_IMAGE_TAG:
    case REMOVED_IMAGE_TAG:
    case SET_ACTIVE_IMAGE:
      return returnLog({ ...state, ...action.payload }, 'active image');
    default:
      return state;
  }
};
