import React, { Component } from 'react';
import RoverImage from './RoverImage';
import AboutRover from './AboutRover';
import '../PhotoPage.css';

export default class Rover extends Component {
  render() {
    return (
      <div className="rover-container">
        <RoverImage />
        <AboutRover />
      </div>
    );
  }
}
