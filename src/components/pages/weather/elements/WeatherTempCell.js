import React, { Component } from 'react';

export default class WeatherTempCell extends Component {
  render() {
    const averageTemp = this.props.dayTemperatureData.avg;
    const maxTemp = this.props.dayTemperatureData.max;
    const minTemp = this.props.dayTemperatureData.min;
    return (
      <div className="temperature-cell">
        <h4>{averageTemp} °F</h4>
        <p>Max: {maxTemp}</p>
        <p>Min: {minTemp}</p>
      </div>
    );
  }
}
