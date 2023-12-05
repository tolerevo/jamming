import React, { useState } from 'react';
import styles from './searchBar.module.css';

function SearchBar() {
  const [term, setTerm] = useState('');

  const handleTermSearch = (e) => {
    setTerm(e.target.value);
  }

  return (
      <div className={styles.search}>
        <input placeholder='Enter A Song Title' onChange={handleTermSearch} type='text' />
        <button className='SearchButton' >
          SEARCH
        </button>
      </div>
  );
};

export default SearchBar;