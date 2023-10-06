import Loader from 'components/Loader';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovies } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const onSubmit = async data => {
    setSearchParams({ query: data.queryStr });
  };
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return
      const getMoviesList = async () => {
        setLoading(true);
        try {
          getMovies(query).then(resp => setMovies(resp))
        } catch (error) {
          setMovies([]);
          setLoading(false);
          toast.error('Something went wrong. Please, try again');
        } finally {
          setLoading(false);
        }
      };

      getMoviesList();
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
      {loading && <Loader />}
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
