import React from "react";
import styled from "styled-components";
import logo from "../static/images/logo-bookmark.svg";

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
    font-size: 1.5rem;
    font-weight: 500;
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
  return (
    <HeaderWrapper className="container">
      <figure className="Logo">
        <img src={logo} alt="Logo de Bookmark" />
      </figure>
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
    </HeaderWrapper>
  );
};

export default Header;
