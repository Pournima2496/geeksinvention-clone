import React from "react";
import Button from "../../components/button/Button";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

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
      <Button title="Stay tuned for our updates" />
      <div>
        © Copyright 2023 – Mobile App Design and Development Company. All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;
