import React from "react";
import { Android, IOS, Web, Wear, TV, Hybrid } from "../../../constants";
import "./softwarePlatform.scss";
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
    <div className="softwarePlatform">
      <div className="heading">
        <h2>Software for modern platforms</h2>
        <p>We develop applications for mobile, web, wearables, and TV.</p>
      </div>
      <div className="softwarePlatform__list">
        {softwarePlatforms?.map((sp) => {
          return (
            <div className="sp" key={sp.title}>
              <img src={sp?.image} />
              <span>{sp?.title}</span>
            </div>
          );
        })}
      </div>
      <Button>
        See our tech stack
        <span>&rarr;</span>
      </Button>
    </div>
  );
};

export default SoftwarePlatform;
