import Loader from 'components/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovie } from 'services/api';
import styled from 'styled-components';
import defImg from '../img/noun-not-found-poster.svg';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  useEffect(() => {
    if (!id) return;
    const getMovieFromApi = async () => {
      setLoading(true);
      try {
        getMovie(id).then(resp => setMovie(resp));
      } catch (error) {
        setMovie([]);
        setLoading(false);
        toast.error('Something went wrong. Please, try again');
      } finally {
        setLoading(false);
      }
    };

    getMovieFromApi();
  }, [id]);

  return (
    <>
      {loading && <Loader />}
      <Link to={goBackRef.current} type="button">
        <BackButton>🔙</BackButton>
      </Link>
      {loading && <Loader />}
      <>
        <StyledMovieCard>
          <div>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                  : defImg
              }
              alt="movie.original_title"
              width="342"
            />
          </div>
          <StyledInfo>
            <Subtitle>
              {movie.original_title}{' '}
              {`(${
                movie.release_date ? movie.release_date.slice(0, 4) : 'unknown'
              })`}
            </Subtitle>
            <p>User score: {(movie.vote_average * 10).toFixed(2)}%</p>

            <Subtitle>Overview</Subtitle>
            <p>{movie.overview}</p>

            <Subtitle>Genres</Subtitle>
            <p>{movie.genres?.map(genre => genre.name).join(', ')}</p>
          </StyledInfo>
        </StyledMovieCard>
        <Additional>
          <Subtitle>Additional information</Subtitle>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </Additional>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    </>
  );
};

export const StyledMovieCard = styled.div`
  display: flex;
  gap: 25px;
  padding: 20px;
  /* margin: 20px px; */
`;

export const BackButton = styled.button`
  width: 50px;
  margin-top: 20px;
  margin-left: 20px;
`;

export const Subtitle = styled.h3`
  margin: 10px 0;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2.6%;
`;
export const Additional = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  margin: 0;
`;

export default Movie;

/* reviews - https://api.themoviedb.org/3/movie/346698/reviews?language=en-US&page=1&api_key=aa52440038ee3147b8058c354c3c644b */
/* credits - https://api.themoviedb.org/3/movie/346698/credits?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b */
/* details - https://api.themoviedb.org/3/movie/346698?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b */
