import React, { Component } from 'react';
import getPhotos from '../../../../api/photoApiClient';
import Loader from '../../../shared/loader';

export default class HomePhoto extends Component {
  constructor() {
    super();
    this.state = {
      imgSrc: null,
      date: null,
    };
  }

  componentDidMount() {
    getPhotos().then(response => {
      const homePagePhoto = response[0].cameras[0].photos[0];
      this.setState({
        imgSrc: homePagePhoto.imgSrc,
        date: homePagePhoto.earthDate,
      });
    }).catch();
  }

  render() {
    return (
      this.state.imgSrc ? (
        <div className="homepage-photo">
          <img src={this.state.imgSrc} alt="homepage mars" />
          <p>A photo taken by Curiosity`s FHAZ camera at {this.state.date}</p>
        </div>
      ) : (
        <Loader />
      )
    );
  }
}
