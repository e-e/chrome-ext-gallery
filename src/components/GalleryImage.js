import React, { Component } from 'react';
import ImageLoading from './ImageLoading';

import MediaElement from './MediaElement';

class GalleryImage extends Component {
  constructor(props) {
    super(props);
    this.mediaLoaded = this.mediaLoaded.bind(this);
    this.state = { loading: true };
  }
  mediaLoaded(event) {
    this.setState({ loading: false });
  }
  renderLoading() {
    if (this.state.loading) {
      return <ImageLoading />;
    }
    return null;
  }
  render() {
    const { image, setActive } = this.props;
    return (
      <div
        className="gallery-image"
        onClick={() => setActive(image)}
        key={JSON.stringify(image)}
      >
        {this.renderLoading()}
        <MediaElement
          className="media"
          media={this.props.image}
          onload={this.mediaLoaded}
          controls={false}
        />
      </div>
    );
  }
}

export default GalleryImage;
