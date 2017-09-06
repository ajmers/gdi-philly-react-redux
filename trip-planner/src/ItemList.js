import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemList extends Component {
  sortByDate(a, b) {
    return new Date(a.date) > new Date(b.date)
  }
  render() {
    const { items } = this.props;

    return (<div className="list">
      {items.sort(this.sortByDate).map((item, i) => {
        return (<div className="list-item" key={i}>
          Title: {item.place}<br/>
          Date: {item.date.toString()}<br/>
          Description: {item.description}<br/>
          Tags: {item.tags ? item.tags.join(', '): 'None'}
        </div>);
      })}
    </div>);
  }
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    place: PropTypes.string,
    Date: PropTypes.string,
    Description: PropTypes.string,
    Tags: PropTypes.arrayOf(PropTypes.string)
  }))
}

export default ItemList
