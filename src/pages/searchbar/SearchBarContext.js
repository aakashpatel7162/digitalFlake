import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchType, setSearchType] = useState('category');
  const [categoryData, setCategoryData] = useState({
    category: [],
    subcategory: [],
    product: [],
  });
  const [editItemData, setEditItemData] = useState(null);

  const changeSearchType = (type) => {
    setSearchType(type);
  };

  const addItem = (newItem) => {
    setCategoryData((prevData) => ({
      ...prevData,
      [searchType]: [...prevData[searchType], newItem],
    }));
  };

  const editItem = (id, updatedItem) => {
    setCategoryData((prevData) => ({
      ...prevData,
      [searchType]: prevData[searchType].map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      ),
    }));
    setEditItemData(null); 
  };

  const setEditItem = (item) => {
    setEditItemData(item);
  };

  return (
    <SearchContext.Provider
      value={{
        searchType,
        categoryData,
        changeSearchType,
        addItem,
        editItem,
        editItemData,
        setEditItem,
      }}
    >
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
