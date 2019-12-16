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
        <Link to="/Photos">Photos</Link>
      </li>
      <li>
        <Link to="/Weather">Weather</Link>
      </li>
    </ul>
  );
}
