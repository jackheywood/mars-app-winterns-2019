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
        <Link to="/Photos">Photos</Link>
      </li>
      <li>
        <Link to="/Weather">Weather</Link>
      </li>
    </ul>
  );
}
