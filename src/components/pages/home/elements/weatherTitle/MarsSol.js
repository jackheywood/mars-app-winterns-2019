import React, { Component } from 'react';

export default class MarsSol extends Component {
  render() {
    return (
      <div className="mars-sol">
        <h3>Sol {this.props.marsSol}</h3>
      </div>
    );
  }
}
