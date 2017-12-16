// SET_IMAGES_FROM_LOCAL_STORAGE

import {
  SET_IMAGES_FROM_LOCAL_STORAGE,
  ADD_FILTER_TAG,
  ADDED_IMAGE_TAG
} from '../actions';
import { get_unique_tags, sort_ignore_case } from '../utils';

const DEFUALT_STATE = {
  unique: [],
  filter: []
};

export default (state = DEFUALT_STATE, action) => {
  switch (action.type) {
    case SET_IMAGES_FROM_LOCAL_STORAGE:
      return { ...state, unique: get_unique_tags(action.payload) };
    case ADD_FILTER_TAG:
      let filter = [...state.filter];
      if (!filter.includes(action.payload)) {
        filter.push(action.payload);
        filter.sort(sort_ignore_case);
      }
      return { ...state, filter };
    case ADDED_IMAGE_TAG:
      const { tag } = action.payload;
      if (state.unique.includes(tag)) break;
      let tags = [...state.unique, action.tag].sort(sort_ignore_case);
      return { ...state, unique: tags };
    default:
      break;
  }
  return state;
};
