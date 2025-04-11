import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">My Personal Site</h1>
      <nav className="header-nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#intro">Intro</a></li>
          <li><a href="#skills">Skills/Portfolio</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;