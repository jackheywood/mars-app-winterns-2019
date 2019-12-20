import React, { Component } from 'react';

export default class PressureElement extends Component {
  render() {
    return (
      <div className="pressure-element">
        <h2>Pressure</h2>
        <div>
          <h5>Avg: {this.props.pressure.avg.toFixed(3)} Pa</h5>
          <h5>Max: {this.props.pressure.max.toFixed(3)} Pa</h5>
          <h5>Min: {this.props.pressure.min.toFixed(3)} Pa</h5>
        </div>
      </div>
    );
  }
}
