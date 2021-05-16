import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => {
    return (
        <header className={styles.header}>
            <img src="/images/logo.png" alt="logo" />
            <input type="search" placeholder="Search..."/>
            <button type="submit">

            </button>
        </header>
    );
}

export default SearchHeader;