import React, { Component } from 'react';
import RoverImage from './RoverImage';
import AboutRover from './AboutRover';
import '../PhotoPage.css';
import CameraNavbar from './cameraNavbar/CameraNavbar';
import getPhotos from '../../../../api/photoApiClient';


export default class Rover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrlArray: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    getPhotos()
      .then(rovers => console.log(rovers))
  }

  render() {
    return this.state.photoUrlArray? (
      <div className="rover-container">
        <RoverImage />
        <CameraNavbar
          onClick={this.props.onClick}
          rover={this.props.rover}
        />
        <h2>{this.props.rover} {this.props.currentCamera}</h2>
        <AboutRover />
      </div>
    ):(
      <div>this will be a loading spinner</div>
    );
  }
}
