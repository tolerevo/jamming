import React /* { useState } */ from 'react';
import SearchBar from '../searchBar/searchBar';
import Playlist from '../Playlist/Playlist';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <SearchBar onSearch={{/*search*/ }} />
      <Playlist />
    </div>
  );
}

export default App;
