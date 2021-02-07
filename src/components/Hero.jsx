import React from "react";
import styled from "styled-components";

import HeroImage from "../static/images/illustration-hero.svg";

const Main = styled.main`
  position: relative;
  /* overflow-x: hidden;
  overflow-y: visible; */
  &::before {
    content: "";
    position: absolute;
    width: 40%;
    height: 400px;
    border-radius: 1000px 0 0 1000px;
    background: #5266df;
    right: 0;
    bottom: -50px;
    z-index: -10;
  }

  @media screen and (max-width: 769px) {
    &::before {
      top: 70px;
      bottom: unset;
      height: 300px;
    }
    & h1 {
      font-size: 4rem;
    }
  }
`;

const H1 = styled.h1`
  font-size: 5rem;
  color: #20263e;
  line-height: 50px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 10px;
`;

const Hero = () => {
  return (
    <Main>
      <div className="container py-5">
        <div className="row d-flex align-items-center flex-column-reverse flex-md-row ">
          <div className="col-12 col-md-6 col-lg-5 pr-5">
            <H1 className="text-center text-md-start px-4 px-md-0">
              A Simple Bookmark Manager
            </H1>
            <p className="parrafo my-5 text-center text-md-start px-4 px-md-0">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="buttons d-flex justify-content-center justify-content-md-start">
              <Button className="btn blue">Get it on Chrome</Button>
              <Button className="btn gray">Get it on Firefox</Button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-7">
            <figure>
              <img
                style={{ width: "100%" }}
                src={HeroImage}
                alt="Imagen de un mockup de la aplicación"
              />
            </figure>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Hero;
