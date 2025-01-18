import React from 'react';
import { useSearch } from './SearchBarContext';

import "./SearchBar.css";
 

 export default  function SearchBar(){


  const { searchType } = useSearch();
  
  const searchOptions = {
    category: { label: 'Search by Category', placeholder: 'Enter category...', image: 'category.jpg' },
    subcategory: { label: 'Search by Subcategory', placeholder: 'Enter subcategory...', image: 'subcategory.jpg' },
    product: { label: 'Search by Product', placeholder: 'Enter product name...', image: 'product.jpg' },
  };
  
  const { label, placeholder, image } = searchOptions[searchType];

  return (
    <div>
      <img src={image} alt={searchType} />
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
      HI
    </div>
  );
};

