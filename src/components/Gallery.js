import React, { Component } from 'react';
import { connect } from 'react-redux';
import GalleryLoading from './GalleryLoading';
import MenuBar from './MenuBar';
import GalleryContent from './GalleryContent';

class Gallery extends Component {
  render() {
    if (!this.props.imagesLoadedFromStorage) {
      return <GalleryLoading />;
    }
    return (
      <div className="gallery">
        <MenuBar />
        <GalleryContent />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { imagesLoadedFromStorage: state.appState.imagesLoadedFromStorage };
};
export default connect(mapStateToProps)(Gallery);
