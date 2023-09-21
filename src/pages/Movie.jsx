import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const Movie = () => {
  const { id } = useParams();
  // const URL = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b`;
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const defImg = '../img/noun-not-found-poster.svg';

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b`
        );
        setMovie(data);
      } catch (error) {
        setMovie([]);
        setLoading(false);
        toast.error('Something went wrong. Please, try again');
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [id]);

  return (
    <>
      <BackButton type="button">🔙</BackButton>
      {loading && <h3>Loading</h3>}
      {!loading && (
        <StyledMovieCard>
          <div>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                  : defImg
              }
              alt=""
            />
          </div>
          <StyledInfo>
            <Subtitle>
              {movie.original_title} {`(${movie.release_date?.slice(0, 4)})`}
            </Subtitle>
            <p>User score: {}</p>

            <Subtitle>Overview</Subtitle>
            <p>{movie.overview}</p>

            <Subtitle>Genres</Subtitle>
            <p>{movie.genres?.map(genre => genre.name).join(', ')}</p>

            <Additional>
            <Subtitle>Additional information</Subtitle>
              <NavLink>Cast</NavLink>
              <NavLink>Reviews</NavLink>
            </Additional>
          </StyledInfo>
        </StyledMovieCard>
      )}
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
  padding-left: 0;
  margin: 0;
`;

export default Movie;

/* reviews - https://api.themoviedb.org/3/movie/346698/reviews?language=en-US&page=1&api_key=aa52440038ee3147b8058c354c3c644b */
/* credits - https://api.themoviedb.org/3/movie/346698/credits?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b */
/* details - https://api.themoviedb.org/3/movie/346698?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b */
