import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setView, addImageTag, removeImageTag, removeImage } from '../actions';

import ContentSection from './ContentSection';
import Tag from './Tag';
import MediaElement from './MediaElement';

import '../styles/EditImage.css';

class EditImage extends Component {
  constructor(props) {
    super(props);
    this.state = { newTag: '' };

    this.onNewTagChange = this.onNewTagChange.bind(this);
    this.checkForEnterKey = this.checkForEnterKey.bind(this);
  }
  onNewTagChange(e) {
    this.setState({ newTag: e.target.value });
  }
  addNewTag() {
    this.props.addImageTag(this.props.image, this.state.newTag);
    this.setState({ newTag: '' });
  }
  checkForEnterKey(e) {
    if (e.key === 'Enter') {
      this.addNewTag();
      e.target.blur();
    }
  }
  renderTags() {
    return this.props.image.tags.map(tag => (
      <Tag
        tag={tag}
        image={this.props.image}
        onDelete={this.props.removeImageTag}
      />
    ));
  }
  render() {
    return (
      <div className="edit-image">
        <ContentSection className="button-group sp-btw">
          <button
            className="button"
            onClick={() => this.props.setView('gallery')}
          >
            Back to Gallery
          </button>
          <button
            className="button button-red"
            onClick={() => this.props.removeImage(this.props.image)}
          >
            Delete
          </button>
        </ContentSection>
        <ContentSection>
          <div className="image-container">
            <MediaElement className="media" src={this.props.image.src} />
          </div>
        </ContentSection>
        <ContentSection>
          <div className="links">
            <div className="link-item">
              <span className="link-label">URL</span>
              <a className="link" href={this.props.image.src} target="_blank">
                {this.props.image.src}
              </a>
            </div>
            <div className="link-item">
              <span className="link-label">SRC</span>
              <a
                className="link"
                href={this.props.image.pageUrl}
                target="_blank"
              >
                {this.props.image.pageUrl}
              </a>
            </div>
          </div>
        </ContentSection>
        <ContentSection>
          <div className="tag-form">
            <div>
              <input
                type="text"
                placeholder="Add tags"
                value={this.state.newTag}
                onChange={this.onNewTagChange}
                onKeyPress={this.checkForEnterKey}
              />
            </div>
          </div>
        </ContentSection>
        <ContentSection>
          <div className="edit-image-tags">{this.renderTags()}</div>
        </ContentSection>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    image: state.activeImage
  };
};
export default connect(mapStateToProps, {
  setView,
  addImageTag,
  removeImageTag,
  removeImage
})(EditImage);
