import React, { Component } from 'react';
import compassImages from '../../../../enums/compasses';

export default class WeatherWindCell extends Component {
  render() {
    const averageWind = this.props.dayWindData.avg.toFixed(3);
    const maxWind = this.props.dayWindData.max.toFixed(3);
    const minWind = this.props.dayWindData.min.toFixed(3);
    const directionWind = this.props.dayWindData.dir;
    const compassImg = compassImages[directionWind];

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
