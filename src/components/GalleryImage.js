import React, { Component } from 'react';
import ImageLoading from './ImageLoading';

class GalleryImage extends Component {
  constructor(props) {
    super(props);
    this.imageLoaded = this.imageLoaded.bind(this);
    this.state = { loading: true };
  }
  imageLoaded(event) {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2500);
  }
  renderLoading() {
    if (this.state.loading) {
      return <ImageLoading />;
    }
    return null;
  }
  render() {
    const { image, remove, setActive } = this.props;
    return (
      <div className="gallery-image" onClick={() => setActive(image)}>
        {this.renderLoading()}
        <img src={image.src} onLoad={this.imageLoaded} key={image.src} />
      </div>
    );
  }
}

export default GalleryImage;
