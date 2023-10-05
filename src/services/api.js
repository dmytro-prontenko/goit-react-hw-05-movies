import axios from 'axios';

export const getMoviesByQuery = async query => {
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1&api_key=aa52440038ee3147b8058c354c3c644b`
  );
  return results;
};

