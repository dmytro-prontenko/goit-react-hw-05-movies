import Loader from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCast } from 'services/api';
import styled from 'styled-components';
import defImg from '../img/noun-not-found-poster.svg';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const getCastList = async () => {
      setLoading(true);
      try {
        getCast(id).then(resp => setCredits(resp));
      } catch (error) {
        setCredits([]);
        setLoading(false);
        toast.error('Something went wrong. Please, try again');
      } finally {
        setLoading(false);
      }
    };

    getCastList();
  }, [id]);

  const casts = credits.map(credit => {
    return (
      <li key={credit.cast_id}>
        <img
          src={
            credit.profile_path
              ? `https://image.tmdb.org/t/p/w185${credit.profile_path}`
              : defImg
          }
          alt={credit.name}
          width="185"
        ></img>
        <h4>{credit.name}</h4>
        <p>{credit.character}</p>
      </li>
    );
  });

  return (
    <>
      {loading && <Loader />}
      <StyledList>
        {!casts.length ? <p>Unfortunately there are no information</p> : casts}
      </StyledList>
      ;
    </>
  );
};

const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  place-items: center;
  margin: 0 auto;
  margin-top: 40px;
  padding: 0;
`;

export default Cast;
