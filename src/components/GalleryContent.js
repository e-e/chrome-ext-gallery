import React, { Component } from 'react';
import { connect } from 'react-redux';

import GalleryImages from './GalleryImages';
import GalleryTags from './GalleryTags';
import AddImageForm from './AddImageForm';

class GalleryContent extends Component {
  renderView() {
    for (let i = 0; i < this.props.views.length; i++) {
      if (this.props.views[i].view === this.props.view) {
        let Html = this.props.views[i].component;
        return <Html />;
      }
    }
    return <div>Cant find that view!</div>;
  }
  render() {
    return <div className="gallery-content">{this.renderView()}</div>;
  }
}
const mapStateToProps = state => {
  return { view: state.appState.view, views: state.views };
};

export default connect(mapStateToProps)(GalleryContent);
