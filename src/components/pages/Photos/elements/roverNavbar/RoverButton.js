import React, { Component } from 'react';
import './RoverNavbar.css';

export default class RoverButton extends Component {
  render() {
    return (
      <div>
        <button type="button" className="rover-button">Curiosity</button>
        <button type="button" className="rover-button">Opportunity</button>
        <button type="button" className="rover-button">Spirit</button>
      </div>
    );
  }
}
