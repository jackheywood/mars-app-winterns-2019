import React, { Component } from 'react';
import './CameraNavbar.css';

export default class RoverCameraButton extends Component {
  render() {
    return (
      <button
        type="button"
        className="rover-camera-button"
        onClick={this.props.onClick}
      >
        {this.props.cameraName}
      </button>
    );
  }
}
