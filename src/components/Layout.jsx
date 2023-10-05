import React, { Suspense } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Loader from './Loader';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Navbar />
      <WrapperOutlet>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </WrapperOutlet>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  color: #023047;
`;

const WrapperOutlet = styled.div``;

export default Layout;
