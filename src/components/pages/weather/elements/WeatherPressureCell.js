import React, { Component } from 'react';
import WeatherErrorMessage from './WeatherErrorMessage';


export default class WeatherPressureCell extends Component {
  render() {
    const noDataMessageWeather = 'data unavailable';
    const averagePressure = this.props.dayPressureData.avg ? this.props.dayPressureData.avg.toFixed(3) : noDataMessageWeather;
    const maxPressure = this.props.dayPressureData.max ? this.props.dayPressureData.max.toFixed(3) : noDataMessageWeather;
    const minPressure = this.props.dayPressureData.min ? this.props.dayPressureData.min.toFixed(3) : noDataMessageWeather;

    return ((this.props.dayPressureData.avg || this.props.dayPressureData.max || this.props.dayPressureData.min) ? (
      <div className="pressure-cell">
        <h4>{averagePressure} Pa</h4>
        <p>Max: {maxPressure}</p>
        <p>Min: {minPressure}</p>
      </div>
    ) : (
      <WeatherErrorMessage className="pressure-cell" type="pressure" />
    ));
  }
}
