import React, { Component } from 'react';
import getPhotos from '../../../../api/photoApiClient';
const testsrc = 'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02540/opgs/edr/fcam/FLB_622990123EDR_F0763002FHAZ00341M_.JPG';

export default class HomePhoto extends Component {
  constructor() {
    super();
    this.state = { data: null };
  }

  componentDidMount() {
    getPhotos().then(response => {
      this.setState({
        data: response,
      });
    });
  }

  render() {
    return (
      this.state.data ? (
        <div>
          <img src={testsrc} className="homepage-photo" alt="homepage mars photo" />
        </div>
      ) : (
        <div />
      )
    );
  }
}
