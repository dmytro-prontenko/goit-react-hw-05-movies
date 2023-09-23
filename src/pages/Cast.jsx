import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import defImg from '../img/noun-not-found-poster.svg'
/* credits - https://api.themoviedb.org/3/movie/346698/credits?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b */

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);
      try {
        const {
          data: { cast },
        } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b`
        );
        setCredits(cast.slice(0, 8));
      } catch (error) {
        setCredits([]);
        setLoading(false);
        toast.error('Something went wrong. Please, try again');
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [id]);

  const casts = credits.map(credit => {
    return (
      <li key={credit.cast_id}>
        <img src={
                  credit.profile_path
                    ? `https://image.tmdb.org/t/p/w185${credit.profile_path}`
                    : defImg
                } alt={credit.name} width="185"></img>
        <h4>{credit.name}</h4>
        <p>{credit.character}</p>
      </li>
    );
  });

  return <ul>
    { casts }
  </ul>;
};

export default Cast;
