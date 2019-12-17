import React from 'react';
import RoverButton from './RoverButton';
import './RoverNavbar.css';

export default function Navbar() {
  return (
    <ul className="rover-navbar">
      <li className="rover-box">
        <RoverButton roverName="curiosity" />
        <RoverButton roverName="Opportunity" />
        <RoverButton roverName="Spirit" />
      </li>
    </ul>
  );
}
