import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/MoviePage/SearchBar';
import { fetchByQuery } from 'components/service/service.jsx';
import MovieList from 'components/Movies/Movies';
import Container from 'components/Container/Container';
import PageHeading from 'components/Pageheading/Pageheading';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ error: null, message: '' });
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const searchRequest = searchParams.get('query');

  useEffect(() => {
    if (!searchRequest) {
      return;
    }

    const fetchMovie = async () => {
      setLoading(true);
      try {
        const results = await fetchByQuery(searchRequest);
        if (!results.length) {
          setError({ error: true, message: 'Фільми не знайдені!' });
        } else {
          setError({ error: false, message: '' });
          setMovies(results);
        }
      } catch (error) {
        setError({ error: true, message: 'Упс! Щось пішло не так...' });
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [searchRequest]);

  function onSubmit(value) {
    setSearchParams({ query: value });
  }

  return (
    <>
      <Container>
        <PageHeading text={'Пошук фільмів'} />
        {loading && 'Завантаження ...'}
        {error.error && <div>{error.message}</div>}

        <SearchBar onSearch={onSubmit} />
        {movies && <MovieList movies={movies} prevLocation={location} />}
      </Container>
    </>
  );
};

export default MoviesPage;
