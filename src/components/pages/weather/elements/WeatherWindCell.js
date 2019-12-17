import React, { Component } from 'react';

export default class WeatherWindCell extends Component {
  render() {
    // const averageWind = this.props.dayWindData.avg;
    // const minWind = this.props.dayWindData.min;
    // const maxWind = this.props.dayWindData.max;
    // const directionWind = this.props.dayWindData.dir;
    return (
      <div className="weather-cell">
        <p><h4>Wind Speed: {this.props.dayWindData.avg}</h4></p>
        <p>Max: {this.props.dayWindData.max}</p>
        <p>Min: {this.props.dayWindData.min}</p>
        <p>Direction: {this.props.dayWindData.dir}</p>
      </div>
    );
  }
}
