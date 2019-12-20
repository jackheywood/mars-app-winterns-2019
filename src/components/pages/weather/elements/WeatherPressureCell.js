import React, { Component } from 'react';
import WeatherErrorMessage from './WeatherErrorMessage';


export default class WeatherPressureCell extends Component {
  render() {
    const noDataMessageWeather = 'data unavailable';
    const averagePressure = this.props.dayPressureData.avg || noDataMessageWeather;
    const maxPressure = this.props.dayPressureData.max || noDataMessageWeather;
    const minPressure = this.props.dayPressureData.min || noDataMessageWeather;
    return ((this.props.dayPressureData.avg && this.props.dayPressureData.max && this.props.dayPressureData.min) ? (
      <div className="pressure-cell">
        <h4>Pressure: {averagePressure}</h4>
        <p>Max: {maxPressure}</p>
        <p>Min: {minPressure}</p>
      </div>
    ) : (
      <WeatherErrorMessage className="temperature-cell" type="temperature" />
    ));
  }
}
