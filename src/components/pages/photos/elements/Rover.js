import React, { Component } from 'react';
import RoverImage from './RoverImage';
import AboutRover from './AboutRover';
import '../PhotoPage.css';
import CameraNavbar from './cameraNavbar/CameraNavbar';


export default class Rover extends Component {
  render() {
    return (
      <div className="rover-container">
        <RoverImage />
        <CameraNavbar
          onClick={this.props.onClick}
          rover={this.props.rover}
        />
        <h2>{this.props.rover} {this.props.currentCamera}</h2>
        <AboutRover />
      </div>
    );
  }
}
