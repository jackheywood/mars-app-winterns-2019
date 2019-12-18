import React, { Component } from 'react';

export default class WeatherHeadingCell extends Component {
  render() {
    const { earthDate } = this.props;
    const date = new Date(earthDate);

    return (
      <div className="weather-cell">
        <p><h4>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</h4></p>
        <p>({this.props.season})</p>
      </div>
    );
  }
}
