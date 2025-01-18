import React from 'react'
import SearchBar from '../pages/searchbar/SearchBar'
import { useState } from 'react';
export default function Dashboard() {
    const [searchType, setSearchType] = useState('category');
    const changeSearchType = (type) => {
      setSearchType(type);
    };
  
  return (
    <div>
      <SearchBar searchType={searchType} changeSearchType={changeSearchType} />

    </div>
  )
}
