import React, { useState } from "react";
import "./LeftNavbar.css";
import { useSearch } from '../pages/searchbar/SearchBarContext';
import {  useNavigate } from "react-router-dom";
import { rawData } from "../db/config/rawData";
export default function LeftNavBar() {
  const { changeSearchType } = useSearch();
  const [searchQuery, setSearchQuery] = useState(""); 
  const { searchType } = useSearch();

 
  const navigate = useNavigate();

  const handleSearchChange = (str) => {
    const value = str.substr(1, str.length); 
    if(value === "home") {
      navigate("home");
      changeSearchType("home")
    }else{
      navigate("dashboard");
      setSearchQuery(value); 
      changeSearchType(value); 
    }
  };
  function formatString(str) {
   
    if (!str || typeof str !== 'string') return ''; 
    return str.charAt(0).toUpperCase()+str.slice(1);
  }
  return (
    <nav className="left-navbar" >
  <ul className="navbar-links">
    {rawData.navLinks.map((link) => (
      <div 
        key={link.name} 
        className="navbar-item" 
        onClick={() => handleSearchChange(link.href)} 
        style={{ 
          backgroundColor: link.name.trim() === formatString(searchType).trim() ? "#F4EDAF" :undefined
        }}
      >
        <img src={link.icon}  alt="" style={{width:"30px ", height:"30px"}} />
        <a href={link.href}>{link.name}</a>
      </div>
    ))}
  </ul>
</nav>

  );
}
