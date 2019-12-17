import React, { Component } from 'react';

export default class WeatherWindCell extends Component {
  render() {
    return (
      <div className="weather-cell" averageWind={this.props.dayWindData.avg} minWind={this.props.dayWindData.min} maxWind={this.props.dayWindData.max} directionWind={this.props.dayWindData.dir}>
        Wind:
      </div>
    );
  }
}
