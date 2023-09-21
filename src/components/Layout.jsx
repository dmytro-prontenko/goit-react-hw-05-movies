import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Navbar />
      <WrapperOutlet>
        <Outlet />
      </WrapperOutlet>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  /* background-color: #8ECAE6; */
  color: #023047;
  min-height: 100wh;
`;

const WrapperOutlet = styled.div``;

export default Layout;
