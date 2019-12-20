import React, { Component } from 'react';

export default class TemperatureElement extends Component {
  render() {
    return (
      <div className="temperature-element">
        <h2>Temperature</h2>
        <div>
          <h5>Avg: {`${this.props.temp.avg.toFixed(3)}\u2103`} </h5>
          <h5>Max: {`${this.props.temp.max.toFixed(3)}\u2103`} </h5>
          <h5>Min: {`${this.props.temp.min.toFixed(3)}\u2103`} </h5>
        </div>
      </div>
    );
  }
}
