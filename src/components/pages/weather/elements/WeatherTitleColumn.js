import React, { Component } from 'react';

export default class WeatherTitleColumn extends Component {
  render() {
    return (
      <div className="weather-column">
        <div className="weather-cell" />
        <div className="weather-cell">
          <p><h4>Temperature</h4></p>
          <p>.</p>
          <p>.</p>
        </div>
        <div className="weather-cell">
          <p><h4>Wind</h4></p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
        </div>
        <div className="weather-cell">
          <p><h4>Wind</h4></p>
          <p>.</p>
          <p>.</p>
        </div>
      </div>
    );
  }
}
