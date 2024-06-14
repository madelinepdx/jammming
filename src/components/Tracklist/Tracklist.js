import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

const Tracklist = ({ tracks, onAdd }) => {
  return (
    <div className={styles.tracklist}>
      {tracks.map(track => (
        <Track key={track.id} track={track} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default Tracklist;
