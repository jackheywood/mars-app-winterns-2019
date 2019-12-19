import React, { Component } from 'react';
import RoverNavbar from './elements/roverNavbar';
import Rover from './elements/Rover';
import './PhotoPage.css';
import roverNames from '../../../enums/roverNames';
import cameraNames from '../../../enums/cameraNames';
import PageHeading from '../../shared/PageHeading';
import PageNavButton from '../../shared/PageNavButton';

export default class PhotosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRover: roverNames.CURIOSITY,
      currentCamera: cameraNames.Curiosity[0],
    };
  }

  selectRover(roverName) {
    this.setState({
      currentRover: roverName,
      currentCamera: cameraNames[roverName.toString()][0],
    });
  }

  selectCamera(camera) {
    this.setState({
      currentCamera: camera,
    });
  }

  render() {
    return (
      <div className="photo-page">
        <PageHeading bannerName="Here are some photos of Mars" />
        <RoverNavbar
          onClick={roverName => this.selectRover(roverName)}
        />

        <h2>{this.state.currentRover}</h2>
        <Rover
          rover={this.state.currentRover}
          currentCamera={this.state.currentCamera}
          onClick={camera => this.selectCamera(camera)}
        />
        <PageNavButton
          buttonLink="/"
          message="Return to Home Page"
        />
      </div>
    );
  }
}
