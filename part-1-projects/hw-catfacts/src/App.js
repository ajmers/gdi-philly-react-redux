import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const spotifyUrl = "https://api.spotify.com/v1/search?q=avett&type=artist"

class App extends Component {
    constructor() {
        super();
        this.state = {
            facts: [],
        }
    }
    getData() {
        fetch(spotifyUrl).then(res => res.json()).then(json => json.artists).then(artists => {
            this.setState({ artists: artists.items });
        });
    }
    componentDidMount() {
        this.getData();
    }

    render() {
        const { artists = []} = this.state;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div className="artists">
                {artists.map(artist => (<div>{artist.name}</div>))}
                </div>
            </div>
        );
  }
}

export default App;
