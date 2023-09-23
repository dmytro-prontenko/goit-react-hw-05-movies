import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation } from 'react-router-dom';

const Homepage = () => {
  const URL =
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b';
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getTrending = async () => {
      setLoading(true);
      try {
        const {
          data: { results },
        } = await axios.get(URL);
        setTrending(results);
      } catch (error) {
        setTrending([]);
        setLoading(false);
        toast.error('Something went wrong. Please, try again');
      } finally {
        setLoading(false);
      }
    };

    getTrending();
  }, []);

  const trendList = trending.map(({ id, original_title }) => {
    return (
      <Link state={{ from: location }} to={`/movies/${id}`} key={id} id={id}>
        {original_title}
      </Link>
    );
  });

  return (
    <>
      <TrendTitle>What's trending today</TrendTitle>
      {loading && <h3>Loading</h3>}
      <TrendList>{trendList}</TrendList>
    </>
  );
};

export const TrendList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 30px 50px;
  padding: 0;

  font-family: 'Poppins', sans-serif;
`;

export const TrendItem = styled(Link)`
  list-style: inherit;
  font-size: 1.2rem;
  color: #023047;
`;

export const TrendTitle = styled.h2`
  margin: 40px 50px;
`;

export default Homepage;
