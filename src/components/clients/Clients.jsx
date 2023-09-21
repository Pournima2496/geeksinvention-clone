import React from "react";
import { clients } from "../../../data";
import "./clients.scss";
import { motion } from "framer-motion";
import Image from "../lazy loading/Image";

const Clients = () => {
  return (
    <motion.div
      className="clients"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: -100 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="heading"
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: -100, opacity: 1 }}
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
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: -100 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* <img  alt="" /> */}
              <Image src={client.image} />
              <h4>{client.title}</h4>
              <p>{client.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Clients;
