import React, { Component } from 'react';

export default class TemperatureElement extends Component {
  render() {
    return (
      <div className="temperatureElement">
        <h2>Temperature</h2>
        <h3>Avg: {this.props.Temp.avg} {'\u2103'} </h3>
        <h5>Max: {this.props.Temp.max} {'\u2103'} </h5>
        <h5>Min: {this.props.Temp.min} {'\u2103'} </h5>
      </div>
    );
  }
}
