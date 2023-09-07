import React, { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "works",
    },
    {
      name: "technologies",
    },
    {
      name: "services",
    },
    {
      name: "companies",
    },
    {
      name: "contact",
    },
  ];
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          <NavLink to="/">
            Geeks <span> Invention</span>{" "}
          </NavLink>
        </h1>
      </div>

      <ul
        className={!isMobile ? "nav-items" : "mobile-menu-items"}
        onClick={() => setIsMobile(true)}
      >
        {navItems.map((item, ind) => (
          <li
            className={`nav-links ${ind % 2 == 0 ? "left" : "right"}`}
            key={item}
          >
            <NavLink to="/">{item.name}</NavLink>
          </li>
        ))}
      </ul>
      <div className="menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {!isMobile ? <HiMenuAlt2 /> : <FaTimes />}
      </div>
    </div>
  );
};

export default Navbar;
