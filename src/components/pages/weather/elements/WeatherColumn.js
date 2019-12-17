import React, { Component } from 'react';
import WeatherHeadingCell from './WeatherHeadingCell';
import WeatherTempCell from './WeatherTempCell';
import WeatherWindCell from './WeatherWindCell';
import WeatherPressureCell from './WeatherPressureCell';

export default class WeatherColumn extends Component {
  render() {
    return (
      <div className="weather-column">
        <WeatherHeadingCell day={this.props.day} earthDate={this.props.dayWeatherData.earthDate} season={this.props.dayWeatherData.season} />
        <WeatherTempCell day={this.props.day} dayTemperatureData={this.props.dayWeatherData.temp} />
        <WeatherWindCell day={this.props.day} dayWindData={this.props.dayWeatherData.wind} />
        <WeatherPressureCell day={this.props.day} dayPressureData={this.props.dayWeatherData.pressure} />
      </div>
    );
  }
}
