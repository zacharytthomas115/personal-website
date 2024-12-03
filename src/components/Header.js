import React from 'react';
import logo from './path-to-your-image.jpg'; // Adjust the path as needed

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <ul className="navbar-links">
        <li><a onClick={() => setCurrentScreen('Home')}>Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Header;