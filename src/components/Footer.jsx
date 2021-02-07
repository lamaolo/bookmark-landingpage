import React from "react";
import styled from "styled-components";

import logo from "../static/images/logo-bookmark.png";
import fbIcon from "../static/images/icon-facebook.svg";
import twIcon from "../static/images/icon-twitter.svg";

const FooterWrapper = styled.footer`
  background: #1c2039;
  padding: 35px 0;
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
  & li a {
    margin-right: 30px;
    font-family: "Rubik", sans-serif;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 500;
    color: white;
    text-decoration: none;
    transition: all 0.15s ease-in-out;
    &:hover {
      color: hsl(0, 94%, 66%);
    }
  }

  @media screen and (max-width: 769px) {
    text-align: center;
    display: block;
    & li {
      margin: 10px auto;
      & a {
        margin: 0;
      }
    }
  }
`;

const Socials = styled.div`
  text-align: right;
  & a {
    margin-left: 30px;
    transition: all 0.15s ease-in-out;
    filter: none;
    &:hover {
      // Filtros usados para cambiar el color de la imagen solo usando CSS.
      // Visitar: https://codepen.io/sosuke/pen/Pjoqqp
      filter: invert(51%) sepia(42%) saturate(4227%) hue-rotate(327deg)
        brightness(97%) contrast(101%);
    }
  }

  @media screen and (max-width: 769px) {
    & a {
      margin: 0 10px;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12 col-md-3 text-center text-md-left">
              <figure>
                <img src={logo} alt="Logo Bookmark" />
              </figure>
            </div>

            <div className="col-12 col-md-5 my-5 my-md-0 d-flex justify-content-center">
              <nav>
                <Nav>
                  <li>
                    <a href="/#">Features</a>
                  </li>
                  <li>
                    <a href="/#">Pricing</a>
                  </li>
                  <li>
                    <a href="/#">Contact</a>
                  </li>
                </Nav>
              </nav>
            </div>

            <Socials className="col-12 col-md-4 text-center text-md-right">
              <a href="/#">
                <img src={fbIcon} alt="Facebook icon" />
              </a>
              <a href="/#">
                <img src={twIcon} alt="Twitter icon" />
              </a>
            </Socials>
          </div>
        </div>
      </FooterWrapper>
      <p
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "1.4rem",
          margin: "0",
          padding: "8px 0",
        }}
      >
        Challenge by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158"
        >
          FrontendMentor
        </a>
        . Coded by{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/lamaolo">
          Lucero Amaolo
        </a>
        .
      </p>
    </>
  );
};

export default Footer;
