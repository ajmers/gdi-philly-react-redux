import React, { Component } from 'react';
import logo from './logo.svg';
import fetchJsonp from 'fetch-jsonp';
import './App.css';
import Meetup from './Meetup.js';

const meetupUrl = "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=girl-develop-it-philadelphia&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming&sig_id=16894471&sig=dba259eb1fd05294f55c42dc4dbc780678899228";

class App extends Component {
    constructor() {
        super();
        this.state = {
            meetups: [],
        }
    }
    getData() {
        fetchJsonp(meetupUrl).then(res => res.json()).then(json => json.results).then(meetups => {
            this.setState({ meetups });
        });
    }
    componentDidMount() {
        this.getData();
    }

    render() {
        const { meetups } = this.state;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div className="meetups">
                {meetups.map(meetup => <Meetup data={meetup}/>)}
                </div>
            </div>
        );
  }
}

export default App;
