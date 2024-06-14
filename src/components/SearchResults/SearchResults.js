import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

const SearchResults = ({ searchResults }) => {
  return (
    <div className={styles.searchResults}>
      <h2>Results</h2>
      <Tracklist tracks={searchResults}/>
    </div>
  );
};

export default SearchResults;
