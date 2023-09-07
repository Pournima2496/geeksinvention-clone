import React from "react";
import { clients } from "../../../data";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Card from "../card/Card";
import "./clients.scss";

const Clients = () => {
  return (
    <ContentWrapper>
      <div className="clients">
        <div className="heading">
          <h3>Recent clients</h3>
          <p>
            We worked with the Fortune 500 companies in the USA, Africa, UK,
            Middle East World's 4th Strongest Banking Brand, Automobile & IoT
            industries
          </p>
        </div>
        <div className="cards">
          {clients.map((client) => {
            return (
              <Card className="card" key={client.title}>
              <img src={client.image} alt="" />
                <h4>{client.title}</h4>
                <p>{client.desc}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Clients;
