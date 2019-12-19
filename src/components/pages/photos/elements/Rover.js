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
      currentCamera: cameraNames[this.props.rover.toString()][0],
      roverName: this.props.rover,
    };
  }

  selectCamera(camera) {
    this.setState({
      currentCamera: camera,
    });
  }

  resetRover() {
    this.setState({
      roverName: this.props.rover,
      currentCamera: cameraNames[this.props.rover.toString()][0],
    });
  }

  render() {
    if (this.props.rover !== this.state.roverName) {
      this.resetRover();
    }
    return (
      <div className="rover-container">
        <RoverImage />
        <CameraNavbar
          onClick={camera => this.selectCamera(camera)}
          rover={this.props.rover}
        />
        <h2>{this.props.rover} {this.state.currentCamera}</h2>
        <AboutRover />
      </div>
    );
  }
}
