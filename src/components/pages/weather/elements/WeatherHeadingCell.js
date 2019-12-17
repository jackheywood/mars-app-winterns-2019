import React, { Component } from 'react';

export default class WeatherHeadingCell extends Component {
  render() {
    return (
      <div className="weather-cell">
        Day: {this.props.day}
      </div>
    );
  }
}
