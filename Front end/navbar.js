import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>🔋 EV Charging</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/stations">Stations</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
