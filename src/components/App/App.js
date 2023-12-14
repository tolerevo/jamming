import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './App.module.css';


const App = () => {
  return (
    <div className={styles.App}>
      <h1>Ja<span style={{ color: 'hsla(252, 70%, 54%, 1)' }}>mmm</span>ing</h1>
      <SearchBar />
    </div>
  );
}

export default App;
