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
      roverPhotosArray: null,
    };
  }

  componentDidMount() {
    this.getData();
  }


  getData() {
    getPhotos()
      .then(rovers => this.setState({
        roverPhotosArray: rovers,
      }));
  }

  getCameraPhotos() {
    const rover = this.props.rover.toString();
    const camera = this.props.currentCamera.toString();
    return this.state.roverPhotosArray[rover].cameras[camera].photos.map(photo => photo.imgSrc);
  }

  getEarthDate() {
    const rover = this.props.rover.toString();
    const camera = this.props.currentCamera.toString();
    return this.state.roverPhotosArray[rover].cameras[camera].photos.map(photo => photo.earthDate);
  }

  render() {
    return this.state.roverPhotosArray ? (
      <div className="rover-container">
        <RoverImage
          photoUrlArray={this.getCameraPhotos()}
        />
        <CameraNavbar
          onClick={this.props.onClick}
          rover={this.props.rover}
        />
        <h2>{this.props.currentCamera}: {this.getEarthDate()[0]}</h2>
        <AboutRover />
      </div>
    ) : (
      <div>this will be a loading spinner</div>
    );
  }
}
