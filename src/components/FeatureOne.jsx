import React from "react";
import styled from "styled-components";

import ImgTab from "../static/images/illustration-features-tab-1.svg";

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
    bottom: -70px;
    z-index: -10;
  }
  @media screen and (max-width: 767px) {
    &::before {
      top: 15px;
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
              style={{ maxWidth: "420px", margin: "0 auto" }}
              className="text-center"
            >
              <img
                style={{ width: "100%" }}
                src={ImgTab}
                alt="Feature 1 illustration"
              />
            </figure>
          </div>
          <div
            style={{ marginTop: "50px" }}
            className="col-12 col-md-6 mt-md-0 text-center text-md-start"
          >
            <h2 className="subtitulo mb-0">Bookmark in one click</h2>
            <p className="parrafo my-4">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <button className="btn blue">More Info</button>
          </div>
        </div>
      </div>
    </TabContent>
  );
};

export default FeatureOne;
