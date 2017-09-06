import React, { Component } from 'react';

const TAGS = [
  'lodging',
  'sightseeing',
  'adventure'
]

const COLORS = ['blue', 'pink', 'green'];

class TagChooser extends Component {
  constructor() {
    super();
    this.state = {
      tags: new Set()
    }
  }
  chooseTag(tag) {
    const { tags } = this.state;
    tags.add(tag)
    this.setState(tags)
    this.props.onChooseTag([...tags])
  }

  render() {
    return (<div className='tags'>
      {TAGS.map((tag, i) => (
        <span className="trip-tag" 
          key={i}
          onClick={this.chooseTag.bind(this, tag)}
          style={{ backgroundColor: COLORS[i]}}>
          {tag}
        </span >))}
      </div>);
  }
}

export default TagChooser;
