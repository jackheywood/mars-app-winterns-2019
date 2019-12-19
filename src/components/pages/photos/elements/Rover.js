import React, { Component } from 'react';
import RoverImage from './RoverImage';
import AboutRover from './AboutRover';
import '../PhotoPage.css';
import CameraNavbar from './cameraNavbar/CameraNavbar';
import cameraNames from '../../../../enums/cameraNames';


export default class Rover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCamera: cameraNames.FHAZ,
    };
  }

  selectCamera(cameraName) {
    this.setState({
      currentCamera: cameraName,
    });
  }

  render() {
    return (
      <div className="rover-container">
        <RoverImage />
        <CameraNavbar
          onClick={cameraName => this.selectCamera(cameraName)}
        />
        <h2>{this.props.rover} {this.state.currentCamera}</h2>
        <AboutRover />
      </div>
    );
  }
}
