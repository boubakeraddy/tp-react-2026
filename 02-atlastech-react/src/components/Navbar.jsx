import React from "react";
function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-brand">
        <span className="brand-badge">AT</span>
        <span className="brand-name">AtlasTech Innovations</span>
      </div>
      <nav className="navbar-links">
        <a href="#accueil" className="nav-link active">
          Accueil
        </a>
        <a href="#services" className="nav-link">
          Nos Services
        </a>
        <a href="#apropos" className="nav-link">
          À Propos
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>
      <div className="navbar-status">
        <span className="status-indicator"></span>
        <span className="status-label">Casablanca Hub : En Ligne</span>
      </div>
    </header>
  );
}
export default Navbar;
