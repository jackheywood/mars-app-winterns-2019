import React, { Component } from 'react';
import RoverNavbar from './roverNavbar';
import Rover from './rover';
import './PhotoPage.css';


export default class PhotosPage extends Component {
  render() {
    return (
      <div className="photo-page">
        <RoverNavbar />
        <Rover />
      </div>
    );
  }
}
