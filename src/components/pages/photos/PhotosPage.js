import React, { Component } from 'react';
import RoverNavbar from './elements/roverNavbar';
import Rover from './elements/Rover';
import './PhotoPage.css';
import roverNames from '../../../enums/roverNames';
import cameraNames from '../../../enums/cameraNames'
import PageHeading from '../../shared/PageHeading';
import PageNavButton from '../../shared/PageNavButton';

export default class PhotosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRover: roverNames.CURIOSITY,
      currentCamera: cameraNames.FHAZ,
    };
  }

  selectRover(roverName) {
    this.setState({
      currentRover: roverName,
    });
  }

  selectCamera(cameraName) {
    this.setState({
      currentCamera: cameraName,
    });
  }

  render() {
    return (
      <div className="photo-page">
        <PageHeading bannerName="Here are some photos of Mars" />
        <RoverNavbar
          onClick={roverName => this.selectRover(roverName)}
        />
        {/*the li is for us to check clicking on the buttons does change the state */}

        <h2>{this.state.currentRover} {this.state.currentCamera}</h2>
        <Rover />
        <PageNavButton
          buttonLink="/"
          message="Return to Home Page"
        />
      </div>
    );
  }
}
