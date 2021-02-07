import React from "react";
import styled from "styled-components";

import logo from "../static/images/logo-bookmark.png";
import iconClose from "../static/images/icon-close.svg";
import fbIcon from "../static/images/icon-facebook.svg";
import twIcon from "../static/images/icon-twitter.svg";

const MenuWrapper = styled.div`
  padding: 60px 40px 40px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgba(28, 32, 57, 0.95);
  z-index: 10000000;
`;

const Nav = styled.nav`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 20px 0;
  background: none;
  outline: none;
  border-right: none;
  border-left: none;
  border-top: 1px solid rgba(128, 128, 128, 0.603);
  border-bottom: 1px solid rgba(128, 128, 128, 0.603);

  &:nth-child(2) {
    border-bottom: none;
    border-top: none;
  }

  & a {
    display: block;
    font-family: "Rubik", sans-serif;
    text-transform: uppercase;
    font-size: 2.2rem;
    font-weight: 500;
    color: #ffffff;
    text-decoration: none;
    transition: all 0.15s ease-in-out;
    letter-spacing: 3px;
    &:hover {
      color: hsl(0, 94%, 66%);
    }
  }
`;

const LoginButton = styled.button`
  width: 100%;
  margin-top: 25px;
  padding: 8px;
  border: 2px solid white;
  outline: none;
  background: none;
  border-radius: 8px;
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: white;
`;

const ResponsiveMenu = ({ setShowMenu }) => {
  return (
    <MenuWrapper>
      <div className="top" style={{ width: "100%" }}>
        <header className="d-flex justify-content-between">
          <img src={logo} alt="Logo bookmark" />
          <button onClick={() => setShowMenu(false)} className="unstyled-btn">
            <img src={iconClose} alt="Close menu" />
          </button>
        </header>
        <Nav>
          <Button>
            <a href="/#">Features</a>
          </Button>
          <Button>
            <a href="/#">Pricing</a>
          </Button>
          <Button>
            <a href="/#">Contact</a>
          </Button>
          <LoginButton>Login</LoginButton>
        </Nav>
      </div>
      <div className="bottom">
        <a className="mx-5" href="/#">
          <img src={fbIcon} alt="Facebook" />
        </a>
        <a className="mx-5" href="/#">
          <img src={twIcon} alt="Twitter" />
        </a>
      </div>
    </MenuWrapper>
  );
};

export default ResponsiveMenu;
