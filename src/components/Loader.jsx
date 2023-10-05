import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledSpinner>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </StyledSpinner>
  );
};

const StyledSpinner = styled.div`
  display: grid;
  place-items: center;
  margin: 50px;
`;

export default Loader;
