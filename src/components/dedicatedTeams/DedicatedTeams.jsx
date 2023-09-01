import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const DedicatedTeams = () => {
  const dedicatedTeams = [
    {
      image: "image",
      title: "Agile approach",
    },
    {
      image: "image",
      title: "Deep tech expertise",
    },
    {
      image: "image",
      title: "Personal commitment",
    },
    {
      image: "image",
      title: "Regular reporting",
    },
    {
      image: "image",
      title: "Time tracking",
    },
    {
      image: "image",
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
            <span>{team.title}</span>
          </div>
        );
      })}
    </ContentWrapper>
  );
};

export default DedicatedTeams;
