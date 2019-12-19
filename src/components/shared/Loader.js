import React from 'react';
import '../MarsApp.css';
import loaderSrc from '../../assets/images/loader.JPG';

export default function Loader() {
  return (
    <div className="loader-center">
      <img src={loaderSrc} alt="loader" width="100" height="100" />
    </div>
  );
}
