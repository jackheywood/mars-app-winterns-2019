import React from 'react';
import RoverCameraButton from './RoverCameraButton';
import './CameraNavbar.css';

export default function Navbar() {
  return (
    <ul className="camera-navbar">
      <RoverCameraButton />
    </ul>
  );
}
