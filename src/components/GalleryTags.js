import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFilterTag } from '../actions';
import ImageTag from './ImageTag';

class GalleryTags extends Component {
  renderTags() {
    return this.props.tags.unique.map(tag => {
      return <ImageTag tag={tag} onDelete={() => {}} nodelete={true} />;
    });
  }
  render() {
    return <div>{this.renderTags()}</div>;
  }
}
const mapStateToProps = state => {
  return { tags: state.tags };
};
export default connect(mapStateToProps)(GalleryTags);
