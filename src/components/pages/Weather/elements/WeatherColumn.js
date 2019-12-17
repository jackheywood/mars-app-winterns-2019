import React, { Component } from 'react';
import WeatherCell from './WeatherCell';

export default class WeatherColumn extends Component {
  render() {
    return (
      <div>
        <WeatherCell type="header" day={this.props.day} />
        <WeatherCell type="temp" day={this.props.day} />
        <WeatherCell type="wind" day={this.props.day} />
        <WeatherCell type="pressure" day={this.props.day} />
      </div>
    );
  }
}
