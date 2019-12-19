import React, { Component } from 'react';
// import './CameraNavbar.css';

export default class RoverImageButton extends Component {
  render() {
    return (
      <button
        type="button"
        className="rover-image-button"
        onClick={this.props.onClick}
      >
        {this.props.direction}
      </button>
    );
  }
}
