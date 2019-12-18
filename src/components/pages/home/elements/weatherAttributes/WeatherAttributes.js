import React, { Component } from 'react';
import TemperatureElement from './TemperatureElement';
import PressureElement from './PressureElement';
import WindElement from './WindElement';

export default class WeathewrAttributes extends Component {
  render() {
    return (
      <div className="weatherAttributes">
        <TemperatureElement Temp={this.props.Temp} />
        <PressureElement Pressure={this.props.Pressure} />
        <WindElement Wind={this.props.Wind} />
      </div>
    );
  }
}
