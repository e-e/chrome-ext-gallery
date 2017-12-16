import React, { Component } from 'react';
import '../styles/Pagination.css';

class Pagination extends Component {
  renderPrev() {
    const pages = Math.ceil(this.props.total / this.props.perPage);
    if (pages === 1) return null;
    return (
      <div
        className="pagintaion-section prev-next prev button"
        onClick={this.props.onPrev}
      >
        Prev
      </div>
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
      <div
        className="pagintaion-section prev-next next button"
        onClick={this.props.onNext}
      >
        Next
      </div>
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
