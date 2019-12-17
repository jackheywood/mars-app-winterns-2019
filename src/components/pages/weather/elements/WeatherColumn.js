import React, { Component } from 'react';
import WeatherHeadingCell from './WeatherHeadingCell';
import WeatherTempCell from './WeatherTempCell';
import WeatherWindCell from './WeatherWindCell';
import WeatherPressureCell from './WeatherPressureCell';

export default class WeatherColumn extends Component {
  render() {
    return (
      <div className="column">
        <WeatherHeadingCell day={this.props.day} />
        <WeatherTempCell day={this.props.day} />
        <WeatherWindCell day={this.props.day} />
        <WeatherPressureCell day={this.props.day} />
      </div>
    );
  }
}
