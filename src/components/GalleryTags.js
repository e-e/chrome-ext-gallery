import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFilterTag } from '../actions';
import Tag from './Tag';
import '../styles/GalleryTags.css';

class GalleryTags extends Component {
  renderTags() {
    return this.props.tags.unique.map(tag => {
      return <Tag tag={tag} onDelete={() => {}} nodelete={true} key={tag} />;
    });
  }
  render() {
    return <div className="gallery-tags">{this.renderTags()}</div>;
  }
}
const mapStateToProps = state => {
  return { tags: state.tags };
};
export default connect(mapStateToProps)(GalleryTags);
