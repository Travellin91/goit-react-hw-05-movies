import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'components/service/service';
import styles from 'components/Cast/styles.css';
import imageNotFound from 'components/images/Image_not_available.png';

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
      <ul className='castList'>
        {cast.map(castItem => {
          return (
            <li key={castItem.id} className='castItem'>
              <img
                src={`https://image.tmdb.org/t/p/w300${castItem.profile_path}`}
                alt={`${castItem.name} портрет`}
                className={styles.castImage}
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = imageNotFound;
                }} 
              />
              <div className='castInfo'>
                <p className='castName'>Ім'я: {castItem.name}</p>
                <p className='castCharacter'>Персонаж: {castItem.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
