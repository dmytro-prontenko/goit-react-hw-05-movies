import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const onSubmit = async data => {
    setSearchParams(data.queryStr && { query: data.queryStr });
  };
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      const getMovies = async () => {
        setLoading(true);
        try {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1&api_key=aa52440038ee3147b8058c354c3c644b`
          );
          console.log(data)
          setMovies(data.results);
        } catch (error) {
          setMovies([]);
          setLoading(false);
          toast.error('Something went wrong. Please, try again');
        } finally {
          setLoading(false);
        }
      };

      getMovies();
    }
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('queryStr')} //, { required: true, minLength: 3 })}
          type="text"
        />
        <button>Search</button>
      </SearchForm>
      <MoviesList>
        {movies?.map(movie => {
          return (
            <Link
              state={{ from: location }}
              to={`/movies/${movie.id}`}
              key={movie.id}
            >
              {movie.title} (
              {movie.release_date ? movie.release_date.slice(0, 4) : 'unknown'})
            </Link>
          );
        })}
      </MoviesList>
    </>
  );
};

export default Movies;

export const MoviesList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 30px 50px;
  padding: 0;

  font-family: 'Poppins', sans-serif;
`;

export const StyledLink = styled(Link)`
  list-style: decimal;
`;
export const SearchForm = styled.form`
  margin: 20px 0 0 25px;
  display: flex;
  gap: 10px;
`;
