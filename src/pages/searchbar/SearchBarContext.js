import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchType, setSearchType] = useState('category');

  const changeSearchType = (type) => {
    setSearchType(type);
  };

  return (
    <SearchContext.Provider value={{ searchType, changeSearchType }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
