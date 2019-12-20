import React, { Component } from 'react';
import RoverCameraButton from './RoverCameraButton';
import './CameraNavbar.css';
import roverCameras from '../../../../../enums/roverCameras';

export default class CameraNavbar extends Component {
  renderCameraButtons() {
    return Object.values(roverCameras[this.props.rover]).map(camera => (
      <RoverCameraButton
        key={camera}
        cameraName={camera}
        onClick={() => this.props.onClick(camera)}
      />
    ));
  }

  render() {
    return (
      <div className="camera-navbar">
        {this.renderCameraButtons()}
      </div>
    );
  }
}
