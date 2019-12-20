import React, { Component } from 'react';
import './RoverNavbar.css';

export default class RoverButton extends Component {
  render() {
    return (
      <button
        type="button"
        className="rover-button"
        onClick={this.props.onClick}
      >
        {this.props.roverName}
      </button>
    );
  }
}
