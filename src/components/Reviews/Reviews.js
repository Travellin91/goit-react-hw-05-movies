import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'components/service/service';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetchMoviesReviews(movieId);
        setReviews(res);
      } catch (error) {
        setError(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {error && <div>{error}</div>}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
