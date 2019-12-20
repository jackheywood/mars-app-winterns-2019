import React, { Component } from 'react';
import WeatherErrorMessage from './WeatherErrorMessage';

export default class WeatherTempCell extends Component {
  render() {
    const averageTemp = this.props.dayTemperatureData.avg || 'data unavailable';
    const maxTemp = this.props.dayTemperatureData.max || 'data unavailable';
    const minTemp = this.props.dayTemperatureData.min || 'data unavailable';
    return ((this.props.dayTemperatureData.avg && this.props.dayTemperatureData.max && this.props.dayTemperatureData.min) ? (
      <div className="temperature-cell">
        <h4>Temperature: {averageTemp}</h4>
        <p>Max: {maxTemp}</p>
        <p>Min: {minTemp}</p>
      </div>
    ) : (
      <WeatherErrorMessage className="temperature-cell" type="temperature" />
    ));
  }
}
