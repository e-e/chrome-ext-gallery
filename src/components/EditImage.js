import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setView } from '../actions';

import '../styles/EditImage.css';

class EditImage extends Component {
  render() {
    return (
      <div className="edit-image">
        <div>
          <button onClick={() => this.props.setView('gallery')}>
            Back to Gallery
          </button>
        </div>
        <img src={this.props.image.src} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    image: state.activeImage
  };
};
export default connect(mapStateToProps, { setView })(EditImage);
