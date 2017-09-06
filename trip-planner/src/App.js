import React, { Component } from 'react';
import AppName from './AppName.js'
import ItemList from './ItemList.js'
import NewItem from './NewItem.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [{
        place: 'Canada',
        date: new Date(),
        description: 'Backpacking in Quebec'
      }]
    }
  }

  addItem(item, e) {
    e.preventDefault()
    const { items } = this.state;
    items.push(item)
    this.setState(items)
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <AppName name="Trip Planner"/>
        <NewItem onAddItem={this.addItem.bind(this)}/>
        <ItemList items={items}/>
      </div>
    );
  }
}

export default App;
