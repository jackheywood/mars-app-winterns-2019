import React, { Component } from 'react';
import WeatherHeadingCell from './WeatherHeadingCell';
import WeatherTempCell from './WeatherTempCell';
import WeatherWindCell from './WeatherWindCell';
import WeatherPressureCell from './WeatherPressureCell';

export default class WeatherColumn extends Component {
  render() {
    const { earthDate } = this.props.dayWeatherData;
    const { season } = this.props.dayWeatherData;
    return (
      <div className="weather-column">
        <WeatherHeadingCell earthDate={earthDate} season={season} />
        <WeatherTempCell dayTemperatureData={this.props.dayWeatherData.temp} />
        <WeatherWindCell dayWindData={this.props.dayWeatherData.wind} />
        <WeatherPressureCell dayPressureData={this.props.dayWeatherData.pressure} />
      </div>
    );
  }
}
