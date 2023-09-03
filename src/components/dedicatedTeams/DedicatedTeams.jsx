import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Agile, DeepTech, PC, Regrep, Scale, TimeTrack } from "../../../constants";
import "./dedicatedTeam.scss"

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
    <ContentWrapper>
      <div className="heading">
        <h2>Only dedicated teams</h2>
        <p>
          Our team is 100% concentrated on your project and you have full
          control over management of the dedicated team members.
        </p>
      </div>
      {dedicatedTeams.map((team) => {
        return (
          <div className="" key={team.title}>
          <img src={team.image} alt="" />
            <span>{team.title}</span>
          </div>
        );
      })}
    </ContentWrapper>
  );
};

export default DedicatedTeams;
