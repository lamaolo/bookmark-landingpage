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
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-3">
            <figure>
              <img src={logo} alt="Logo Bookmark" />
            </figure>
          </div>

          <div className="col-4">
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

          <Socials className="col-5">
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
  );
};

export default Footer;
