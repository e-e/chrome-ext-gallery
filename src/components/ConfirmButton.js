import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class ConfirmButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirming: false
    };
    this.onMainClick = this.onMainClick.bind(this);
  }
  onMainClick() {
    this.setState({
      confirming: true
    });
  }
  onConfirmClicked(confirmed = false) {
    this.setState({
      confirming: false
    });
    if (confirmed) {
      this.props.onConfirm();
    }
  }
  renderMain() {
    if (this.state.confirming) return null;
    return (
      <FlatButton label="Delete" secondary={true} onClick={this.onMainClick} />
    );
  }
  renderConfirm() {
    if (!this.state.confirming) return null;
    return [
      <FlatButton
        label="Confirm Delete"
        secondary={true}
        onClick={() => this.onConfirmClicked(true)}
      />,
      <FlatButton
        label="Cancel"
        style={{ color: '#888' }}
        onClick={() => this.onConfirmClicked(false)}
      />
    ];
  }
  render() {
    return (
      <div>
        {this.renderMain()}
        {this.renderConfirm()}
      </div>
    );
  }
}

export default ConfirmButton;
