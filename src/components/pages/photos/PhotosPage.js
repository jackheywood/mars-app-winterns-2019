import React, { Component } from 'react';
import RoverNavbar from './elements/roverNavbar';
import Rover from './elements/Rover';
import './PhotoPage.css';
import roverNames from '../../../enums/roverNames';
import PageHeading from '../../shared/PageHeading';
import PageNavButton from '../../shared/PageNavButton';

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
        <PageHeading bannerName="Oh Look, Some Photos!!!" />
        <RoverNavbar
          onClick={roverName => this.selectRover(roverName)}
        />

        <h2>{this.state.currentRover}</h2>
        <Rover
          currentRover={this.state.currentRover}
        />
        <PageNavButton
          buttonLink="/"
          message="Return to Home Page"
        />
      </div>
    );
  }
}
