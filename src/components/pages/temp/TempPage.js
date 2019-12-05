import React from 'react';
import logo from '../../../assets/images/logo.svg';
import './TempPage.css';

export function TempPage(props) {
  return (
    <div>
      <div className="temp-banner">
        <img src={logo} className="logo" alt="logo" />
        <h2>Welcome to the {props.title} page</h2>
      </div>
      <p className="instructions">
        To get started, edit the {props.title}Page component
        in <code>src/components/pages/{props.title.toLowerCase()}</code>.
      </p>
    </div>
  );
}
