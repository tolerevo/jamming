import React from 'react';
import styles from './PlayList.module.css';

const PlayList = (props) => {
  function handleClick(props) {
    let playList = `Your ${props.list} has been added to Spotify`;
    alert(playList);
  }
  handleClick.defaultProps = { playList: [] };
  return (
    <div className={styles.playList}>
      <button className={styles.saveToSpoti} onClick={handleClick}>Save To Spotify</button>
    </div>
      
  );
}
export default PlayList;