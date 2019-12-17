import React, { Component } from 'react';

export default class WeatherHeadingCell extends Component {
  render() {
    return (
      <div className="weather-cell">
        Day:
        Date: {this.props.earthDate}
        Season:
      </div>
    );
  }
}
