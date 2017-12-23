import React, { Component } from 'react';
import '../styles/CopyTextButton.css';

class CopyTextButton extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.copyText = this.copyText.bind(this);
  }
  copyText() {
    this.refs.textarea.select();
    this.refs.textarea.focus();
    if (document.execCommand('copy')) {
      this.setState({ copied: true });
      setTimeout(() => {
        this.setState({ copied: false });
      }, 500);
    }
  }
  render() {
    return (
      <div className="link-item">
        <textarea ref="textarea" style={styles.textarea}>
          {this.props.text}
        </textarea>
        <span className="link-label" onClick={this.copyText}>
          {this.state.copied ? 'Copied!' : this.props.label}
        </span>
      </div>
    );
  }
}

const styles = {
  textarea: {
    position: 'absolute',
    top: '-500px',
    left: '-500px'
  }
};

export default CopyTextButton;
