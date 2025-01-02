import React, { useState } from 'react';
    import './Header.css';
    import logo from './logo.svg'; // Verwijder deze regel

    function Header() {
      const [menuOpen, setMenuOpen] = useState(false);
      const [dropdownOpen, setDropdownOpen] = useState(false);

      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

      const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
      };

      return (
        <header>
          <div className="header-container">
            <div className="logo-container">
              <a href="/" className="logo-link">
                <span className="logo-text">MyWebSite.nl</span> {/* Logo vervangen door tekst */}
              </a>
            </div>
            <div className="search-container">
              <input type="text" placeholder="Zoek..." className="search-input" />
              <button className="search-button">Zoek</button>
            </div>
            <nav className={menuOpen ? 'nav-open' : ''}>
              <button className={`menu-toggle ${menuOpen ? 'menu-open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu">
                <span className="menu-icon">☰</span>
              </button>
              <ul>
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/about">Over</a></li>
                <li className="dropdown">
                  <a href="#" onClick={toggleDropdown} className={dropdownOpen ? 'dropdown-active' : ''}>
                    Vergelijkers <span className="dropdown-arrow">▼</span>
                  </a>
                  <ul className={`dropdown-menu ${dropdownOpen ? 'dropdown-open' : ''}`}>
                    <li><a href="/energie">Energie</a></li>
                    <li><a href="/tv-internet">TV & Internet</a></li>
                    <li><a href="/autoverzekering">Autoverzekering</a></li>
                    <li><a href="/zorgverzekering">Zorgverzekering</a></li>
                    <li><a href="/inboedelverzekering">Inboedelverzekering</a></li>
                  </ul>
                </li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
      );
    }

    export default Header;
