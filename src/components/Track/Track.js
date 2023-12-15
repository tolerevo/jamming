import React from 'react';
import styles from './Track.module.css';

const track = {
  name: "All too well",
  artist: "Taylor Swift",
  album: "Red",
  id: 345
};

const Track = () => {
  return (
    <div className={styles.track}>
      <h2>{track.name}</h2>
      <div className={styles.trackInformation}>
        <p>Artist: {track.artist}</p>
        <p>Album: <span style={{ color: 'red', fontWeight: 500 }}>{track.album}</span></p>
        <p>N° {track.id}</p>
      </div>
    </div>
  );
}

export default Track;