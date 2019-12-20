import React, { Component } from 'react';
import WeatherErrorMessage from './WeatherErrorMessage';


export default class WeatherWindCell extends Component {
  render() {
    const averageWind = this.props.dayWindData.avg || 'data unavailable';
    const maxWind = this.props.dayWindData.max || 'data unavailable';
    const minWind = this.props.dayWindData.min || 'data unavailable';
    const directionWind = this.props.dayWindData.dir || 'data unavailable';
    return ((this.props.dayWindData.avg && this.props.dayWindData.max && this.props.dayWindData.min) ? (
      <div className="wind-cell">
        <h4>Wind Speed: {averageWind}</h4>
        <p>Max: {maxWind}</p>
        <p>Min: {minWind}</p>
        <p>Direction: {directionWind}</p>
      </div>
    ) : (
      <WeatherErrorMessage className="wind-cell" type="wind" />
    ));
  }
}
