import React from "react";
import styled from "styled-components";

import bgDecoration from "../static/images/bg-dots.svg";
import logoChrome from "../static/images/logo-chrome.svg";
import logoFirefox from "../static/images/logo-firefox.svg";
import logoOpera from "../static/images/logo-opera.svg";

const CardWrapper = styled.article`
  padding: 20px 5px;
  margin: 20px;
  height: 320px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

const BrowserDescription = styled.div`
  text-align: center;
  & h3 {
    font-weight: 600;
    color: #32323d;
  }

  & p {
    color: #aaabb0;
    font-size: 1.4rem;
    margin: 0;
  }
`;

const BrowserCard = ({ browserName, version, mt }) => {
  return (
    <CardWrapper style={{ marginTop: `${mt}px` }}>
      <img
        src={
          (browserName === "Chrome" && logoChrome) ||
          (browserName === "Opera" && logoOpera) ||
          (browserName === "Firefox" && logoFirefox)
        }
        alt={`Logo de ${browserName}`}
      />
      <BrowserDescription>
        <h3>Add to {browserName}</h3>
        <p>Minimum version {version}</p>
      </BrowserDescription>
      <span
        style={{
          width: "100%",
          height: "5px",
          background: `url(${bgDecoration}`,
        }}
      ></span>
      <button className="btn blue">Add & Install Extension</button>
    </CardWrapper>
  );
};

export default BrowserCard;
