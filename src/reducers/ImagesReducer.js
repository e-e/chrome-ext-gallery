import {
  SET_IMAGES_FROM_LOCAL_STORAGE,
  CLEAR_ALL_IMAGES,
  NEXT_GALLERY_PAGE,
  PREV_GALLERY_PAGE,
  ADDED_IMAGE_TAG,
  REMOVED_IMAGE_TAG
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
  let images = state.images;
  let image;
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
    case ADDED_IMAGE_TAG:
      image = action.payload.image;
      for (let i = 0; i < images.length; i++) {
        if (images[i].id === image.id) {
          images[i] = image;
          break;
        }
      }
      return { ...state, images };
    case REMOVED_IMAGE_TAG:
      image = action.payload;
      for (let i = 0; i < images.length; i++) {
        if (images[i].id === image.id) {
          images[i] = image;
          break;
        }
      }
      return { ...state, images };
    default:
      break;
  }
  return state;
};
