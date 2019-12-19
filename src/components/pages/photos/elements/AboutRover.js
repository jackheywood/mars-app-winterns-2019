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
        <li> {this.aboutText[this.props.currentRover]} {this.aboutText[this.props.currentCamera]}</li>
      </div>
    );
  }
}
