import React, { useState } from "react";
import "./navbar.scss";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navLinks = [
    "home",
    "works",
    "technologies",
    "services",
    "companies",
    "contact",
  ];

  return (
    <div className="navbar">
      <h1>
        Geeks <span>Invention</span>{" "}
      </h1>
      <nav>
        <ul className={isMobile ? "mobile-links" : "nav-links"}>
          {navLinks?.map((item, index) => (
            <li className={`nav-link ${index === 0 ? "active" : ""} `}>
              <Link>{item}</Link>
            </li>
          ))}
        </ul>
        <div className="menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FaTimes /> : <HiMenuAlt2 />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
