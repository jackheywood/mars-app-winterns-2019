import React, { Component } from 'react';
import '../PhotoPage.css';
import RoverImageButton from './RoverImageButton';

export default class RoverImage extends Component {
  render() {
    return (
      <div className="rover-image">
        <RoverImageButton
          className="left-button"
          direction="<"
          onClick={() => this.props.decrementIndex()}
        />
        <img
          className="camera-capture"
          src={this.props.photoUrlArray[this.props.index]}
          alt="Mars"
        />
        <RoverImageButton
          className="right-button"
          direction=">"
          onClick={() => this.props.incrementIndex()}
        />
        <h4>Photo {this.props.index + 1} / {this.props.photoUrlArray.length}</h4>
      </div>
    );
  }
}
