import React, { Component } from 'react';
import PageHeading from '../../shared/PageHeading';
import WeatherBlock from './elements/WeatherBlock';
import PhotoBlock from './elements/PhotoBlock';


export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <PageHeading bannerName="Welcome to Mars" />
        <WeatherBlock />
        <PhotoBlock />
      </div>
    );
  }
}
