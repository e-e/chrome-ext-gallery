import React, { Component } from 'react';
import ImageLoading from './ImageLoading';
import { is_video } from '../utils';

import MediaElement from './MediaElement';

class GalleryImage extends Component {
  constructor(props) {
    super(props);
    this.mediaLoaded = this.mediaLoaded.bind(this);
    this.state = { loading: true };
  }
  componentWillReceiveProps() {
    this.setState({ loading: true });
  }
  mediaLoaded(event) {
    this.setState({ loading: false });
  }
  renderLoading() {
    // if (!is_video(this.props.image.src) && this.state.loading) {
    //   return <ImageLoading />;
    // }
    if (this.state.loading) {
      return <ImageLoading />;
    }
    return null;
  }

  renderMedia() {
    const { image } = this.props;
    if (is_video(image.src)) {
      return (
        <video
          className="media"
          onCanPlay={this.mediaLoaded}
          key={image.src}
          autoPlay
        >
          <source src={image.src} />
        </video>
      );
    } else {
      return (
        <img
          className="media"
          src={image.src}
          onLoad={this.mediaLoaded}
          key={image.src}
        />
      );
    }
  }
  render() {
    const { image, remove, setActive } = this.props;
    return (
      <div className="gallery-image" onClick={() => setActive(image)}>
        {this.renderLoading()}
        <MediaElement
          className="media"
          src={this.props.image.src}
          onload={this.mediaLoaded}
        />
      </div>
    );
  }
}

export default GalleryImage;
