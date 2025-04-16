import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Benjamin Edmiston</h1>
      <img src="https://avatars.githubusercontent.com/u/77869567?s=400&u=000e963c53758701e07014fa9bb810146f5887c7&v=4" alt="Benjamin Edmiston" className="header-avatar" />
      <ul className="header-description">
        <li> Web Designer </li>
        <li> Poo </li>
        <li> Wee </li>
      </ul>
    </header>
  );
}

export default Header;