import React, { Component } from 'react';
import nisa from '../../../../assets/images/nisa.JPG';
import '../PhotoPage.css';

export default class RoverImage extends Component {
  render() {
    return (
      <div className="rover-image">
        <img className="camera-capture" src={nisa} alt="Mars" />
      </div>
    );
  }
}
