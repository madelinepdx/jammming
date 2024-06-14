import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';

const App = () => {
      // Hard-coded array of track objects
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Song 3', artist: 'Artist 3', album: 'Album 3' }
  ]);

  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    // Add some dummy tracks for playlist if needed
    { id: 4, name: 'Song 4', artist: 'Artist 4', album: 'Album 4' }
  ]);

  return (
    <div className={styles.App}>
      <h1>Jammming</h1>
      <SearchBar />
      <div className={styles.resultsAndPlaylist}>
        <SearchResults searchResults={searchResults} />
      <div className={styles.playlist}>
        <Playlist 
        playlistName={playlistName}
        playlistTracks={playlistTracks} 
        setPlaylistName={setPlaylistName}
        />
        <button className={styles.saveButton}>Save To Spotify</button>
      </div>
      </div>
    </div>
  );
};

export default App;
