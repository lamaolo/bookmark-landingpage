import React, { useState } from "react";
import styled from "styled-components";

import ResponsiveMenu from "./ResponsiveMenu";

import logo from "../static/images/logo-bookmark.svg";
import hamburgerIcon from "../static/images/icon-hamburger.svg";

const HeaderWrapper = styled.header`
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled.li`
  & a {
    display: block;
    font-family: "Rubik", sans-serif;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 2px;
    color: hsl(229, 31%, 21%);
    text-decoration: none;
    transition: all 0.15s ease-in-out;
    &:hover {
      color: hsl(0, 94%, 66%);
    }
  }
`;

const Button = styled.button`
  font-family: "Rubik", sans-serif;
  text-transform: uppercase;
  font-size: 1.5rem;
`;

const Anchor = styled.a`
  margin-right: 30px;
`;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HeaderWrapper className="container">
      {showMenu === false && (
        <figure className="Logo">
          <img src={logo} alt="Logo de Bookmark" />
        </figure>
      )}
      <nav className="Menu d-flex">
        <Nav>
          <MenuItem>
            <Anchor href="/#">Features</Anchor>
          </MenuItem>
          <MenuItem>
            <Anchor href="/#">Pricing</Anchor>
          </MenuItem>
          <MenuItem>
            <Anchor href="/#">Contact</Anchor>
          </MenuItem>
        </Nav>
        <Button className="btn red" href="/#">
          Login
        </Button>
      </nav>
      {showMenu === false && (
        <button
          className="hamburgerButton unstyled-btn"
          style={{ border: "none", background: "none" }}
          onClick={() => setShowMenu(true)}
        >
          <img src={hamburgerIcon} alt="Open menu" />
        </button>
      )}
      {showMenu === true && <ResponsiveMenu setShowMenu={setShowMenu} />}
    </HeaderWrapper>
  );
};

export default Header;
