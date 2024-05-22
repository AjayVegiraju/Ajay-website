import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo" href="">AV</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
