import React, { useState } from "react";
import styled from "styled-components";

import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";
import FeatureThree from "./FeatureThree";

const InfoWrapper = styled.div`
  margin: 125px auto 50px;
  max-width: 600px;
  text-align: center;
`;

const TabButton = styled.button`
  padding: 15px 35px !important;
  font-size: 1.8rem;
  border: none;
  outline: none;
  background: none;
  border-bottom: 0.5px solid #dbdbdb;
  color: #93949b;
  box-shadow: 0 0 0;
  border-radius: 0;
  font-weight: 400;
  transition: all 0.1s ease-in-out;
  &.active {
    border-bottom: 4px solid #fa5856;
    color: #2b2e37;
  }
  &:focus {
    outline: none;
  }
`;

const Features = () => {
  const [showTab, setShowTab] = useState(1);

  const handleChangeTab = (n) => {
    setShowTab(n);
  };

  return (
    <section className="Features my-5">
      <InfoWrapper className="Features-info px-4 px-md-0">
        <h2 className="subtitulo mb-5">Features</h2>
        <p className="parrafo">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          then on the go.
        </p>
      </InfoWrapper>
      <div className="Features-tabs px-5 px-md-0 d-flex flex-column flex-md-row justify-content-center">
        <TabButton
          onClick={() => handleChangeTab(1)}
          className={showTab === 1 && "active"}
        >
          Simple Bookmarking
        </TabButton>
        <TabButton
          onClick={() => handleChangeTab(2)}
          className={showTab === 2 && "active"}
        >
          Speedy Searching
        </TabButton>
        <TabButton
          onClick={() => handleChangeTab(3)}
          className={showTab === 3 && "active"}
        >
          Easy Sharing
        </TabButton>
      </div>
      <div>
        {showTab === 1 && <FeatureOne />}
        {showTab === 2 && <FeatureTwo />}
        {showTab === 3 && <FeatureThree />}
      </div>
    </section>
  );
};

export default Features;
