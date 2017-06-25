import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function getSearchStringForArtist(artist) {
  const encodedArtist = encodeURIComponent(artist);
  return `https://itunes.apple.com/search?term=${encodedArtist}&entity=musicVideo`;  
}

class App extends Component {
  componentDidMount() {
    fetch(getSearchStringForArtist('The avett brothers'))
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
