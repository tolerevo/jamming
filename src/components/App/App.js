import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import './App.css';


const App = () => {
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={ {/*search*/} }/>
        <div className='App-playlist'>
          <Playlist list={'Tracklist'}/>
        </div>
      </div>
    </div>
  );
};

export default App;
