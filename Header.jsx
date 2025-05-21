import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to import the CSS

function Header() {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/registration", text: "Registration" },
    { to: "/login", text: "Login" },
    { to: "/contact", text: "Contact" },
    { to: "/about", text: "About" }
  ];

  return (
    <header className="header">
      <h1 className="site-title">Student Management System</h1>
      <nav className="nav-container">
        <div className="nav-links">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.to} className="nav-button">
              {link.text}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
