import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../MarsApp.css';

export default class HomepageButton extends Component {
  render() {
    return (
      <Link to={this.props.buttonLink} className="page-nav-button">{this.props.message}</Link>
    );
  }
}
