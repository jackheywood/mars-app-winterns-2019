import React, { Component } from 'react';

export default class WeatherPressureCell extends Component {
  render() {
    const averagePressure = this.props.dayPressureData.avg;
    const maxPressure = this.props.dayPressureData.max;
    const minPressure = this.props.dayPressureData.min;
    return (
      <div className="pressure-cell">
        <h4>{averagePressure} Pa</h4>
        <p>Max: {maxPressure}</p>
        <p>Min: {minPressure}</p>
      </div>
    );
  }
}
