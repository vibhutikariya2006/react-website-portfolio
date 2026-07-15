import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <div className="logo-circle">VK</div>
        <h2>Vibhuti Karia</h2>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Button */}
      <button className="hire-btn">
        Hire Me →
      </button>
    </nav>
  );
}

export default Navbar;