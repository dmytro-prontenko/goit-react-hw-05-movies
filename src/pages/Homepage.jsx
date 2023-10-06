import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import Loader from 'components/Loader';
import { Link, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { getTrending } from 'services/api';

const Homepage = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getTrendMovies = async () => {
      setLoading(true);
      try {
        getTrending().then(resp => setTrending(resp));
      } catch (error) {
        setTrending([]);
        setLoading(false);
        toast.error('Something went wrong. Please, try again');
      } finally {
        setLoading(false);
      }
    };

    getTrendMovies();
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
      {loading && <Loader />}
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
