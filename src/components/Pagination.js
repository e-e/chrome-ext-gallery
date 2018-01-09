import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../styles/Pagination.css';

class Pagination extends Component {
  renderPrev() {
    const pages = Math.ceil(this.props.total / this.props.perPage);
    if (pages === 1) return null;
    return (
      <FlatButton
        onClick={this.props.onPrev}
        label="Previous"
        className="pagination-section prev-next"
      />
    );
  }
  renderPages() {
    const pages = Math.ceil(this.props.total / this.props.perPage);
    let indicator = null;
    if (pages) {
      indicator = `${this.props.page} / ${pages}`;
    }
    return <div className="pagintaion-section page-num-list">{indicator}</div>;
  }
  renderNext() {
    const pages = Math.ceil(this.props.total / this.props.perPage);
    if (pages === 1) return null;
    return (
      <FlatButton
        onClick={this.props.onNext}
        label="Next"
        className="pagination-section prev-next"
      />
    );
  }
  render() {
    return (
      <div className="pagination">
        {this.renderPrev()}
        {this.renderPages()}
        {this.renderNext()}
      </div>
    );
  }
}

export default Pagination;
