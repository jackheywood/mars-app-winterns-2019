import React, { Component } from 'react';

export default class EarthDate extends Component {
  render() {
    return (
      <div className="earthDate">
        <h3>{(new Date(this.props.EarthDate)).toDateString()}</h3>
      </div>
    );
  }
}
