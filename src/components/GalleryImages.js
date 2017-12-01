import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeImage, setActiveImage } from '../actions';

import GalleryImage from './GalleryImage';

import '../styles/GalleryImages.css';

class GalleryImages extends Component {
  renderImages() {
    return this.props.images.map(image => {
      return (
        <GalleryImage
          image={image}
          remove={this.props.removeImage}
          setActive={this.props.setActiveImage}
        />
      );
    });
  }
  render() {
    return <div className="gallery-images">{this.renderImages()}</div>;
  }
}
const mapStateToProps = state => {
  return { images: state.images.images };
};
export default connect(mapStateToProps, { removeImage, setActiveImage })(
  GalleryImages
);
