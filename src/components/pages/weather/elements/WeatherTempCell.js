import React, { Component } from 'react';

export default class WeatherTempCell extends Component {
  render() {
    const averageTemp = this.props.dayTemperatureData.avg.toFixed(3);
    const maxTemp = this.props.dayTemperatureData.max.toFixed(3);
    const minTemp = this.props.dayTemperatureData.min.toFixed(3);
    let temp = 'boiling';
    if (averageTemp >= -20) {
      temp = 'hot';
    } else if (averageTemp >= -40) {
      temp = 'warm';
    } else if (averageTemp >= -60) {
      temp = 'normal';
    } else if (averageTemp >= -80) {
      temp = 'cool';
    } else if (averageTemp >= -100) {
      temp = 'cold';
    } else {
      temp = 'freezing';
    }
    const className = `temperature-cell-${temp}`;
    return (
      <div className={className}>
        <h4>{averageTemp} °F</h4>
        <p>Max: {maxTemp}</p>
        <p>Min: {minTemp}</p>
      </div>
    );
  }
}
