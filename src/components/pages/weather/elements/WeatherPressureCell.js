import React, { Component } from 'react';

export default class WeatherPressureCell extends Component {
  render() {
    const averagePressure = this.props.dayPressureData.avg.toFixed(3);
    const maxPressure = this.props.dayPressureData.max.toFixed(3);
    const minPressure = this.props.dayPressureData.min.toFixed(3);
    return (
      <div className="pressure-cell">
        <h4>{averagePressure} Pa</h4>
        <p>Max: {maxPressure}</p>
        <p>Min: {minPressure}</p>
      </div>
    );
  }
}
