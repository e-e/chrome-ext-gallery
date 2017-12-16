import {
  SET_IMAGES_FROM_LOCAL_STORAGE,
  CLEAR_ALL_IMAGES,
  NEXT_GALLERY_PAGE,
  PREV_GALLERY_PAGE
} from '../actions';

const DEFUALT_STATE = {
  images: [],
  page: 1,
  perPage: 9,
  perRow: 3,
  filterTags: []
};

export default (state = DEFUALT_STATE, action) => {
  const totalPages = Math.ceil(state.images.length / state.perPage);
  switch (action.type) {
    case CLEAR_ALL_IMAGES:
      return { ...state, images: [] };
    case SET_IMAGES_FROM_LOCAL_STORAGE:
      return { ...state, images: action.payload };
    case NEXT_GALLERY_PAGE:
      if (state.page + 1 > totalPages) {
        break;
      }
      return { ...state, page: state.page + 1 };
    case PREV_GALLERY_PAGE:
      if (state.page - 1 < 1) {
        break;
      }
      return { ...state, page: state.page - 1 };
    default:
      break;
  }
  return state;
};
