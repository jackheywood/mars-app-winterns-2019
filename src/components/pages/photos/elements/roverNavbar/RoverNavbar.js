import React from 'react';
import RoverButton from './RoverButton';
import './RoverNavbar.css';

export default function RoverNavbar() {
  return (
    <div className="rover-navbar">
      <RoverButton roverName="Curiosity" />
      <RoverButton roverName="Opportunity" />
      <RoverButton roverName="Spirit" />
    </div>
  );
}
