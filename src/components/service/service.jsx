import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'f888f3c3fbbc8c9a0c5eba421bbc0c31';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const END_POINTS = {
  trending: '/trending/movie/week',
  querySearch: '/search/movie',
  movieDetails: '/movie',
  movieCredits: '/credits',
  movieReviews: '/reviews',
};

export const useGetMovies = (page = 1) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `${END_POINTS.trending}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
        );
        setMovies(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [page]);

  return movies;
};

export const useFetchByQuery = (query, page = 1) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchByQuery = async () => {
      try {
        const res = await axios.get(
          `${END_POINTS.querySearch}?api_key=${API_KEY}&page=${page}&query=${query}&language=en-US&include_adult=false`
        );
        setResults(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchByQuery();
  }, [query, page]);

  return results;
};

export const useFetchMovieDetails = (id) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await axios.get(
          `${END_POINTS.movieDetails}/${id}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return movie;
};

export const useFetchMovieCredits = (id) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const res = await axios.get(
          `/movie/${id}${END_POINTS.movieCredits}?api_key=${API_KEY}&language=en-US`
        );
        setCredits(res.data.cast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieCredits();
  }, [id]);

  return credits;
};

export const useFetchMovieReviews = (id, page = 1) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const res = await axios.get(
          `/movie/${id}${END_POINTS.movieReviews}?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        setReviews(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieReviews();
  }, [id, page]);

  return reviews;
};
