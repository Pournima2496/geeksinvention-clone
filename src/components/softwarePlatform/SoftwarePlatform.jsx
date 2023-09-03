import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Android, IOS, Web, Wear, TV, Hybrid } from "../../../constants";
import "./softwarePlatform.scss"

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
    <ContentWrapper>
      <div className="heading">
        <h2>Software for modern platforms</h2>
        <p>We develop applications for mobile, web, wearables, and TV.</p>
      </div>
      {softwarePlatforms.map((sp) => {
        return (
          <div className="sp" key={sp.title}>
            <img src={sp.image} />
            <span>{sp.title}</span>
          </div>
        );
      })}
    </ContentWrapper>
  );
};

export default SoftwarePlatform;
