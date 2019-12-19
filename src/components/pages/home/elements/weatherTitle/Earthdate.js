import React, { Component } from 'react';

export default class EarthDate extends Component {
  render() {
    return (
      <div className="earth-date">
        <h3>{(new Date(this.props.earthDate)).toDateString()}</h3>
      </div>
    );
  }
}
