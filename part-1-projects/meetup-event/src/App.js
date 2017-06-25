import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import Meetup from './Meetup.js'
import logo from './logo.svg';
import './App.css';

const meetupUrl = "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=girl-develop-it-philadelphia&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming&sig_id=16894471&sig=dba259eb1fd05294f55c42dc4dbc780678899228"

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      meetups: []
    };
  }
  componentDidMount() {
    fetchJsonp(meetupUrl)
      .then(response => response.json())
      .then(json => json.results)
      .then(meetups => {
        this.setState({ meetups: meetups });
      });
  }
  render() {
    const { meetups } = this.state;
    return (
      <div className="App">
        {meetups.map((meetup) => {
          return <Meetup meetup={meetup}/>;
        })}
      </div>
    );
  }
}

export default App;
