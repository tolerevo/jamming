import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist.js';

const Playlist = () => {
  function handleClick(props) {
    let playList = `Your ${props.list} has been added to Spotify`;
    alert(playList);
  }
  handleClick.defaultProps = { playList: [] };

  return (
    <div className={styles.playList}>
      <Tracklist /> 
      <button className={styles.saveToSpoti} onClick={handleClick}>Save To Spotify</button>
    </div>
  );
}
export default Playlist;