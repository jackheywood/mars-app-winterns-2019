import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/photos">Photos</Link>
      </li>
      <li>
        <Link to="/weather">Weather</Link>
      </li>
    </ul>
  );
}
