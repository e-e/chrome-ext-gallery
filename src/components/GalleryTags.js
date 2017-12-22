import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFilterTag } from '../actions';
import Tag from './Tag';
import '../styles/GalleryTags.css';

class GalleryTags extends Component {
  renderTags() {
    return this.props.tags.unique.map(tag => {
      return (
        <Tag
          tag={tag}
          onClick={(image, tag) => this.props.addFilterTag(tag)}
          nodelete={true}
          key={tag}
          highlighted={this.props.filterTags.includes(tag)}
        />
      );
    });
  }
  render() {
    return <div className="gallery-tags">{this.renderTags()}</div>;
  }
}
const mapStateToProps = state => {
  return { tags: state.tags, filterTags: state.images.filterTags };
};
export default connect(mapStateToProps, { addFilterTag })(GalleryTags);
