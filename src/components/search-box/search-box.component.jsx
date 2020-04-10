import React from 'react';

import './search-box.style.css';

export const SearchBox = ({searchType, placeholder, handleChange}) => (
  <input 
    className='search'
    type={searchType} 
    placeholder={placeholder}
    onChange={handleChange}
  />
);