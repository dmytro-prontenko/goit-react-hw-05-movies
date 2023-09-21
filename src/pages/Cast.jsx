import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

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
        console.log(cast.slice(0, 8));
      } catch (error) {
        setCredits([]);
        setLoading(false);
        toast.error('Something went wrong. Please, try again');
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, []);
  return <div>Cast</div>;
};

export default Cast;
