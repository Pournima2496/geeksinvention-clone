import React from "react";
import { clients } from "../../../data";
import Card from "../card/Card";
import "./clients.scss";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <div className="clients">
      <motion.div
        className="heading"
        initial={{ y: 0 }}
        animate={{ y: -100 }}
        transition={{ duration: 1 }}
      >
        <h3>Recent clients</h3>
        <p>
          We worked with the Fortune 500 companies in the USA, Africa, UK,
          Middle East World's 4th Strongest Banking Brand, Automobile & IoT
          industries
        </p>
      </motion.div>
      <div className="cards">
        {clients.map((client, index) => {
          return (
            <motion.div
              className="card"
              key={client.index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: -100 }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
            >
              <img src={client.image} alt="" />
              <h4>{client.title}</h4>
              <p>{client.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
