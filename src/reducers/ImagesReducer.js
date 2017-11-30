import { SET_IMAGES_FROM_LOCAL_STORAGE, CLEAR_ALL_IMAGES } from '../actions';

const DEFUALT_STATE = {
  images: [],
  page: 1,
  perPage: 16
};

export default (state = DEFUALT_STATE, action) => {
  switch (action.type) {
    case CLEAR_ALL_IMAGES:
      return { ...state, images: [] };
    case SET_IMAGES_FROM_LOCAL_STORAGE:
      return { ...state, images: action.payload };
    default:
      return state;
  }
};
