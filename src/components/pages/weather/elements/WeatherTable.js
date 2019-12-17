import React, { Component } from 'react';
import WeatherColumn from './WeatherColumn';
import WeatherTitleColumn from './WeatherTitleColumn';

export default class WeatherTable extends Component {
  render() {
    return (
      <div>
        <WeatherTitleColumn />
        <WeatherColumn day="1" />
        <WeatherColumn day="2" />
        <WeatherColumn day="3" />
        <WeatherColumn day="4" />
        <WeatherColumn day="5" />
        <WeatherColumn day="6" />
        <WeatherColumn day="7" />
      </div>
    );
  }
}
