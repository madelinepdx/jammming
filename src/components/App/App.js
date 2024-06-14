import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../Spotify';
import styles from './App.module.css';

const App = () => {
      // Hard-coded array of track objects with URIs
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1', uri: 'spotify:track:1' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2', uri: 'spotify:track:2' },
    { id: 3, name: 'Song 3', artist: 'Artist 3', album: 'Album 3', uri: 'spotify:track:3' }
  ]);

  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    { id: 4, name: 'Song 4', artist: 'Artist 4', album: 'Album 4', uri: 'spotify:track:4' }
  ]);

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

  const handleSearch = (searchTerm) =>{
    console.log(`Searching for ${searchTerm}`)
  }

  const handleSavePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    console.log('Saving playlist to Spotify with URIs:', trackURIs);

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
