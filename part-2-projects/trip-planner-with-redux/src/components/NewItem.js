import React, { Component } from 'react';
import TagChooser from './TagChooser.js';

class NewItem extends Component {
  constructor() {
    super()
    this.state = {
      place: '',
      date: '',
      description: ''
    }
  }

  updateTags(tags) {
    this.setState({ tags })
  }

  updateState(name, e) {
    this.setState({
      [name]: e.target.value
    })
  }
  
  render() {
    const { onAddItem } = this.props;
    return (<div className="new-item">
      <form onSubmit={onAddItem.bind(null, this.state)}>
        <label htmlFor="place">Place</label>
        <input onChange={this.updateState.bind(this, 'place')} type="text" name="place"/>
        <br/>
        <label htmlFor="date">Date</label>
        <input onChange={this.updateState.bind(this, 'date')} type="text" name="date"/>
        
        <br/>
        <label htmlFor="description">Description</label>
        <input onChange={this.updateState.bind(this, 'description')}  
          type="text" name="description"/>

        <TagChooser onChooseTag={this.updateTags.bind(this)} />
        <br/>
        <button type="submit">Submit</button>
      </form>
      
    </div>);
  }
}


export default NewItem
