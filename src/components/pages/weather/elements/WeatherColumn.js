import React, { Component } from 'react';
import WeatherHeadingCell from './WeatherHeadingCell';
import WeatherTempCell from './WeatherTempCell';
import WeatherWindCell from './WeatherWindCell';
import WeatherPressureCell from './WeatherPressureCell';

export default class WeatherColumn extends Component {
  render() {
    return (
      <div className="weather-column">
        <WeatherHeadingCell earthDate={this.props.dayWeatherData.earthDate} />
        <WeatherTempCell day={this.props.day} dayTemperatureData={this.props.dayWeatherData.temp} />
        <WeatherWindCell day={this.props.day} dayWindData={this.props.dayWeatherData.wind} />
        <WeatherPressureCell dayPressureData={this.props.dayWeatherData.pressure} />
      </div>
    );
  }
}
