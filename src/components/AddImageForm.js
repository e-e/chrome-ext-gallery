import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage } from '../actions';

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
    return (
      <div className="add-form">
        {function() {
          if (this.state.src.trim().length) {
            return (
              <div className="form-row">
                <img src={this.state.src.trim()} alt="" />
              </div>
            );
          }
        }.bind(this)()}
        <div className="form-row">
          <input onChange={this.onchange} />
          <button
            type="button"
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
