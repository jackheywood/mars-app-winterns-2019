import React, { Component } from 'react';

export default class WeatherCell extends Component {
  render() {
    return (
      <div>
        Type: {this.props.type}; Day: {this.props.day}
      </div>
    );
  }
}
