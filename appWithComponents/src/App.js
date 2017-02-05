import React, { Component } from 'react';
import GroceryItem from './grocery-item';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: '',
      groceryList: [],
    };
  }
  onIntroClick = () => {
    alert('CLICKED');
  };
  groceryChanged = (e) => {
    console.log(e.currentTarget.value);
    this.setState({ currentItem: e.currentTarget.value });
  };
  onAddGroceryItem = () => {
    var { groceryList, currentItem } = this.state;
    groceryList.push(currentItem);
    this.setState({ groceryList, currentItem: '' });
  };

  onDeleteGroceryItem = (item) => {
    const { groceryList } = this.state;
    const index = groceryList.indexOf(item);
    if (index > -1) {
      groceryList.splice(index,1);
    }
    this.setState({ groceryList });
  }
  
  render() {
    var { groceryList, currentItem } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Grocery List</h2>
        </div>
        <div className='add-grocery-item'>
        <input value={currentItem} className='add-grocery-item__input' onChange={this.groceryChanged}></input>
        <button onClick={this.onAddGroceryItem} className='add-grocery-item__button'>Add Grocery</button>
        </div>

        <div className='grocery-list'>
          <ol>
            {groceryList.map((item, i) => (
                <GroceryItem onDelete={this.onDeleteGroceryItem} item={item} key={i}/>)
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
