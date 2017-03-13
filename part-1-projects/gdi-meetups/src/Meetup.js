import React, { Component, PropTypes } from 'react';
import './meetup.css';

class Meetup extends Component {
    createMarkup(html) {
        return { __html: html };
    }
    render() {
        const { data } = this.props;
        const { description, name } = data;
        return (
            <div className="meetup">
                <div className="meetup__name">{name}</div>
                <div className="meetup__description" dangerouslySetInnerHTML={this.createMarkup(description)}></div>
            </div>
        );
  }
}

Meetup.propTypes = {
    data: PropTypes.shape({
        description: PropTypes.string,
        name: PropTypes.string,
        rsvp_limit: PropTypes.number,
    }),
}

export default Meetup;
