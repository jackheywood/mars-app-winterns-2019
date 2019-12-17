import React, { Component } from 'react';

export default class WeatherTempCell extends Component {
  render() {
    return (
      <div className="weather-cell" averageTemperature={this.props.dayTemperatureData.avg} minTemperature={this.props.dayTemperatureData.min} maxTemperature={this.props.dayTemperatureData.max}>
        <p><h4>Temperature: {this.props.dayTemperatureData.avg}</h4></p>
        <p>Max: {this.props.dayTemperatureData.max}</p>
        <p>Min: {this.props.dayTemperatureData.min}</p>
      </div>
    );
  }
}
