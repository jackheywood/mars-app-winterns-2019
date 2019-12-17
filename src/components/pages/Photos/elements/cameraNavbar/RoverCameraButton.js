import React, { Component } from 'react';
import './CameraNavbar.css';

export default class RoverCameraButton extends Component {
  render() {
    return (
      <div>
        <button type="button" className="rover-camera-button">FHAZ</button>
        <button type="button" className="rover-camera-button">RHAZ</button>
        <button type="button" className="rover-camera-button">MAST</button>
        <button type="button" className="rover-camera-button">CHEMCAM</button>
        <button type="button" className="rover-camera-button">MAHLI</button>
        <button type="button" className="rover-camera-button">MARDI</button>
        <button type="button" className="rover-camera-button">NAVCAM</button>
        <button type="button" className="rover-camera-button">PANCAM</button>
        <button type="button" className="rover-camera-button">MINITES</button>
      </div>
    );
  }
}
