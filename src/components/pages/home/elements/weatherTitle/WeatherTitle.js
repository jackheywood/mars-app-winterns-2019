import React, { Component } from 'react';
import MarsSol from './MarsSol';
import EarthDate from './Earthdate';
import Season from './MarsSeason';

export default class WeatherTitle extends Component {
  render() {
    return (
      <div className="weather-title">
        <h3>Elysium Planitia, Mars</h3>
        <Season marsSeason={this.props.marsSeason} />
        <MarsSol marsSol={this.props.marsSol} />
        <EarthDate earthDate={this.props.earthDate} />
      </div>
    );
  }
}
