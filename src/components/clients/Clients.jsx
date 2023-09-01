import React from "react";
import { clients } from "../../../data";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Card from "../card/Card";

const Clients = () => {
  return (
    <ContentWrapper>
      <div className="heading">
        <h2>Recent clients</h2>
        <p>
          We worked with the Fortune 500 companies in the USA, Africa, UK,
          Middle East World's 4th Strongest Banking Brand, Automobile & IoT
          industr
        </p>
      </div>
      {clients.map((client) => {
        return (
          <Card className="client" key={client.title} style={{padding:"10px"}}>
            <h4>{client.title}</h4>
            <p>{client.desc}</p>
          </Card>
        );
      })}
    </ContentWrapper>
  );
};

export default Clients;
