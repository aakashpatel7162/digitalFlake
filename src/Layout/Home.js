import React from 'react';
import Header from './Header';
import Dashboard from '../main/Dashboard';
import LeftNavbarLayout from './LeftNavBar';
import { SearchProvider } from '../pages/searchbar/SearchBarContext'; 

export default function Home() {
  return (
    <SearchProvider>
      <div>
        <Header/>
        <LeftNavbarLayout />
        <Dashboard />
      </div>
    </SearchProvider>
  );
}
