import axios from 'axios';

export const getMoviesByQuery = async query => {
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1&api_key=aa52440038ee3147b8058c354c3c644b`
  );
  return results;
};

export const getTrending = async () => {
  const URL =
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b';

  const {
    data: { results },
  } = await axios.get(URL);
  return results;
};

export const getMovies = async query => {
  const URL = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1&api_key=aa52440038ee3147b8058c354c3c644b`;

  const {
    data: { results },
  } = await axios.get(URL);

  return results;
};

export const getMovie = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b`;


  const {
    data,
  } = await axios.get(URL);

  return data;
};

export const getCast = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b`;

  const {
    data: { cast },
  } = await axios.get(URL);

  return cast.slice(0, 8);
};

export const getReviews = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b`;

  const {
    data: { results },
  } = await axios.get(URL);

  return results;
};
