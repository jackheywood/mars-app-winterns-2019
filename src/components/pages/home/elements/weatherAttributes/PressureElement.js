import React, { Component } from 'react';

export default class PressureElement extends Component {
  render() {
    return (
      <div className="pressureElement">
        <h2>Pressure</h2>
        <h3>Avg: {this.props.Pressure.avg} Pa</h3>
        <h5>Max: {this.props.Pressure.max} Pa</h5>
        <h5>Min: {this.props.Pressure.min} Pa</h5>
      </div>
    );
  }
}
