import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  removeImage,
  setActiveImage,
  nextGalleryPage,
  prevGalleryPage
} from '../actions';

import GalleryImage from './GalleryImage';
import Pagination from './Pagination';

import '../styles/GalleryImages.css';

class GalleryImages extends Component {
  renderImages() {
    const {
      images,
      page,
      total,
      perPage,
      removeImage,
      setActiveImage
    } = this.props;

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const pageImages = images.slice(startIndex, endIndex);

    return pageImages.map(image => {
      return (
        <GalleryImage
          image={image}
          remove={removeImage}
          setActive={setActiveImage}
        />
      );
    });
  }
  render() {
    return (
      <div className="gallery-images-wrap">
        <div className="gallery-images">{this.renderImages()}</div>
        <Pagination
          total={this.props.total}
          page={this.props.page}
          perPage={this.props.perPage}
          onPrev={this.props.prevGalleryPage}
          onNext={this.props.nextGalleryPage}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    images: state.images.images,
    total: state.images.images.length,
    page: state.images.page,
    perPage: state.images.perPage
  };
};
export default connect(mapStateToProps, {
  removeImage,
  setActiveImage,
  nextGalleryPage,
  prevGalleryPage
})(GalleryImages);
