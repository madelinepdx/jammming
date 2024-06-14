import React from 'react';
import styles from './Track.module.css';

const Track = ({ track, onAdd, onRemove }) => {
  return (
    <div className={styles.track}>
      <p>{track.name} - {track.artist} - {track.album}</p>
      {track.preview_url && (
        <audio controls>
          <source src={track.preview_url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
      {onAdd && <button onClick={() => onAdd(track)}>+</button>}
      {onRemove && <button onClick={() => onRemove(track)}>-</button>}
    </div>
  );
};

export default Track;
