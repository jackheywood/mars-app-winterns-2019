import React, { Component } from 'react';
import compassN from './compassPhotos/compassN.png';
import compassNNE from './compassPhotos/compassNNE.png';
import compassNE from './compassPhotos/compassNE.png';
import compassENE from './compassPhotos/compassENE.png';
import compassE from './compassPhotos/compassE.png';
import compassESE from './compassPhotos/compassESE.png';
import compassSE from './compassPhotos/compassSE.png';
import compassSSE from './compassPhotos/compassSSE.png';
import compassS from './compassPhotos/compassS.png';
import compassSSW from './compassPhotos/compassSSW.png';
import compassSW from './compassPhotos/compassSW.png';
import compassWSW from './compassPhotos/compassWSW.png';
import compassW from './compassPhotos/compassW.png';
import compassWNW from './compassPhotos/compassWNW.png';
import compassNW from './compassPhotos/compassNW.png';
import compassNNW from './compassPhotos/compassNNW.png';

export default class WeatherWindCell extends Component {
  render() {
    const averageWind = this.props.dayWindData.avg;
    const maxWind = this.props.dayWindData.max;
    const minWind = this.props.dayWindData.min;
    const directionWind = this.props.dayWindData.dir;
    const IMGARRAY = { N: compassN, NNE: compassNNE, NE: compassNE, ENE: compassENE, E: compassE, ESE: compassESE, SE: compassSE, SSE: compassSSE, S: compassS, SSW: compassSSW, SW: compassSW, WSW: compassWSW, W: compassW, WNW: compassWNW, NW: compassNW, NNW: compassNNW };
    // const compassImg = IMGARRAY.directionWind;
    const compassImg = IMGARRAY[directionWind];

    return (
      <div className="wind-cell">
        <h4>Wind Speed: {averageWind}</h4>
        <p>Max: {maxWind}</p>
        <p>Min: {minWind}</p>
        <p>
          {directionWind}
          <img src={compassImg} className="compass-photo" alt="compass" />
        </p>
      </div>
    );
  }
}
