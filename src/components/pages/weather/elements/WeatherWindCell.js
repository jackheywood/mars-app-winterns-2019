import React, { Component } from 'react';
import {
  compassN,
  compassNNE,
  compassNE,
  compassENE,
  compassE,
  compassESE,
  compassSE,
  compassSSE,
  compassS,
  compassSSW,
  compassSW,
  compassWSW,
  compassW,
  compassWNW,
  compassNW,
  compassNNW,
} from '../../../../enums/compasses';


export default class WeatherWindCell extends Component {
  render() {
    const averageWind = this.props.dayWindData.avg.toFixed(3);
    const maxWind = this.props.dayWindData.max.toFixed(3);
    const minWind = this.props.dayWindData.min.toFixed(3);
    const directionWind = this.props.dayWindData.dir;
    const IMGARRAY = { N: compassN, NNE: compassNNE, NE: compassNE, ENE: compassENE, E: compassE, ESE: compassESE, SE: compassSE, SSE: compassSSE, S: compassS, SSW: compassSSW, SW: compassSW, WSW: compassWSW, W: compassW, WNW: compassWNW, NW: compassNW, NNW: compassNNW };
    const compassImg = IMGARRAY[directionWind];

    return (
      <div className="wind-cell">
        <h4>{averageWind} m/s</h4>
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
