import { NavLink } from 'react-router-dom';
import styles from './Navigation.styles.css';

const Navigation = () => {
  let activeClassName = {
    color: '#2196f3',
  };

  return (
    <nav>
      <NavLink
        to="/"
        className={styles.link}
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
        isActive={(match) => match && match.isExact}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.link}
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
        isActive={(match) => match && match.path.includes('/movies')}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
