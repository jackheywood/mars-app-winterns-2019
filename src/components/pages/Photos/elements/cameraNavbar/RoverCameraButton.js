import React, { Component } from 'react';
import './CameraNavbar.css';

export default class RoverCameraButton extends Component {
  render() {
    return (
      <button type="button" className="rover-camera-button">{this.props.cameraName}</button>
    );
  }
}
