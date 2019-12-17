import React, { Component } from 'react';

export default class WeatherCell extends Component {
  render() {
    return (
      <div>
        <p>{this.props.day}</p>
      </div>
    );
  }
}
