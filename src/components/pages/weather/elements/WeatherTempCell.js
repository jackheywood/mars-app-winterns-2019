import React, { Component } from 'react';

export default class WeatherTempCell extends Component {
  render() {
    return (
      <div className="weather-cell" averageTemperature={this.props.dayTemperatureData.avg} minTemperature={this.props.dayTemperatureData.min} maxTemperature={this.props.dayTemperatureData.max}>
        Temp:
      </div>
    );
  }
}
