import React from "react";
import { Android, IOS, Web, Wear, TV, Hybrid } from "../../../constants";
import "./softwarePlatform.scss";
import { motion } from "framer-motion";
import Button from "../button/Button";

const SoftwarePlatform = () => {
  const softwarePlatforms = [
    {
      image: Web,
      title: "Web",
    },
    {
      image: IOS,
      title: "iOS",
    },
    {
      image: Android,
      title: "Android",
    },
    {
      image: Hybrid,
      title: "Hybrid",
    },
    {
      image: Wear,
      title: "Wearables",
    },
    {
      image: TV,
      title: "TV",
    },
  ];

  return (
    <motion.div
      className="softwarePlatform"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: -100 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="heading"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: -100, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Software for modern platforms</h2>
        <p>We develop applications for mobile, web, wearables, and TV.</p>
      </motion.div>
      <div className="softwarePlatform__list">
        {softwarePlatforms?.map((sp, index) => {
          return (
            <motion.div
              className="sp"
              key={sp.index}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: -100 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img src={sp?.image} />
              <span>{sp?.title}</span>
            </motion.div>
          );
        })}
      </div>
      <Button>
        See our tech stack
        <span>&rarr;</span>
      </Button>
    </motion.div>
  );
};

export default SoftwarePlatform;
