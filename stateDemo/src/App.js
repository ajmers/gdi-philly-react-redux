import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      modifyByAmt: 1,
    };
  }

  changeModifyAmt = e => {
  
    this.setState({ modifyByAmt: +e.target.value || 0 });
  }

  add = () => {
    const { modifyByAmt, count } = this.state;
    const newCount = modifyByAmt + count;
    this.setState({ count: newCount});
  };

  subtract = () => {
    const { modifyByAmt, count } = this.state;
    console.log(count, modifyByAmt);
    const newCount = count - modifyByAmt;
    this.setState({ count: newCount });
  }
  
  render() {
    const { count, modifyByAmt } = this.state;
    return (
      <div className="App" style={{marginTop: 50}}>
        <div className='count'>Current Count: {count}</div>
        <div className='controls'>
        Amount to add or subtract:
          <button className='decr-button' onClick={this.subtract}> - </button>
          <input className='modify-by-amt' value={modifyByAmt} onChange={this.changeModifyAmt} />
          <button className='incr-button' onClick={this.add}> + </button>
        </div>
      </div>
    );
  }
}

export default App;
