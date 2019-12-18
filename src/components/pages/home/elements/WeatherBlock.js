import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WeatherTitle from './weatherTitle/WeatherTitle';
import WeathewrAttributes from './weatherAttributes/WeatherAttributes';
import getMarsWeatherData from '../../../../api/inSightApiClient';
import './HomePage.css';

export default class WeatherBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { weather: this.dummyValues() };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    getMarsWeatherData().then(weather => (this.setState({
      weather: weather.slice(weather.length - 1)[0],
    })
    ));
  }

  dummyValues() {
    return ({
      earthDate: null,
      sol: null,
      pressure: {avg: null, max: null, min: null},
      season: null,
      temp: {avg: null, max: null, min: null},
      wind: {avg: null, max: null, min: null, dir: null},
    });
  }

  render() {
    console.log(this.state.weather);
    return (
      <div className="weather-block">
        <WeatherTitle MarsSol={this.state.weather.sol} EarthDate={this.state.weather.earthDate} MarsSeason={this.state.weather.season} />
        <WeathewrAttributes Temp={this.state.weather.temp} Pressure={this.state.weather.pressure} Wind={this.state.weather.wind} />
        <Link to="/weather"> See more weather</Link>
      </div>
    );
  }
}
