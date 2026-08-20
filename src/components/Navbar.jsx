import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src="/logo.jpg" alt="PrismLogic Logo" className="logo-img" />
          Prism<span className="logo-highlight">Logic</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Automations</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-actions">
          <button className="btn btn-primary" onClick={onOpenContact}>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
