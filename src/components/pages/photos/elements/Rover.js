import React, { Component } from 'react';
import RoverImage from './RoverImage';
import AboutRover from './AboutRover';
import '../PhotoPage.css';
import CameraNavbar from './cameraNavbar/CameraNavbar';

export default class Rover extends Component {
  render() {
    const URL1 = 'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02540/opgs/edr/fcam/FLB_622990123EDR_F0763002FHAZ00341M_.JPG';
    const URL2 = 'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02540/opgs/edr/fcam/FRB_622990123EDR_F0763002FHAZ00341M_.JPG';
    const URL3 = 'https://mars.nasa.gov/msl-raw-images/msss/02539/mcam/2539ML0133630040805433C00_DXXX.jpg';
    const dummyPhotoUrlArray = [URL1, URL2, URL3];

    return (
      <div className="rover-container">
        <RoverImage photoUrlArray={dummyPhotoUrlArray} />
        <CameraNavbar />
        <AboutRover currentRover={this.props.currentRover} currentCamera={this.props.currentCamera} />
      </div>
    );
  }
}
