import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setView } from '../actions';

import ContentSection from './ContentSection';
import ViewTopButtonBar from './ViewTopButtonBar';

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
    this.setState({ newTag: '' });
  }
  checkForEnterKey(e) {
    if (e.key === 'Enter') {
      console.log('save value');
      this.addNewTag();
    }
  }
  render() {
    return (
      <div className="edit-image">
        <ContentSection>
          <button onClick={() => this.props.setView('gallery')}>
            Back to Gallery
          </button>
        </ContentSection>
        <ContentSection>
          <div className="image-container">
            <img src={this.props.image.src} />
          </div>
        </ContentSection>
        <ContentSection>
          <div className="tag-form">
            <div>
              <input
                type="text"
                value={this.state.newTag}
                onChange={this.onNewTagChange}
                onKeyPress={this.checkForEnterKey}
              />
            </div>
          </div>
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
export default connect(mapStateToProps, { setView })(EditImage);
