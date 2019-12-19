import React, { Component } from 'react';

export default class WeatherPressureCell extends Component {
  render() {
    const averagePressure = (this.props.dayPressureData.avg ? (this.props.dayPressureData.avg) : ('data unavailable'));
    const maxPressure = (this.props.dayPressureData.max ? (this.props.dayPressureData.max) : ('data unavailable'));
    const minPressure = (this.props.dayPressureData.min ? (this.props.dayPressureData.min) : ('data unavailable'));
    return ((!this.props.dayPressureData.avg && !this.props.dayPressureData.max && !this.props.dayPressureData.min) ? (
      <div className="pressure-cell">
        <p>no pressure data available</p>
      </div>
    ) : (
      <div className="pressure-cell">
        <h4>Pressure: {averagePressure}</h4>
        <p>Max: {maxPressure}</p>
        <p>Min: {minPressure}</p>
      </div>
    ));
  }
}
