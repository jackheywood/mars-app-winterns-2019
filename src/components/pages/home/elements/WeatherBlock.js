import React, { Component } from 'react';
import WeatherTitle from './weatherTitle/WeatherTitle';
import WeatherAttributes from './weatherAttributes/WeatherAttributes';
import getMarsWeatherData from '../../../../api/inSightApiClient';
import '../HomePage.css';
import PageNavButton from '../../../shared/PageNavButton';
import Loader from '../../../shared/loader';
import angryLadyImage from '../../../../assets/images/angry_lady.jpg';

export default class WeatherBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      error: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    getMarsWeatherData()
      .then(weather => (this.setState({
        weather: weather.slice(weather.length - 1)[0],
      }))).catch(() => (this.setState({ error: true })));
  }

  render() {
    if (this.state.error === true) {
      return (
        <div>
          <img src={angryLadyImage} alt="Error" />
          <p>Weather API Call unsuccessful</p>
        </div>
      );
    }
    return this.state.weather ? (
      <div className="weather-block">
        <WeatherTitle
          marsSol={this.state.weather.sol}
          earthDate={this.state.weather.earthDate}
          marsSeason={this.state.weather.season}
        />
        <WeatherAttributes
          temp={this.state.weather.temp}
          pressure={this.state.weather.pressure}
          wind={this.state.weather.wind}
        />
        <PageNavButton
          buttonLink="/weather"
          message="See more weather info"
        />
      </div>
    ) : (
      <Loader />
    );
  }
}
