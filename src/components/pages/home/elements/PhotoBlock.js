import React, { Component } from 'react';
import logo from '../../../../assets/images/logo.svg';
import '../HomePage.css';
import PageNavButton from '../../../shared/PageNavButton';

export default class PhotoBlock extends Component {
  render() {
    return (
      <div className="photo-block">
        <img src={logo} className="homepage-photo" alt="logo" />
        <PageNavButton
          buttonLink="/photos"
          message="See more photos"
        />
      </div>
    );
  }
}
