import React, { Component } from 'react';
import CameraNavbar from './cameraNavbar';
import nisa from '../../../../assets/images/nisa.JPG';
import '../PhotoPage.css';
import RoverImageButton from './RoverImageButton';

export default class RoverImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  incrementIndex(previousState) {
    this.setState(
      {index: previousState.index + 1,
    });
  }

  render() {
    return (
      <div className="rover-image">
        <RoverImageButton className="leftButton" direction={this.state.index} OnClick={(previousState) => this.incrementIndex(previousState)} />
        <img className="camera-capture" src={nisa} alt="Mars" />
        <RoverImageButton className="rightButton" direction={this.state.index} OnClick={(previousState) => this.incrementIndex(previousState)} />
        <CameraNavbar />
        <li>{this.state.index}</li>
      </div>
    );
  }
}
