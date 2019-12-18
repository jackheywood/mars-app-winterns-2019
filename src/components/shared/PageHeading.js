import React, { Component } from 'react';
import '../MarsApp.css';

export default class PageHeading extends Component {
  render() {
    return (
      <h2 className="page-heading">{this.props.bannerName}</h2>
    );
  }
}
