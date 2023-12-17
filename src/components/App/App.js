import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PlayList from '../PlayList/PlayList';
import './App.css';


const App = () => {
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={{/*search*/ }} />
        <div className='App-playlist'>
          <PlayList list={'TrackList'} />
        </div>
      </div>
    </div>
  );
};

export default App;
