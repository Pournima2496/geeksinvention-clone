import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const SoftwarePlatform = () => {
  const softwarePlatforms = [
    {
      image: "image",
      title: "Web",
    },
    {
      image: "image",
      title: "iOS",
    },
    {
      image: "image",
      title: "Android",
    },
    {
      image: "image",
      title: "Hybrid",
    },
    {
      image: "image",
      title: "Wearables",
    },
    {
      image: "image",
      title: "TV",
    },
  ];

  return (
    <ContentWrapper>
      <div className="heading">
        <h2>Software for modern platforms</h2>
        <p>We develop applications for mobile, web, wearables, and TV.</p>
      </div>
      {softwarePlatforms.map((sp) => {
        return (
          <div className="sp" key={sp.title}>
            <span>{sp.title}</span>
          </div>
        );
      })}
    </ContentWrapper>
  );
};

export default SoftwarePlatform;
