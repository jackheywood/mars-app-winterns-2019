import React, { Component } from 'react';
import CameraNavbar from './cameraNavbar';
import './PhotoPage.css';

export default class ImageBloack extends Component {
  render() {
    return (
      <div className="rover-image">
        <img className="camera-capture" src="../../../assets/images/logo.svg" alt="Mars" />
        <CameraNavbar />
      </div>
    );
  }
}
