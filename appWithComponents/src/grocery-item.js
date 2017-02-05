import React, { Component } from 'react';
import './grocery-item.css'

export default class GroceryItem extends Component {
  render() {
    const { item, onDelete } = this.props;
    return (
      <li className='grocery-item'>
        {item}
        <span className='delete-item' onClick={onDelete.bind(null, item)}>X</span>
      </li>
    )
  }
}
