import { NavLink } from 'react-router-dom';
import 'components/Navigation/Navigation.styles.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact="true"
        to="/"
        className='link'
        activeclassname="active"
      >
        Додому
      </NavLink>
      <NavLink
        to="/movies"
        className='link'
        activeclassname="active"
      >
        &nbsp;Фільми
      </NavLink>
    </nav>
  );
};

export default Navigation;
