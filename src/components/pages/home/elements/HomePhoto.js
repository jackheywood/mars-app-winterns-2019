import React, { Component } from 'react';
import getPhotos from '../../../../api/photoApiClient';
import Loader from '../../../shared/loader';
import angryLadyImage from '../../../../assets/images/angry_lady.jpg';

export default class HomePhoto extends Component {
  constructor() {
    super();
    this.state = {
      imgSrc: null,
      message: null,
    };
  }

  componentDidMount() {
    getPhotos().then(response => {
      const homePagePhoto = response[0].cameras[0].photos[0];
      this.setState({
        imgSrc: homePagePhoto.imgSrc,
        message: `A photo taken by curiosity's FHAZ camera at ${homePagePhoto.earthDate}`,
      });
    }).catch(() => {
      this.setState({
        imgSrc: angryLadyImage,
        message: 'Failed to get photo from rover',
      });
    });
  }

  render() {
    return (
      this.state.imgSrc ? (
        <div className="homepage-photo">
          <img src={this.state.imgSrc} alt="homepage mars" />
          <p>{this.state.message}</p>
        </div>
      ) : (
        <Loader />
      )
    );
  }
}
