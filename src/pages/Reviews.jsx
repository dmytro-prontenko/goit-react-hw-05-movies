import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import defImg from '../img/noun-not-found-poster.svg';
import Loader from 'components/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&api_key=aa52440038ee3147b8058c354c3c644b`
        );
        setReviews(data.results);
      } catch (error) {
        setReviews([]);
        setLoading(false);
        toast.error('Something went wrong. Please, try again');
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [id]);

  const reviewsList = reviews.map(review => {
    return (
      <StyledCard key={review.id}>
        <StyledReviewHeader>
          <img
            src={
              review.author_details.avatar_path
                ? `https://image.tmdb.org/t/p/w45${review.author_details.avatar_path}`
                : defImg
            }
            alt=""
            width="45"
            height="45"
          ></img>
          <h4>{review.author}</h4>
        </StyledReviewHeader>
        <p>{review.content}</p>
        <hr></hr>
      </StyledCard>
    );
  });

  return (
    <>
      {loading && <Loader />}
      <StyledList>{reviewsList.length ? reviewsList : <p>There are no reviews yet</p>}</StyledList>;
    </>
  );
};

const StyledList = styled.ul`
  list-style: none;
  margin: 0 auto;
  margin-top: 40px;
  padding: 30px;
`;

const StyledCard = styled.li`
  /* width: 300px;
  height: 300px;
  border: 2px solid black;
  border-radius: 6px;
  overflow: auto;
  padding: 0 15px 30px; */
  /* padding-bottom: 30px; */
`;

const StyledReviewHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
`;

export default Reviews;
