import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onIntroClick = () => {
    alert('CLICKED');
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p onClick={this.onIntroClick} className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
