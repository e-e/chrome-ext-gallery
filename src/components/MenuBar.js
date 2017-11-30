import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setView } from '../actions';

import '../styles/MenuBar.css';

function classNames(obj = {}) {
  return Object.keys(obj).reduce((classStr, key) => {
    return `${classStr}${obj[key] ? (classStr.length ? ' ' + key : key) : ''}`;
  }, '');
}

class MenuBar extends Component {
  renderMenuItems() {
    return this.props.views.map(item => {
      const _classNames = classNames({
        'menu-bar-item': true,
        active: this.props.view === item.view
      });
      return (
        <div
          className={_classNames}
          onClick={event => this.props.setView(item.view)}
        >
          {item.label}
        </div>
      );
    });
  }
  render() {
    return <div className="menu-bar">{this.renderMenuItems()}</div>;
  }
}
const mapStateToProps = state => {
  return { view: state.appState.view, views: state.views };
};
export default connect(mapStateToProps, { setView })(MenuBar);
