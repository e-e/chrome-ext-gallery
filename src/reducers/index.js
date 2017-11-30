import { combineReducers } from 'redux';
import AppStateReducer from './AppStateReducer';
import ImagesReducer from './ImagesReducer';

import GalleryImages from '../components/GalleryImages';
import GalleryTags from '../components/GalleryTags';
import AddImageForm from '../components/AddImageForm';

const rootReducer = combineReducers({
  appState: AppStateReducer,
  images: ImagesReducer,
  views: state => [
    { view: 'gallery', label: 'Gallery', component: GalleryImages },
    { view: 'tags', label: 'Tags', component: GalleryTags },
    { view: 'add-url', label: 'Add From URL', component: AddImageForm }
  ]
});

export default rootReducer;
