import React, { Component } from 'react';
import MarsSol from './MarsSol';
import EarthDate from './Earthdate';
import Season from './MarsSeason';

export default class WeatherTitle extends Component {
  render() {
    return (
      <div className="weather-title">
        <div className="weather-title-left-column">
          <h2>Elysium Planitia, Mars</h2>
          <EarthDate earthDate={this.props.earthDate} />
        </div>
        <div className="weather-title-right-column">
          <Season marsSeason={this.props.marsSeason} />
          <MarsSol marsSol={this.props.marsSol} />
        </div>
      </div>
    );
  }
}
