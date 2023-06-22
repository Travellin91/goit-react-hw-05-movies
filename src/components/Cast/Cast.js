import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'services/movies-api';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const res = await fetchMoviesCredits(movieId);
        setCast(res);
      } catch (error) {
        setError('Ой. Виникла помилка...');
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {loading && 'Завантаження...'}
      {error && <div>{error}</div>}
      <ul className={styles.castList}>
        {cast.map(castItem => {
          return (
            <li key={castItem.id} className={styles.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w300${castItem.profile_path}`}
                alt={`${castItem.name} портрет`}
                className={styles.castImage}
              />
              <div className={styles.castInfo}>
                <p className={styles.castName}>Ім'я: {castItem.name}</p>
                <p className={styles.castCharacter}>Персонаж: {castItem.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
