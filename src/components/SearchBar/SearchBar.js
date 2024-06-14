import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder='Enter a Song, Album, or Artist'></input>
      <button className={styles.button}>SEARCH</button>
    </div>
  );
};

export default SearchBar;
