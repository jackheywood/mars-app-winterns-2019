import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/images/nisa.JPG';

export default function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/"> <img className="logoimage" src={logo} alt="Nisa Logo" /></Link>
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
