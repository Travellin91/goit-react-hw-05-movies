import styles from './MovieDetailsPage.styles.css';
import Container from 'components/Container/Container';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'components/service/service';
import PageHeading from 'components/Pageheading/Pageheading';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getYear = () => new Date(movie.release_date).getFullYear();

  let activeClassName = {
    color: '#2196f3',
  };

  const handleClick = () => navigate(location?.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    fetchMoviesDetails(movieId)
      .then(res => {
        setMovie(res);
      })
      .catch(error => {
        setError('Ой. Виникла помилка...');
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <Container>
        <button onClick={handleClick} className={styles.backButton}>
          Go back
        </button>

        {movie && <PageHeading text={movie.title} />}
        {loading && 'Завантаження ...'}
        {error && <div>{error}</div>}
        {movie && (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>({getYear()})</p>
            <p>User Score: {movie.popularity}</p>
            <div className="movie_overview">
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        )}
        <hr />
        <div>
          <h2>Додаткова інформація</h2>
          <NavLink
            to={`/movies/${movieId}/reviews`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={location.state}
          >
            <p className={styles.reviews}>Відгуки</p>
          </NavLink>

          <NavLink
            to={`/movies/${movieId}/cast`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={location.state}
          >
            <p className={styles.cast}>Акторський склад</p>
          </NavLink>
          <hr />
          <Outlet />
        </div>
      </Container>
    </>
  );
}