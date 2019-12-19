import React, { Component } from 'react';
import WeatherHeadingCell from './WeatherHeadingCell';
import WeatherTempCell from './WeatherTempCell';
import WeatherWindCell from './WeatherWindCell';
import WeatherPressureCell from './WeatherPressureCell';

export default class WeatherColumn extends Component {
  render() {
    const { earthDate, season, temp, wind, pressure } = this.props.dayWeatherData;
    return (
      <div className="weather-column">
        <WeatherHeadingCell earthDate={earthDate} season={season} />
        <WeatherTempCell dayTemperatureData={temp} />
        <WeatherWindCell dayWindData={wind} />
        <WeatherPressureCell dayPressureData={pressure} />
      </div>
    );
  }
}
