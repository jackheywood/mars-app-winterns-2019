import React, { Component } from 'react';

export default class WeatherHeadingCell extends Component {
  render() {
    return (
      <div>
        Day: {this.props.day}
      </div>
    );
  }
}
