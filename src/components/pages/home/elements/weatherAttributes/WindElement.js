import React, { Component } from 'react';

export default class WindElement extends Component {
  render() {
    return (
      <div className="windElement">
        <h2>Wind</h2>
        <h3>Avg: {this.props.Wind.avg} m/s</h3>
        <h3>Max: {this.props.Wind.max} m/s</h3>
        <h3>Min: {this.props.Wind.min} m/s</h3>
        <h3>Dir: {this.props.Wind.dir}</h3>
      </div>
    );
  }
}
