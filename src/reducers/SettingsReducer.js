import { SET_SETTINGS_DARK_THEME_TOGGLE } from '../actions';

const DEFUALT_STATE = {
  darkTheme: false
};

function returnLog(obj, label = '', doLog = true) {
  doLog && console.log(label, obj);
  return obj;
}

export default (state = DEFUALT_STATE, action) => {
  switch (action.type) {
    case SET_SETTINGS_DARK_THEME_TOGGLE:
      return returnLog({ ...state, darkTheme: action.payload }, 'new state');
    default:
      return state;
  }
};
