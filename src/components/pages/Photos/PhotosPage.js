import React, { Component } from 'react';
import RoverNavbar from './elements/roverNavbar';
import Rover from './elements/Rover';
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
