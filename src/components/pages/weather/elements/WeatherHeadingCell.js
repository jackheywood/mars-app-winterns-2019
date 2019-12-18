import React, { Component } from 'react';

export default class WeatherHeadingCell extends Component {
  render() {
    const date = new Date(this.props.earthDate);

    return (
      <div className="weather-cell">
        <h4>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</h4>
        <p>({this.props.season})</p>
      </div>
    );
  }
}
