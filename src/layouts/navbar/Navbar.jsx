import React from "react";
import "./navbar.scss"


const Navbar = () => {
  const navItems = [
    "home",
    "works",
    "technologies",
    "services",
    "company",
    "contacts",
  ];
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Geeks Invention</h1>
      </div>
      <ul className="nav-items">
        {navItems.map((item) => (
          <li className="nav-links" key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
