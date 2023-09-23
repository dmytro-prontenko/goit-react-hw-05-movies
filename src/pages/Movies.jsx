import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMoviesByQuery } from 'services/api';
import styled from 'styled-components';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    setSearchParams(data.queryStr ? { query: data.queryStr } : {});
  };
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      getMoviesByQuery(query)
        .then(results => {
          setMovies(results);
        })
        .catch(error => {
          toast.error(error.message)
        });
    } else {
      setMovies([]);
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
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              {movie.title} ({movie.release_date ? movie.release_date.slice(0, 4):'unknown'})
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
  list-style:decimal;
`
export const SearchForm = styled.form`
  margin: 20px 0 0 25px;
  display: flex;
  gap: 10px;
`;
