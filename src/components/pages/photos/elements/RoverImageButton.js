import React, { Component } from 'react';
// import './CameraNavbar.css';

export default class RoverImageButton extends Component {
  render() {
    return (
      <button type="button" className="rover-image-button">{this.props.direction}</button>
    );
  }
}
