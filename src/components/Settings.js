import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.downloadData = this.downloadData.bind(this);
  }
  downloadData() {
    const data = JSON.stringify(this.props.images, null, 4);

    const vLink = document.createElement('a');
    const vBlob = new Blob([data], { type: 'octet/stream' });
    const vName = 'tameyo.json';
    const vUrl = window.URL.createObjectURL(vBlob);
    vLink.setAttribute('href', vUrl);
    vLink.setAttribute('download', vName);
    vLink.click();
  }
  render() {
    return (
      <div>
        <h1>Settings</h1>
        <div>
          <button onClick={this.downloadData}>Export</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images.images
  };
};
export default connect(mapStateToProps)(Settings);
