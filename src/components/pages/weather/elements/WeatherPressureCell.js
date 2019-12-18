import React, { Component } from 'react';

export default class WeatherPressureCell extends Component {
  render() {
    const averagePressure = this.props.dayPressureData.avg;
    const maxPressure = this.props.dayPressureData.max;
    const minPressure = this.props.dayPressureData.min;
    return (
      <div className="pressure-cell">
        <p><h4>Pressure: {averagePressure}</h4></p>
        <p>Max: {maxPressure}</p>
        <p>Min: {minPressure}</p>
      </div>
    );
  }
}
