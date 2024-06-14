import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ( onSearch ) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={styles.searchBar}>
      <input 
        type="text" 
        placeholder='Enter a Song, Album, or Artist'
        value={searchTerm}
        onChange={handleTermChange}
      />
      <button onClick={handleSearch} className={styles.button}>SEARCH</button>
    </div>
  );
};

export default SearchBar;
