import React, { Component, PropTypes } from 'react';

const meetupStyle = {
  width: 200,
  height: 200,
  backgroundColor: 'lightblue',
}

class Meetup extends Component {
  render() {
    const { meetup } = this.props;
    const { name } = meetup;
    return (
      <div className="meetup-tile" style={meetupStyle}>
        {name}
      </div>
    );
  }
}

Meetup.propTypes = {
  meetup: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string
  })
}

export default Meetup;
