import React, { Component } from 'react';
import RoverImage from './RoverImage';
import AboutRover from './AboutRover';
import '../PhotoPage.css';
import CameraNavbar from './cameraNavbar/CameraNavbar';
import cameraNames from '../../../../enums/cameraNames';
import getPhotos from '../../../../api/photoApiClient';
import Loader from '../../../shared/loader';

export default class Rover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCamera: cameraNames.FHAZ,
      roverPhotosArray: null,
      photoUrlArray: null,
      index: 0,
      photoDate: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentRover !== prevProps.currentRover) {
      this.getCameraPhotos(cameraNames.FHAZ);
    }
  }

  getData() {
    getPhotos()
      .then(rovers => {
        this.setState({
          roverPhotosArray: rovers,
        });
        this.getCameraPhotos(this.state.currentCamera);
      });
  }

  getCameraPhotos(camera) {
    const rover = this.props.currentRover;
    this.setState(state => (
      {
        photoUrlArray: state.roverPhotosArray[rover].cameras[camera].photos.map(photo => photo.imgSrc),
        index: 0,
        currentCamera: camera,
        photoDate: state.roverPhotosArray[rover].cameras[camera].photos.map(photo => photo.earthDate)[0],
      }
    ));
  }

  getEarthDate() {
    const rover = this.props.currentRover.toString();
    const camera = this.state.currentCamera.toString();
    return this.state.roverPhotosArray[rover].cameras[camera].photos.map(photo => photo.earthDate)[0];
  }

  incrementIndex() {
    this.setState(state => (
      {
        index: Math.min(state.index + 1, state.photoUrlArray.length - 1),
      }
    ));
  }

  decrementIndex() {
    this.setState(state => (
      {
        index: Math.max(0, state.index - 1),
      }
    ));
  }

  render() {
    return this.state.photoUrlArray ? (
      <div className="rover-container">
        <RoverImage
          photoUrlArray={this.state.photoUrlArray}
          index={this.state.index}
          incrementIndex={() => this.incrementIndex()}
          decrementIndex={() => this.decrementIndex()}
        />
        <CameraNavbar
          onClick={camera => this.getCameraPhotos(camera)}
          rover={this.props.currentRover}
        />
        <h2>{this.state.currentCamera}: {this.state.photoDate}</h2>
        <AboutRover />
      </div>
    ) : (
      <Loader />
    );
  }
}
