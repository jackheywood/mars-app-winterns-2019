import React, { Component } from 'react';

export default class WeatherPressureCell extends Component {
  render() {
    return (
      <div className="weather-cell" averagePressure={this.props.dayPressureData.avg} minPressure={this.props.dayPressureData.min} maxPressure={this.props.dayPressureData.max}>
        <p><h4>Pressure: {this.props.dayPressureData.avg}</h4></p>
        <p>Max: {this.props.dayPressureData.max}</p>
        <p>Min: {this.props.dayPressureData.min}</p>
      </div>
    );
  }
}
