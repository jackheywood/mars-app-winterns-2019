import React, { Component } from 'react';
import '../PhotoPage.css';
import AboutText from './aboutText/aboutText';

export default class AboutRover extends Component {
  constructor(props) {
    super(props);
    this.aboutText = new AboutText();
  }

  render() {
    return (
      <div className="about-container">
        <p> {this.aboutText[this.props.currentCamera]}</p>
        <p> {this.aboutText[this.props.currentRover]} </p>
      </div>
    );
  }
}
