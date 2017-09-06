import React, { Component } from 'react';

class AppName extends Component {
  render() {
    const { name } = this.props;

    return (
        <div className="app-name">
        { name }
      </div>
    );
  }
}

export default AppName;
