import React, { Component } from 'react';
import WeatherColumn from './WeatherColumn';
import WeatherTitleColumn from './WeatherTitleColumn';
import getMarsWeatherData from '../../../../api/inSightApiClient';
// import dummyWeatherData from './weatherDummyData';

import Loader from '../../../shared/loader';

export default class WeatherTable extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     inSightWeather: dummyWeatherData,
  //   };
  // }
  constructor(props) {
    super(props);
    this.state = {
      inSightWeather: null,
    };
  }

  componentDidMount() {
    getMarsWeatherData()
      .then(inSightWeather => this.setState({
        inSightWeather,
      })).catch();
  }

  render() {
    return (this.state.inSightWeather ? (
      <div className="weather-table">
        <WeatherTitleColumn />
        <WeatherColumn dayWeatherData={this.state.inSightWeather[0]} />
        <WeatherColumn dayWeatherData={this.state.inSightWeather[1]} />
        <WeatherColumn dayWeatherData={this.state.inSightWeather[2]} />
        <WeatherColumn dayWeatherData={this.state.inSightWeather[3]} />
        <WeatherColumn dayWeatherData={this.state.inSightWeather[4]} />
        <WeatherColumn dayWeatherData={this.state.inSightWeather[5]} />
        <WeatherColumn dayWeatherData={this.state.inSightWeather[6]} />
      </div>
    ) : (
      <Loader />
    ));
  }
}
