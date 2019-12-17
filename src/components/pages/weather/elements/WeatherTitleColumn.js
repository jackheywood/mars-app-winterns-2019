import React, { Component } from 'react';

export default class WeatherTitleColumn extends Component {
  render() {
    return (
      <div className="column">
        <div className="cell" />
        <div className="cell">Temperature:</div>
        <div className="cell">Wind:</div>
        <div className="cell">Pressure:</div>
      </div>
    );
  }
}
