import React, { Component } from 'react';
import RoverNavbar from './elements/roverNavbar';
import Rover from './elements/Rover';
import './PhotoPage.css';
import roverNames from '../../../enums/roverNames';
import PageHeading from '../../shared/PageHeading';
import PageNavButton from '../../shared/PageNavButton';
import cameraNames from '../../../enums/cameraNames';

export default class PhotosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRover: roverNames.CURIOSITY,
    };
  }

  selectRover(roverName) {
    this.setState({
      currentRover: roverName,
    });
  }

  render() {
    return (
      <div className="photo-page">
        <PageHeading bannerName="Here are some photos of Mars" />
        <RoverNavbar
          onClick={roverName => this.selectRover(roverName)}
        />
        { /* the li is for us to check clicking on the buttons does change the state */ }
        <li>{this.state.currentRover}</li>
        <Rover currentRover={this.state.currentRover} currentCamera={cameraNames.FHAZ} />
        <PageNavButton
          buttonLink="/"
          message="Return to Home Page"
        />
      </div>
    );
  }
}
