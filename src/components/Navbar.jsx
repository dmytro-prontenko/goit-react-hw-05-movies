import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavBar>
      <StyledNavLink to='/'>Home</StyledNavLink>
      <StyledNavLink to='/movies'>Movies</StyledNavLink>
    </NavBar>
  );
};

const NavBar = styled.nav`
  background-color: #023047;
  justify-content: flex-start;
  align-items: center;
  height: 8vh;
  display: flex;
  gap: 25px;
  padding-left:50px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: #FFB703;

  &.active {
    background-color: #FFB703;
    color: #023047;
  }

  &:hover:not(.active) {
    background-color: lightblue;
    color: #023047;
  }
`;

export default Navbar;
