import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <SideBar>
      <StyledNavLink to='/'>Home</StyledNavLink>
      <StyledNavLink to='/movies'>Movies</StyledNavLink>
    </SideBar>
  );
};

const SideBar = styled.nav`
  background-color: tomato;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  border-bottom: 2px solid black;
  display: flex;
  gap: 25px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  /* height: 20px; */
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: black;

  &.active {
    background-color: black;
    color: tomato;
  }

  &:hover:not(.active) {
    background-color: lightblue;
    color: tomato;
  }
`;

export default Navbar;
