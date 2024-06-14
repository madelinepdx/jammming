import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = ({ playlistName, playlistTracks, setPlaylistName, onRemove }) => {
  const handleNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

    return (
    <div className={styles.playlist}>
      <input 
        value={playlistName} 
        onChange={handleNameChange}
        />
      <Tracklist tracks={playlistTracks} onRemove={onRemove}/>
    </div>
  );
};

export default Playlist;
