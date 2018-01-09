import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { setSlideIndex } from '../actions';

import GalleryImages from './GalleryImages';
import EditImage from './EditImage';
import Settings from './Settings';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10
  }
};

class GalleryContent extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.props.setSlideIndex(value);
  }
  renderView() {
    return (
      <SwipeableViews
        index={this.props.slideIndex}
        onChangeIndex={this.handleChange}
      >
        <div>
          <GalleryImages />
        </div>
        <div>{this.props.editing ? <EditImage /> : null}</div>
        <div style={styles.slide}>
          <Settings />
        </div>
      </SwipeableViews>
    );
  }

  render() {
    return <div className="gallery-content">{this.renderView()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    slideIndex: state.appState.slideIndex,
    editing: !!state.activeImage.id
  };
};

export default connect(mapStateToProps, { setSlideIndex })(GalleryContent);
