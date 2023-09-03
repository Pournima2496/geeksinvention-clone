import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

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
        <h1>Geeks <span> Invention</span> </h1>
      </div>
      <ul className="nav-items">
        {navItems.map((item) => (
          <li className="nav-links" key={item}>
            <NavLink to="/">{item}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
