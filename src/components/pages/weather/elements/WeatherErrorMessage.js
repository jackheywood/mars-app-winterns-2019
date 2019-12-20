import React, { Component } from 'react';

export default class WeatherErrorMessage extends Component {
  render() {
    return (
      <div className="pressure-cell">
        <p>no {this.props.type} data available</p>
      </div>
    );
  }
}
