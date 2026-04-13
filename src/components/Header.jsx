import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header-container-new">
      <div className="header-left">
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <span className="logo-text">Keerthana</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="header-nav only-windows">
        <Link to="/#about" className="nav-link para-text">
          About
        </Link>
        <Link to="/#research" className="nav-link para-text">
          Research
        </Link>
         <Link to="/#awards" className="nav-link para-text">
          Awards
        </Link>
        <Link to="/#expertise" className="nav-link para-text">
          Expertise 
        </Link>
        <Link to="/#publications" className="nav-link para-text">
          Publications
        </Link>
        <Link to="/#cognitude" className="nav-link para-text">
          Cognitude 
        </Link>
        <Link to="/#parceldrop" className="nav-link para-text">
          Parcel Drop 
        </Link>
       
      </nav>

      <div className="header-right only-windows">
        <a href="tel:+919160594524" className="white-bg-btn">
          Lets connect
        </a>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="mobile-toggle only-mobile" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`mobile-nav-overlay only-mobile ${isMenuOpen ? "active" : ""}`}
      >
        <nav className="mobile-nav">
          <Link to="/#about" className="mobile-nav-link" onClick={closeMenu}>
            About
          </Link>
          <Link to="/#research" className="mobile-nav-link" onClick={closeMenu}>
            Research
          </Link>
            <Link to="/#awards" className="mobile-nav-link" onClick={closeMenu}>
            Awards
          </Link>
          <Link
            to="/#expertise"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Expertise
          </Link>
          <Link
            to="/#publications"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Publications
          </Link>
        
          <Link to="/#cognitude" className="mobile-nav-link" onClick={closeMenu}>
            Cognitude 
          </Link>
          <Link to="/#parceldrop" className="mobile-nav-link" onClick={closeMenu}>
            Parcel Drop 
          </Link>
          <a
            href="tel:+919160594524"
            className="white-bg-btn mobile-cta"
            onClick={closeMenu}
          >
            Lets connect
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
