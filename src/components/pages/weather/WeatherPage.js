import React, { Component } from 'react';
import WeatherTable from './elements/WeatherTable';
import './WeatherPage.css';
import PageHeading from '../../shared/PageHeading';

export default class WeatherPage extends Component {
  render() {
    return (
      <div>
        <PageHeading bannerName="Here is some information about the current weather" />
        <WeatherTable />
      </div>
    );
  }
}
