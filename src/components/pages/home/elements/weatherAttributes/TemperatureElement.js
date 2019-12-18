import React, { Component } from 'react';

export default class TemperatureElement extends Component {
  render() {
    return (
      <div className="temperature-element">
        <h2>Temperature</h2>
        <h5>Avg: {`${this.props.temp.avg}\u2103`} </h5>
        <h5>Max: {`${this.props.temp.max}\u2103`} </h5>
        <h5>Min: {`${this.props.temp.min}\u2103`} </h5>
      </div>
    );
  }
}
