import 'components/MovieDetailsPage/MovieDetailsPage.styles.css';
import Container from 'components/Container/Container';
import { useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
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

  const handleClick = () => {
    navigate(-1);
  };

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
        <button onClick={handleClick} className="backButton">
          Повернутися назад
        </button>

        {movie && <PageHeading text={movie.title} />}
        {loading && 'Завантаження ...'}
        {error && <div>{error}</div>}
        {movie && (
          <div className="info_type">
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>({getYear()})</p>
            <p>Рейтинг користувачів: {movie.popularity}</p>
            <div className="movie_overview">
              <h3>Огляд</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        )}
        <hr />
        <div className="info_types">
          <h2 className="info">Додаткова інформація</h2>
          <NavLink
            to={`/movies/${movieId}/reviews`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={location.state}
          >
            <p className="reviews">Відгуки</p>
          </NavLink>

          <NavLink
            to={`/movies/${movieId}/cast`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={location.state}
          >
            <p className="cast">Акторський склад</p>
          </NavLink>
          <hr />
          <Outlet />
        </div>
      </Container>
    </>
  );
}
