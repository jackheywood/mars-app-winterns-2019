import React, { Component } from 'react';
import springImage from '../../../../assets/images/spring.webp';
import summerImage from '../../../../assets/images/summer.jpg';
import autumnImage from '../../../../assets/images/autumn.jpg';
import winterImage from '../../../../assets/images/winter.jpg';

export default class WeatherHeadingCell extends Component {
  render() {
    const season = this.props.season || null;
    const date = new Date(this.props.earthDate);

    const imageSrcs = {
      spring: springImage,
      summer: summerImage,
      autumn: autumnImage,
      winter: winterImage,
    };
    const imgSrc = season ? imageSrcs[season] : null;

    return (this.props.earthDate ? (
      <div className="weather-cell">
        <h4>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</h4>
        <p>({season})</p>
        <img src={imgSrc} alt="season" />
      </div>
    ) : (
      <div className="weather-cell">
        <h4>unknown date</h4>
        <p>({season})</p>
      </div>
    ));
  }
}
