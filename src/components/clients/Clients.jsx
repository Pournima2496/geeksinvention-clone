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
          <h2>Recent clients</h2>
          <p>
            We worked with the Fortune 500 companies in the USA, Africa, UK,
            Middle East World's 4th Strongest Banking Brand, Automobile & IoT
            industr
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
