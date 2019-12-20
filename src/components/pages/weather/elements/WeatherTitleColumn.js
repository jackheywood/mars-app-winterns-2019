import React, { Component } from 'react';

export default class WeatherTitleColumn extends Component {
  render() {
    return (
      <div className="weather-column">
        <div className="weather-cell" id="date" />
        <div className="weather-cell" id="temperature">
          <h4>Temperature</h4>
          <p>(°F)</p>

        </div>
        <div className="weather-cell" id="wind">
          <h4>Wind speed</h4>
          <p>(m/s)</p>
        </div>
        <div className="weather-cell" id="pressure">
          <h4>Pressure</h4>
          <p>(Pa)</p>

        </div>
      </div>
    );
  }
}
