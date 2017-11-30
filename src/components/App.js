import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImagesFromLocalStorage, clearAllImages } from '../actions';

import Gallery from './Gallery';

import '../styles/App.css';

class App extends Component {
  componentWillMount() {
    this.props.loadImagesFromLocalStorage();
  }
  render() {
    return (
      <div className="App">
        <Gallery />
      </div>
    );
  }
}

export default connect(null, { loadImagesFromLocalStorage, clearAllImages })(
  App
);
