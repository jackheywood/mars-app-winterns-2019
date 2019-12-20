import React, { Component } from 'react';
import WeatherErrorMessage from './WeatherErrorMessage';

export default class WeatherTempCell extends Component {
  static getTemperatureCellClass(averageTemp) {
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
    const noDataMessageWeather = 'data unavailable';
    const averageTemp = this.props.dayTemperatureData.avg ? this.props.dayTemperatureData.avg.toFixed(3) : noDataMessageWeather;
    const maxTemp = this.props.dayTemperatureData.max ? this.props.dayTemperatureData.max.toFixed(3) : noDataMessageWeather;
    const minTemp = this.props.dayTemperatureData.min ? this.props.dayTemperatureData.min.toFixed(3) : noDataMessageWeather;
    const temperatureCellClass = this.props.dayTemperatureData.avg ? WeatherTempCell.getTemperatureCellClass(averageTemp) : null;

    return ((this.props.dayTemperatureData.avg || this.props.dayTemperatureData.max || this.props.dayTemperatureData.min) ? (
      <div className={temperatureCellClass}>
        <h4>{averageTemp} °C</h4>
        <p>Max: {maxTemp}</p>
        <p>Min: {minTemp}</p>
      </div>
    ) : (
      <WeatherErrorMessage className="temperature-cell" type="temperature" />
    ));
  }
}
