import React, { Component } from 'react';
import WeatherColumn from './WeatherColumn';
import WeatherTitleColumn from './WeatherTitleColumn';
import getMarsWeatherData from './../../../../api/inSightApiClient';

export default class WeatherTable extends Component {

//let inSightWeather = callInSight();
let inSightWeather = {}



  render() {
    return (
      <div>
        <WeatherTitleColumn />
        <WeatherColumn day="1", dayWeatherData = inSightWeather[0] />
        <WeatherColumn day="2", dayWeatherData = inSightWeather[1]/>
        <WeatherColumn day="3", dayWeatherData = inSightWeather[2] />
        <WeatherColumn day="4", dayWeatherData = inSightWeather[3]/>
        <WeatherColumn day="5", dayWeatherData = inSightWeather[4]/>
        <WeatherColumn day="6", dayWeatherData = inSightWeather[5]/>
        <WeatherColumn day="7", dayWeatherData = inSightWeather[6]/>
      </div>
    );
  }
}
