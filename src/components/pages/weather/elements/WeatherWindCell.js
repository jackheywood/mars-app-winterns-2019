import React, { Component } from 'react';

export default class WeatherWindCell extends Component {
  render() {
    const averageWind = (this.props.dayWindData.avg ? (this.props.dayWindData.avg) : ('data unavailable'));
    const maxWind = (this.props.dayWindData.max ? (this.props.dayWindData.max) : ('data unavailable'));
    const minWind = (this.props.dayWindData.min ? (this.props.dayWindData.min) : ('data unavailable'));
    const directionWind = (this.props.dayWindData.dir ? (this.props.dayWindData.dir) : ('data unavailable'));
    return ((!this.props.dayWindData.avg && !this.props.dayWindData.max && !this.props.dayWindData.min) ? (
      <div className="wind-cell">
        <p>no wind data available</p>
      </div>
    ) : (
      <div className="wind-cell">
        <h4>Wind Speed: {averageWind}</h4>
        <p>Max: {maxWind}</p>
        <p>Min: {minWind}</p>
        <p>Direction: {directionWind}</p>
      </div>
    ));
  }
}
