import React,{useState} from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import LeftNavbarLayout from './LeftNavBar';
import { SearchProvider } from '../pages/searchbar/SearchBarContext';

export default function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState("");

  const onLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };
  return (
    <SearchProvider>
     <Header 
        isLoggedIn={isLoggedIn} 
        userName={userName} 
        onLogin={onLogin} 
        onLogout={onLogout} 
      />
      <div style={{ display: 'flex' }}>
        <LeftNavbarLayout />
        <div style={{ marginTop:"1rem", width:'100%' }}>
          <Outlet /> 
        </div>
      </div>
    </SearchProvider>
  );
}
