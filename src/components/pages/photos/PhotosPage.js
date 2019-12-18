import React, { Component } from 'react';
import RoverNavbar from './elements/roverNavbar';
import Rover from './elements/Rover';
import './PhotoPage.css';


export default class PhotosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRover: 'Curiosity',
    };
  }

  selectRover(roverName) {
    this.setState({
      currentRover: roverName,
    });
  }

  render() {
    return (
      <div className="photo-page">
        <RoverNavbar
          onClick={roverName => this.selectRover(roverName)}
        />
        {/*the li is for us to check clicking on the buttons does change the state */}
        <li>{this.state.currentRover}</li>
        <Rover />
      </div>
    );
  }
}
