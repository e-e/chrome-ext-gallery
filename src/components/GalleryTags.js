import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFilterTag } from '../actions';
import Tag from './Tag';
import Alert from './Alert';
import '../styles/GalleryTags.css';

class GalleryTags extends Component {
  renderTags() {
    const { tags, filterTags, addFilterTag, hasImages } = this.props;
    if (!tags.unique.length) {
      let message = hasImages
        ? 'You have not added any tags yet.'
        : "You have not added any tags yet. But you also do not have any images, so I don't know what to tell you!";
      return <Alert type="info" message={message} />;
    }
    return tags.unique.map(tag => {
      return (
        <Tag
          tag={tag}
          onClick={(image, tag) => addFilterTag(tag)}
          nodelete={true}
          key={tag}
          highlighted={filterTags.includes(tag)}
        />
      );
    });
  }
  render() {
    return <div className="gallery-tags">{this.renderTags()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    tags: state.tags,
    filterTags: state.images.filterTags,
    hasImages: !!state.images.images.length
  };
};
export default connect(mapStateToProps, { addFilterTag })(GalleryTags);
