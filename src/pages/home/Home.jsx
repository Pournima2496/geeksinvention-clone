import React from "react";
import Button from "../../components/button/Button";
import Clients from "../../components/clients/Clients";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import SoftwarePlatform from "../../components/softwarePlatform/SoftwarePlatform";
import DedicatedTeams from "../../components/dedicatedTeams/DedicatedTeams";
import "./home.scss";
import WorkList from "../../components/workList/WorkList";

const Home = () => {
  return (
    <div>
    <WorkList />
      <ContentWrapper>
        <div className="info">
          <h2>Check out more works by Geeks Invention</h2>
          <p>
            Our case studies describe design and development solutions
            implemented at our Geeks Invention projects. The stories are a
            valuable resource for those looking to develop their own mobile
            apps.
          </p>
          <Button className="info-btn">See all case studies</Button>
        </div>
      </ContentWrapper>

      <Clients />
      <SoftwarePlatform />
      <DedicatedTeams />
    </div>
  );
};

export default Home;
