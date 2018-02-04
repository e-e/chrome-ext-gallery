import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import { bytesToMb } from '../utils/utils';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.downloadData = this.downloadData.bind(this);
  }
  downloadData() {
    const data = JSON.stringify({ version: this.props.version, images: this.props.images }, null, 4);

    const vLink = document.createElement('a');
    const vBlob = new Blob([data], { type: 'octet/stream' });
    const vName = 'tameyo.json';
    const vUrl = window.URL.createObjectURL(vBlob);
    vLink.setAttribute('href', vUrl);
    vLink.setAttribute('download', vName);
    vLink.click();
  }

  renderStorageAmount() {
    const { bytesInUse: used, bytesTotal: available } = this.props.storage;
    const percentage = Math.floor(used / available * 100);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ flex: 1, textAlign: 'center' }}>
          {this.props.images.length} images saved.
        </div>
        <LinearProgress
          mode="determinate"
          value={percentage}
          style={{ marginBottom: '5px', marginTop: '5px' }}
        />
        <div style={{ flex: 1, textAlign: 'center' }}>
          {bytesToMb(used, 2)}mb / {bytesToMb(available, 2)}mb ({percentage}%)
        </div>

      </div>
    );
  }
  render() {
    return (
      <div>
        <h1>
          Settings
          <span>[v{this.props.version}]</span>
        </h1>
        <div>
          <button onClick={this.downloadData}>Export</button>
        </div>
        <div style={{ marginTop: '20px' }}>{this.renderStorageAmount()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images.images,
    storage: state.appState.storage,
    version: state.appState.version
  };
};
export default connect(mapStateToProps)(Settings);
