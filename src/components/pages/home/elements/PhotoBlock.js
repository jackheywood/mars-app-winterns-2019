import React, { Component } from 'react';
import '../HomePage.css';
import PageNavButton from '../../../shared/PageNavButton';
import HomePhoto from './HomePhoto';

export default class PhotoBlock extends Component {
  render() {
    return (
      <div className="photo-block">
        <HomePhoto />
        <PageNavButton
          buttonLink="/photos"
          message="See more photos"
        />
      </div>
    );
  }
}
