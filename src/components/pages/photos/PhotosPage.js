import React, { Component } from 'react';
import RoverNavbar from './elements/roverNavbar';
import Rover from './elements/Rover';
import './PhotoPage.css';
import PageHeading from '../../shared/PageHeading';

export default class PhotosPage extends Component {
  render() {
    return (
      <div className="photo-page">
        <PageHeading bannerName="Here are some photos of Mars" />
        <RoverNavbar />
        <Rover />
      </div>
    );
  }
}
