import React, { Component } from 'react';

export default class WeatherTempCell extends Component {
  constructor(props) {
    super(props);
    this.temperatureCellClass = null;
  }

  // eslint-disable-next-line class-methods-use-this
  getTemperatureCellClass(averageTemp) {
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
    return (`temperature-cell-${temp}`);
  }

  render() {
    const averageTemp = this.props.dayTemperatureData.avg.toFixed(3);
    const maxTemp = this.props.dayTemperatureData.max.toFixed(3);
    const minTemp = this.props.dayTemperatureData.min.toFixed(3);
    const temperatureCellClass = this.getTemperatureCellClass(averageTemp);
    return (
      <div className={temperatureCellClass}>
        <h4>{averageTemp} °F</h4>
        <p>Max: {maxTemp}</p>
        <p>Min: {minTemp}</p>
      </div>
    );
  }
}
