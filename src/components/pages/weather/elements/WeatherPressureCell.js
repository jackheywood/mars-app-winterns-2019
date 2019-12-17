import React, { Component } from 'react';

export default class WeatherPressureCell extends Component {
  render() {
    return (
      <div className="weather-cell" averagePressure={this.props.dayPressureData.avg} minPressure={this.props.dayPressureData.min} maxPressure={this.props.dayPressureData.max}>
        Pressure: {this.props.dayPressureData.average}
      </div>
    );
  }
}
