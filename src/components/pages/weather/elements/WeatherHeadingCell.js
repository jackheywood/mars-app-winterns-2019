import React, { Component } from 'react';

export default class WeatherHeadingCell extends Component {
  render() {
    const season = (this.props.season ? (this.props.season) : (null));
    const date = new Date(this.props.earthDate);

    return ((!this.props.earthDate) ? (
      <div className="weather-cell">
        <h4>unknown date</h4>
        <p>({season})</p>
      </div>
    ) : (
      <div className="weather-cell">
        <h4>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</h4>
        <p>({season})</p>
      </div>
    ));
  }
}
