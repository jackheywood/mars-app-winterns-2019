import React, { Component } from 'react';
import WeatherTable from './elements/WeatherTable';
import './WeatherPage.css';
import PageHeading from '../../shared/PageHeading';
import PageNavButton from '../../shared/PageNavButton';

export default class WeatherPage extends Component {
  render() {
    return (
      <div>
        <PageHeading bannerName="A Week's Weather Review" />
        <h2>Weather data from Elysium Planitia, Mars</h2>
        <WeatherTable />
        <PageNavButton
          buttonLink="/"
          message="Return to Home Page"
        />
      </div>
    );
  }
}
