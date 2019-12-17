import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/logo.svg';

export default class PhotoBlock extends Component {
  render() {
    return (
      <div className="photo_block">
        <img src={logo} className="logo" alt="logo" />
        <Link to="/photos"> See more photos</Link>
      </div>
    );
  }
}
