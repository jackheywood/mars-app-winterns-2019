import React, { Component } from 'react';

export default class WeatherTitleColumn extends Component {
  render() {
    return (
      <div className="weather-column">
        <div className="weather-cell" />
        <div className="weather-cell">
          <h4>Temperature</h4>
        </div>
        <div className="weather-cell">
          <h4>Wind</h4>
        </div>
        <div className="weather-cell">
          <h4>Pressure</h4>
        </div>
      </div>
    );
  }
}
