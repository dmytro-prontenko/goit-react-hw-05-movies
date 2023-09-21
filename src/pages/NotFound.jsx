import React from 'react';
import styled from 'styled-components';
import img from '../img/404.jpeg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Wrapper>
      <StyledNotFoundIMG src={img} alt="Oops! Page not found" />
      <p>Go to <Link to='/'>Homepage</Link></p>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 85vh;
  `;

export const StyledNotFoundIMG = styled.img`
width:30vw;
  /* object-fit: contain; */
  /* min-height: 85vh; */
`;

export default NotFound;
