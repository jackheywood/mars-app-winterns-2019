import React, { Component } from 'react';
import WeatherErrorMessage from './WeatherErrorMessage';
import compassImages from '../../../../enums/compasses';

export default class WeatherWindCell extends Component {
  render() {
    const noDataMessageWeather = 'data unavailable';
    const averageWind = this.props.dayWindData.avg ? this.props.dayWindData.avg.toFixed(3) : noDataMessageWeather;
    const maxWind = this.props.dayWindData.max ? this.props.dayWindData.max.toFixed(3) : noDataMessageWeather;
    const minWind = this.props.dayWindData.min ? this.props.dayWindData.min.toFixed(3) : noDataMessageWeather;
    const directionWind = this.props.dayWindData.dir || noDataMessageWeather;
    const compassImg = this.props.dayWindData.dir ? compassImages[directionWind] : null;

    return ((this.props.dayWindData.avg || this.props.dayWindData.max || this.props.dayWindData.min || compassImg) ? (
      <div className="wind-cell">
        <h4>{averageWind} m/s</h4>
        <p>Max: {maxWind}</p>
        <p>Min: {minWind}</p>
        <p>
          {directionWind}
          <img src={compassImg} className="compass-photo" alt="compass" />
        </p>
      </div>
    ) : (
      <WeatherErrorMessage className="wind-cell" type="wind" />
    ));
  }
}
