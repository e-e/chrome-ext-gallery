import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

import { connect } from 'react-redux';
import {
  setSlideIndex,
  clearActiveImage,
  GALLERY_INDEX,
  SETTINGS_INDEX
} from '../actions';

// import '../styles/MenuBar.css';

function classNames(obj = {}) {
  return Object.keys(obj).reduce((classStr, key) => {
    return `${classStr}${obj[key] ? (classStr.length ? ' ' + key : key) : ''}`;
  }, '');
}

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

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.setSlideIndex(value);
    this.props.clearActiveImage();
  }

  render() {
    return (
      <div>
        <Tabs onChange={this.handleChange} value={this.props.slideIndex}>
          <Tab label="Gallery" value={GALLERY_INDEX} />
          <Tab label="Settings" value={SETTINGS_INDEX} />
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { slideIndex: state.appState.slideIndex };
};
export default connect(mapStateToProps, { setSlideIndex, clearActiveImage })(
  MenuBar
);
