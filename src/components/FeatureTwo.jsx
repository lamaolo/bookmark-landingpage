import React from "react";
import styled from "styled-components";

import ImgTab from "../static/images/illustration-features-tab-2.svg";

const TabContent = styled.div`
  margin: 50px 0;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 35%;
    height: 300px;
    border-radius: 0 1000px 1000px 0;
    background: #5266df;
    left: 0;
    bottom: -50px;
    z-index: -10;
  }
  @media screen and (max-width: 767px) {
    &::before {
      top: 70px;
      width: 75%;
      bottom: unset;
      height: 300px;
    }
  }
`;
const FeatureOne = () => {
  return (
    <TabContent>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 mb-5 mb-md-0">
            <figure
              style={{ maxWidth: "400px", margin: "0 auto" }}
              className="text-center"
            >
              <img
                style={{ width: "100%" }}
                src={ImgTab}
                alt="Feature 1 illustration"
              />
            </figure>
          </div>
          <div className="col-12 col-md-6 mt-5 mt-md-0 text-center text-md-start ">
            <h2 className="subtitulo mb-0">Intelligent search</h2>
            <p className="parrafo my-4">
              Our powerful search featuer will help you find saved sited in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <button className="btn blue">More Info</button>
          </div>
        </div>
      </div>
    </TabContent>
  );
};

export default FeatureOne;
