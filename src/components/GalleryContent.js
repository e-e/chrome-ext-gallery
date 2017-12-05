import React, { Component } from 'react';
import { connect } from 'react-redux';

class GalleryContent extends Component {
  renderView() {
    for (let i = 0; i < this.props.views.length; i++) {
      if (this.props.views[i].view === this.props.view) {
        let Html = this.props.views[i].component;
        console.log('HTML: ', Html, this.props.views[i]);
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
