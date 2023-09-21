import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b`);
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
      <button type="button">🔙</button>
      Movie #{id};
      {loading && <h3>Loading</h3>}
      {!loading && <StyledMovieCard>
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
        <div className="info">
          <h2>
            {movie.original_title} {`(${movie.release_date?.slice(0,4)})`}
          </h2>
          <p>User score: {}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres?.map(genre => genre.name).join(', ')}</p>
        </div>
      </StyledMovieCard>}
    </>
  );
};

export const StyledMovieCard = styled.div`
  display: flex;
  gap: 25px;
  margin: 20px 30px;
`;

export default Movie;

/* reviews - https://api.themoviedb.org/3/movie/346698/reviews?language=en-US&page=1&api_key=aa52440038ee3147b8058c354c3c644b */
/* credits - https://api.themoviedb.org/3/movie/346698/credits?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b */
/* details - https://api.themoviedb.org/3/movie/346698?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b */
