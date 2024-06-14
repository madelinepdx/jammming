import React from 'react';
import styles from './Track.module.css';

const Track = ({ track }) => {
  return (
    <div className={styles.track}>
      <p>{track.name} - {track.artist} - {track.album}</p>
      <button>+</button> {/* Add button */}
      <button>-</button> {/* Remove button */}
    </div>
  );
};

export default Track;
