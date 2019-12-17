import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WeatherBlock extends Component {
  render() {
    return (
      <div className="forecast_block">
        <h3>Today&apos;s weather forecast: </h3>
        <Link to="/weather">See more weather info</Link>
      </div>
    );
  }
}
