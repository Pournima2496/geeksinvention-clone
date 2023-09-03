import React from "react";
import Button from "../../components/button/Button";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import "./footer.scss"
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
      <div>
        <h2>Get to know us better!</h2>
        <p>
          It is a pleasure to have you on our website. Let us know if there's an
          opportunity to do something together.
        </p>
      </div>
      <Button>Drop a message</Button>
      <ContentWrapper>
        <div>
          <h3>Geeks Invention</h3>
          <span>
            447 Broadway, 2nd Floor Suite #772, <br /> New York 10013, United
            States <br />
            +1-347-535-0004
          </span>
        </div>
        <ul>
          {links.map((link) => {
            return <li key={link}>{link}</li>;
          })}
        </ul>
      </ContentWrapper>
      <Button>Stay tuned for our updates</Button>
      <div>
        © Copyright 2023 – Mobile App Design and Development Company. All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;
