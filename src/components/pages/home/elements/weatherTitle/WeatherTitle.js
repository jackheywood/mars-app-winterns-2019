import React, { Component } from 'react';
import MarsSol from './MarsSol';
import EarthDate from './Earthdate';
import Season from './MarsSeason';

export default class WeatherTitle extends Component {
  render() {
    return (
      <div className="weatherTitle">
        <h3>Elysium Planitia, Mars</h3>
        <Season MarsSeason={this.props.MarsSeason} />
        <MarsSol MarsSol={this.props.MarsSol} />
        <EarthDate EarthDate={this.props.EarthDate} />
      </div>
    );
  }
}
