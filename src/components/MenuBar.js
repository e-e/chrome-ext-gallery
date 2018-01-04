import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import { connect } from 'react-redux';
import { setView } from '../actions';

// import '../styles/MenuBar.css';

function classNames(obj = {}) {
  return Object.keys(obj).reduce((classStr, key) => {
    return `${classStr}${obj[key] ? (classStr.length ? ' ' + key : key) : ''}`;
  }, '');
}

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10
  }
};

/*
// class MenuBar extends Component {
//   renderMenuItems() {
//     return this.props.views.filter(item => item.menu).map(item => {
//       const _classNames = classNames({
//         'menu-bar-item': true,
//         active: this.props.view === item.view
//       });
//       return (
//         <div
//           className={_classNames}
//           onClick={event => this.props.setView(item.view)}
//         >
//           {item.label}
//         </div>
//       );
//     });
//   }
//   render() {
//     return <div className="menu-bar">{this.renderMenuItems()}</div>;
//   }
// }
*/

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  handleChange = value => {
    this.setState({
      slideIndex: value
    });
  };
  render() {
    return (
      <div>
        <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
          <Tab label="Gallery" value={0} />
          <Tab label="Settings" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 style={styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div>
          <div style={styles.slide}>slide n°2</div>
        </SwipeableViews>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { view: state.appState.view, views: state.views };
};
export default connect(mapStateToProps, { setView })(MenuBar);
