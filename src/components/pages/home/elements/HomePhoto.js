import React, { Component } from 'react';
import getPhotos from '../../../../api/photoApiClient';

const defaultSrc = 'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02540/opgs/edr/fcam/FLB_622990123EDR_F0763002FHAZ00341M_.JPG';

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
      this.setState({
        imgSrc: response[0].cameras[0].photos[0].imgSrc,
        date: response[0].cameras[0].photos[0].earthDate,
      });
    });
  }

  render() {
    return (
      this.state.imgSrc ? (
        <div className="homepage-photo">
          <img src={this.state.imgSrc} alt="homepage mars" />
          <p>A photo taken by Curiosity`s FHAZ camera at {this.state.date}</p>
        </div>
      ) : (
        <div className="homepage-photo">
          <img src={defaultSrc} alt="default homepage mars" />
          <p>A photo taken by Curiosity`s FHAZ camera at 2019-09-28</p>
        </div>
      )
    );
  }
}
