import React from 'react';
import RoverButton from './RoverButton';
import './RoverNavbar.css';

export default function RoverNavbar(props) {
  return (
    <div className="rover-navbar">
      <RoverButton roverName="Curiosity" onClick={() => props.onClick('Curiosity')} />
      <RoverButton roverName="Opportunity" onClick={() => props.onClick('Opportunity')} />
      <RoverButton roverName="Spirit" onClick={() => props.onClick('Spirit')} />
    </div>
  );
}
