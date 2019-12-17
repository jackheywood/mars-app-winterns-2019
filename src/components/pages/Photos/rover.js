import React, { Component } from 'react';
import ImageBlock from './ImageBlock';
import AboutBlock from './AboutBlock';
import './PhotoPage.css';

export default class Rover extends Component {
  render() {
    return (
      <div className="rover-container">
        <ImageBlock />
        <AboutBlock />
      </div>
    );
  }
}