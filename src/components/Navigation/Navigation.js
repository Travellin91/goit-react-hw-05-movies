import { NavLink } from 'react-router-dom';
import styles from 'components/Navigation/Navigation.styles.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact="true"
        to="/"
        className={styles.link}
        activeclassname="active"
      >
        Додому
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.link}
        activeclassname="active"
      >
        &nbsp;Фільми
      </NavLink>
    </nav>
  );
};

export default Navigation;
