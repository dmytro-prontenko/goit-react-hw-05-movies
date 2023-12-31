//"API Key - aa52440038ee3147b8058c354c3c644b"
//'API Read Access Token - eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTUyNDQwMDM4ZWUzMTQ3YjgwNThjMzU0YzNjNjQ0YiIsInN1YiI6IjY1MGJlYzJkNTFhNjRlMDBhZTkyMzQzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AJ_zp6DR9K5ismwD3ydueoGBrDLI6kRectbe6vKq57A'

import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Homepage from 'pages/Homepage';
// import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
// import Movie from 'pages/Movie';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';
import { lazy } from 'react';

const Movies = lazy(() => import('pages/Movies.jsx'));
const Movie = lazy(() => import('pages/Movie'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
