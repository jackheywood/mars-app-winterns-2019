import React, { Component } from 'react';

export default class WeatherTitleColumn extends Component {
  render() {
    return (
      <div className="weather-column">
        <div className="weather-cell" />
        <div className="weather-cell">Temperature:</div>
        <div className="weather-cell">Wind:</div>
        <div className="weather-cell">Pressure:</div>
      </div>
    );
  }
}
