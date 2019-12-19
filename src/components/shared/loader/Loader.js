import React from 'react';
import './loader.css';
import loaderImage from '../../../assets/images/loader.JPG';

export default function Loader() {
  return (
    <div className="loader-center">
      <img src={loaderImage} alt="loader" width="100" height="100" />
    </div>
  );
}
