import React, { Component } from 'react';

export default class MarsSeason extends Component {
  render() {
    return (
      <div className="mars-season">
        <h3>{this.props.marsSeason}</h3>
      </div>
    );
  }
}
