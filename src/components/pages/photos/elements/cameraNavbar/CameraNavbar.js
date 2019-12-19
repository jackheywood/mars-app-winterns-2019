import React, { Component } from 'react';
import RoverCameraButton from './RoverCameraButton';
import './CameraNavbar.css';

import cameraNames from '../../../../../enums/cameraNames'

export default class CameraNavbar extends Component {
  render() {
    const roverCameraNames = Object.values(cameraNames);
    const buttons = roverCameraNames.map(camera => (
      <RoverCameraButton
        key={camera}
        cameraName={camera}
        onClick={() => this.props.onClick(camera)}
      />
    ));

    return (
      <div className="camera-navbar">
        {buttons}
      </div>
    );
  }

}