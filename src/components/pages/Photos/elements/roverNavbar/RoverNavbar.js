import React from 'react';
import RoverButton from './RoverButton';
import './RoverNavbar.css';

export default function Navbar() {
  return (
    <ul className="rover-navbar">
      <li className="rover-box">
        <RoverButton />
      </li>
    </ul>
  );
}
