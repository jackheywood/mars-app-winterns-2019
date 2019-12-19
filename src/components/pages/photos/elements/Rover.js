import React, { Component } from 'react';
import RoverImage from './RoverImage';
import AboutRover from './AboutRover';
import '../PhotoPage.css';
import CameraNavbar from './cameraNavbar/CameraNavbar';


export default class Rover extends Component {
  render() {
    return (
      <div className="rover-container">
        <RoverImage
          photoUrlArray={this.props.photoUrlArray}
          index={this.props.index}
          incrementIndex={this.props.incrementIndex}
          decrementIndex={this.props.decrementIndex}
        />
        <CameraNavbar
          onClick={this.props.onClick}
          rover={this.props.rover}
        />
        <h2>{this.props.currentCamera}: {this.props.earthDate}</h2>
        <AboutRover />
      </div>
    );
  }
}
