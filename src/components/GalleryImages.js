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
import ContentSection from './ContentSection';
import Alert from './Alert';

import '../styles/GalleryImages.css';

class GalleryImages extends Component {
  renderNoImages() {
    return <Alert type="info" message="You have not saved any images..." />;
  }
  renderImages() {
    const {
      images,
      page,
      total,
      perPage,
      removeImage,
      setActiveImage
    } = this.props;
    if (!total) return this.renderNoImages();

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const pageImages = images.slice(startIndex, endIndex);

    return pageImages.map(image => {
      return (
        <GalleryImage
          key={JSON.stringify(image)}
          dataKey={JSON.stringify(image)}
          image={image}
          remove={removeImage}
          setActive={setActiveImage}
        />
      );
    });
  }
  render() {
    let pagination = null;
    if (this.props.total) {
      pagination = (
        <Pagination
          total={this.props.total}
          page={this.props.page}
          perPage={this.props.perPage}
          onPrev={this.props.prevGalleryPage}
          onNext={this.props.nextGalleryPage}
        />
      );
    }
    return (
      <div className="gallery-images-wrap">
        <ContentSection>
          <div
            className={`gallery-images${
              !this.props.images.length ? ' no-images' : ''
            }`}
          >
            {this.renderImages()}
          </div>
        </ContentSection>
        <ContentSection>{pagination}</ContentSection>
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
