import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <h1>Jammming</h1>
      <SearchBar />
      <div className={styles.resultsAndPlaylist}>
        <SearchResults />
        <Playlist />
      </div>
      <button>Save To Spotify</button>
    </div>
  );
};

export default App;
