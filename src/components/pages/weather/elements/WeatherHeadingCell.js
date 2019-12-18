import React, { Component } from 'react';

export default class WeatherHeadingCell extends Component {
  render() {
    return (
      <div className="weather-cell">
        <p><h4>{this.props.earthDate}</h4></p>
        <p>({this.props.season})</p>
      </div>
    );
  }
}
