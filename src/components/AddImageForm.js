import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage } from '../actions';

import MediaElement from './MediaElement';

class AddImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: ''
    };
    this.onchange = this.onchange.bind(this);
  }
  onchange(event) {
    this.setState({ src: event.target.value });
  }
  render() {
    const image = !this.state.src.trim().length ? null : (
      <div className="form-row">
        <MediaElement src={this.state.src.trim()} />
      </div>
    );
    return (
      <div className="add-form">
        {image}
        <div className="form-row">
          <input onChange={this.onchange} />
          <button
            type="button"
            className="button"
            onClick={() => this.props.addImage(this.state.src)}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { addImage })(AddImageForm);
