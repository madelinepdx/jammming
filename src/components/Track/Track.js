import React from 'react';
import styles from './Track.module.css';

const Track = ({ track, onAdd, onRemove, }) => {
  return (
    <div className={styles.track}>
      <p>{track.name} - {track.artist} - {track.album}</p>
      <button onClick={() => onAdd(track)}>+</button> {/* Add button */}
      <button onClick={() => onRemove(track)}>-</button> {/* Remove button */}
    </div>
  );
};

export default Track;
