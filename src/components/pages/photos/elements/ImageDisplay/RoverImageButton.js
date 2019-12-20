import React, { Component } from 'react';
import '../../PhotoPage.css';

export default class RoverImageButton extends Component {
  render() {
    return (
      <button
        type="button"
        className="rover-image-button"
        onClick={this.props.onClick}
      >
        <div className="button-direction">
          <h3>{this.props.direction}</h3>
        </div>
      </button>
    );
  }
}
