import Container from 'components/Container/Container';
import PageHeading from 'components/Pageheading/Pageheading';
import MovieList from 'components/Movies/Movies';
import { useEffect, useState } from 'react';
import { getMovies } from 'components/service/service';
import NotFoundView from 'components/ui/NotFoundView';

export default function GetTrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = () => {
      setLoading(true);
      getMovies()
        .then(results => {
          setMovies(results);
        })
        .catch(error => {
          setError('Ой. Виникла помилка...');
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    fetchTrendingMovies();
  }, []);

  const isNotFound = !loading && !movies.length;
  return (
    <>
      <Container>
        <PageHeading text={'Популярні фільми'}></PageHeading>
        {loading && 'Завантаження ...'}
        {isNotFound && <NotFoundView />}
        {error && <div>{error}</div>}
        {movies && <MovieList movies={movies} />}
      </Container>
    </>
  );
}
