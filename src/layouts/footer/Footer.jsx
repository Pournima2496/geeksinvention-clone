import React from "react";
import Button from "../../components/button/Button";
import "./footer.scss";
// import { Link } from "react-router-dom";
const Footer = () => {
  const links = [
    "works",
    "technologies",
    "services",
    "company",
    "contacts",
    "terms and conditions",
    "privacy policy",
  ];
  return (
    <footer>
      <div className="footer">
        <div className="heading top">
          <h2>Get to know us better!</h2>
          <p>
            It is a pleasure to have you on our website. Let us know if there's
            an opportunity to do something together.
          </p>
          <Button>Drop a message</Button>
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <div className="left">
              <h1>
                Geeks <span> Invention</span>{" "}
              </h1>
              <span>
                447 Broadway, 2nd Floor Suite #772, <br /> New York 10013,
                United States <br />
                +1-347-535-0004
              </span>
            </div>
            <ul className="middle">
              {links.map((link) => {
                return (
                  <li key={link}>{link}
                    {/* <Link to="">{link}</Link> */}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="bottom-right">
            <Button className="right">Stay tuned for our updates</Button>
          </div>
        </div>
        <div className="copyright">
          © Copyright 2023 – Mobile App Design and Development Company. All
          Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
