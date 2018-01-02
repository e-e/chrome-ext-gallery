import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setView, addImageTag, removeImageTag, removeImage } from '../actions';

import { is_video } from '../utils';

import ConfirmationButton from 'react-confirmation-button';
import ContentSection from './ContentSection';
import Tag from './Tag';
import MediaElement from './MediaElement';
import CopyTextButton from './CopyTextButton';

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

          <ConfirmationButton
            buttonText="Delete"
            onConfirm={() => this.props.removeImage(this.props.image)}
            wrapClass="button-red-wrap"
            buttonClass="button button-red"
            confirmClass="button button-red-confirm"
            cancelClass="button button-red-cancel"
          />
        </ContentSection>
        <ContentSection>
          <div className="image-container">
            <MediaElement className="media" src={this.props.image.src} />
          </div>
        </ContentSection>
        <ContentSection>
          <div className="links">
            <CopyTextButton
              text={this.props.image.src}
              label={
                (is_video(this.props.image.src) ? 'Video' : 'Image') + ' URL'
              }
            />
            {this.props.image.src === this.props.image.pageUrl ? null : (
              <CopyTextButton
                text={this.props.image.pageUrl}
                label="Source Page"
              />
            )}
          </div>
          <div className="click-top-copy">Click to copy</div>
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
