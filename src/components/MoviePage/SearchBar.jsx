import 'components/MoviePage/MoviesPage.styles.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuerySearch = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Введіть назву фільму');
    } else {
      onSearch(searchQuery);
      setSearchQuery('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='searchForm'>
        <input
          type="text"
          name="searchQuery"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Пошук ..."
          onChange={handleQuerySearch}
          className='searchInput'
        />
        <button type="submit" className='searchButton'>
          Пошук
        </button>
      </form>
    </>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
