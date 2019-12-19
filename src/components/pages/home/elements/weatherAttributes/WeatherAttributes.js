import React, { Component } from 'react';
import TemperatureElement from './TemperatureElement';
import PressureElement from './PressureElement';
import WindElement from './WindElement';

export default class WeatherAttributes extends Component {
  render() {
    return (
      <div className="weather-attributes">
        <TemperatureElement temp={this.props.temp} />
        <PressureElement pressure={this.props.pressure} />
        <WindElement wind={this.props.wind} />
      </div>
    );
  }
}
