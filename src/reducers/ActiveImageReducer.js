import { SET_ACTIVE_IMAGE } from '../actions';

const DEFUALT_STATE = {
  id: null,
  src: null,
  categories: []
};
function returnLog(obj, label = '', doLog = true) {
  doLog && console.log(label, obj);
  return obj;
}

export default (state = DEFUALT_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_IMAGE:
      return returnLog({ ...state, ...action.payload }, 'active image');
    default:
      return state;
  }
};
