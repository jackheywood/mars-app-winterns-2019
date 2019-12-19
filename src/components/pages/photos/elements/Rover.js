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
        roversPhotosArray: rovers,
      }));
  }

  getCameraPhotos() {
    const rover = this.props.rover.toString();
    const roverPhotosArray = this.state.roverPhotosArray;

    switch (rover) {
      case ('Curiosity'):
        console.log(roverPhotosArray[0].cameras[camera]);
        break;
      case ('Spirit'):
        break;
      case ('Opportunity'):
        break;
      default:
  
    }

    return roverPhotos;
  }


  render() {
    return this.state.photoUrlArray ? (
      <div className="rover-container">
        <RoverImage />
        <CameraNavbar
          onClick={this.props.onClick}
          rover={this.props.rover}
        />
        <h2>{this.props.rover} {this.props.currentCamera}</h2>
        <AboutRover />
      </div>
    ) : (
      <div>this will be a loading spinner</div>
    );
  }
}
