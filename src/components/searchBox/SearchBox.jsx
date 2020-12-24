import React from 'react';
import './searchBox.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="searchBox"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);