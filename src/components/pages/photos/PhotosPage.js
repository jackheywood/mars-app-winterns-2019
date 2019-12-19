import React, { Component } from 'react';
import RoverNavbar from './elements/roverNavbar';
import Rover from './elements/Rover';
import './PhotoPage.css';
import roverNames from '../../../enums/roverNames';
import cameraNames from '../../../enums/cameraNames';
import PageHeading from '../../shared/PageHeading';
import PageNavButton from '../../shared/PageNavButton';
import getPhotos from '../../../api/photoApiClient';

export default class PhotosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRover: roverNames.CURIOSITY,
      currentCamera: cameraNames.Curiosity[0],
      index: 0,
      roverPhotosArray: null,
      photoUrlArray: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  selectRover(roverName) {
    const camera = cameraNames[roverName.toString()][0]
    this.getCameraPhotos(roverName,camera);
    this.setState({
      currentRover: roverName,
      currentCamera: camera,
      index: 0,
    });
  }

  selectCamera(camera) {
    this.getCameraPhotos(this.state.currentRover, camera);
    this.setState({
      currentCamera: camera,
      index: 0,
    });
  }

  incrementIndex() {
    this.setState(state => (
      {
        index: Math.min(state.index + 1, this.state.photoUrlArray.length - 1),
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


  getData() {
    getPhotos()
      .then(rovers => {
        this.setState({
          roverPhotosArray: rovers,
        });
        this.getCameraPhotos(this.state.currentRover, this.state.currentCamera);
      });
  }

  getCameraPhotos(rover, camera) {
    const array = this.state.roverPhotosArray[rover].cameras[camera].photos.map(photo => photo.imgSrc);
    this.setState({
      photoUrlArray: array,
    });
  }

  getEarthDate() {
    const rover = this.state.currentRover.toString();
    const camera = this.state.currentCamera.toString();
    return this.state.roverPhotosArray[rover].cameras[camera].photos.map(photo => photo.earthDate);
  }


  render() {
    return this.state.photoUrlArray ? (
      <div className="photo-page">
        <PageHeading bannerName="Here are some photos of Mars" />
        <RoverNavbar
          onClick={roverName => this.selectRover(roverName)}
        />

        <h2>{this.state.currentRover}</h2>
        <Rover
          rover={this.state.currentRover}
          currentCamera={this.state.currentCamera}
          onClick={camera => this.selectCamera(camera)}
          index={this.state.index}
          incrementIndex={() => this.incrementIndex()}
          decrementIndex={() => this.decrementIndex()}
          roverPhotosArray={this.state.roverPhotosArray}
          earthDate={this.getEarthDate()[0]}
          photoUrlArray={this.state.photoUrlArray}
        />
        <PageNavButton
          buttonLink="/"
          message="Return to Home Page"
        />
      </div>
    ) : (
      <div>this will be a loading spinner</div>
    );
  }
}
