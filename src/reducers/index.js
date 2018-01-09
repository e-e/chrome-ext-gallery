import { combineReducers } from 'redux';
import AppStateReducer from './AppStateReducer';
import ImagesReducer from './ImagesReducer';
import ActiveImageReducer from './ActiveImageReducer';
import TagsReducer from './TagsReducer';
import SettingsReducer from './SettingsReducer';

import GalleryImages from '../components/GalleryImages';
import GalleryTags from '../components/GalleryTags';
import AddImageForm from '../components/AddImageForm';
import EditImage from '../components/EditImage';
import Settings from '../components/Settings';

const rootReducer = combineReducers({
  activeImage: ActiveImageReducer,
  appState: AppStateReducer,
  images: ImagesReducer,
  tags: TagsReducer,
  settings: SettingsReducer
});

export default rootReducer;
