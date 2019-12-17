import React, { Component } from 'react';

export default class WeatherHeadingCell extends Component {
  render() {
    return (
      <div className="weather-cell">
        <p><h3>: {this.props.earthDate}</h3></p>
      </div>
    );
  }
}
