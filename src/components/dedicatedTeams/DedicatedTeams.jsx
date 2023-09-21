import React from "react";
import { motion } from "framer-motion";
import {
  Agile,
  DeepTech,
  PC,
  Regrep,
  Scale,
  TimeTrack,
} from "../../../constants";
import "./dedicatedTeam.scss";
import Button from "../button/Button";

const DedicatedTeams = () => {
  const dedicatedTeams = [
    {
      image: Agile,
      title: "Agile approach",
    },
    {
      image: DeepTech,
      title: "Deep tech expertise",
    },
    {
      image: PC,
      title: "Personal commitment",
    },
    {
      image: Regrep,
      title: "Regular reporting",
    },
    {
      image: TimeTrack,
      title: "Time tracking",
    },
    {
      image: Scale,
      title: "Scalability",
    },
  ];
  return (
    <motion.div
      className="dedicated-teams"
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
        <h2>Only dedicated teams</h2>
        <p>
          Our team is 100% concentrated on your project and you have full
          control over management of the dedicated team members.
        </p>
      </motion.div>
      <div className="teams">
        {dedicatedTeams?.map((team, index) => {
          return (
            <motion.div
              className="team"
              key={team.index}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: -100 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img src={team?.image} alt="" />
              <span>{team?.title}</span>
            </motion.div>
          );
        })}
      </div>
      <Button>
        See our services
        <span>&rarr;</span>
      </Button>
    </motion.div>
  );
};

export default DedicatedTeams;
