import React, { Component } from 'react';

export default class WeatherWindCell extends Component {
  render() {
    const averageWind = this.props.dayWindData.avg;
    const maxWind = this.props.dayWindData.max;
    const minWind = this.props.dayWindData.min;
    const directionWind = this.props.dayWindData.dir;
    return (
      <div className="wind-cell">
        <h4>Wind Speed: {averageWind}</h4>
        <p>Max: {maxWind}</p>
        <p>Min: {minWind}</p>
        <p>Direction: {directionWind}</p>
      </div>
    );
  }
}
