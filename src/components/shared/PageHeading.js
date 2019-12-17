import React, { Component } from 'react';

export default class PageHeading extends Component {
  render() {
    return (
      <h2>{this.props.bannerName}</h2>
    );
  }
}