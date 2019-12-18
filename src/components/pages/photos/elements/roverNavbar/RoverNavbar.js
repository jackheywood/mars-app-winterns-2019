import React, { Component } from 'react';
import RoverButton from './RoverButton';
import './RoverNavbar.css';
import roverNames from '../../../../../enums/roverNames';

export default class RoverNavbar extends Component {
  renderRoverButtons() {
    return Object.values(roverNames).map(roverName => (
      <RoverButton
        key={roverName}
        roverName={roverName}
        onClick={() => this.props.onClick(roverName)}
      />
    ));
  }

  render() {
    return (
      <div className="rover-navbar">
        {this.renderRoverButtons()}
      </div>
    );
  }
}
