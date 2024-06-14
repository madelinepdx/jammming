import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../Spotify';
import styles from './App.module.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
  }

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  }

  const handleSearch = (searchTerm) => {
    Spotify.search(searchTerm).then(results => {
      setSearchResults(results);
    });
  }

  const handleSavePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    console.log('Saving playlist to Spotify with URIs:', trackURIs);

    // Implement the actual save functionality here

    // Reset the playlist
    setPlaylistTracks([]);
    setPlaylistName('New Playlist');
  }

  return (
    <div className={styles.App}>
      <h1>Jammming</h1>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.resultsAndPlaylist}>
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <div className={styles.playlist}>
          <Playlist 
            playlistName={playlistName}
            setPlaylistName={setPlaylistName}
            playlistTracks={playlistTracks} 
            onRemove={removeTrack}
          />
          <button className={styles.saveButton} onClick={handleSavePlaylist}>Save To Spotify</button>
        </div>
      </div>
    </div>
  );
};

export default App;
