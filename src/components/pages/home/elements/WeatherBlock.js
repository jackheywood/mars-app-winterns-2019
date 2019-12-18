import React, { Component } from 'react';
import '../HomePage.css';
import PageNavButton from '../../../shared/PageNavButton';

export default class WeatherBlock extends Component {
  render() {
    return (
      <div className="weather-block">
        <h3>Today&apos;s weather forecast: </h3>
        <PageNavButton
          buttonLink="/weather"
          message="See more weather info"
        />
      </div>
    );
  }
}
