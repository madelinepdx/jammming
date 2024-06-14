import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = ({ playlistTracks }) => {
  return (
    <div className={styles.playlist}>
      <input defaultValue="New Playlist" />
      <Tracklist tracks={playlistTracks} />
    </div>
  );
};

export default Playlist;
