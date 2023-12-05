import React, { useState } from 'react';
import styles from './searchBar.module.css';

function SearchBar() {
  const [search, setSearch] = useState('');
  return (
      <form className={styles.search}>
        <label htmlFor='search'>Search: </label>
        <input id='search' name='search' value={search} onChange={(e) => setSearch(e.target.value)} type='text' />
      </form>
  );
}

export default SearchBar;