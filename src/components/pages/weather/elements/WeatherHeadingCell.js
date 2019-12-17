import React, { Component } from 'react';

export default class WeatherHeadingCell extends Component {
  render() {
    return (
      <div className="weather-cell">
        Day: {this.props.day}
        Date: {this.props.earthDate}
        Season: {this.props.season}
      </div>
    );
  }
}
