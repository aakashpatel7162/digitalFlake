import React from "react";
import "./LeftNavbar.css";
import { useSearch } from '../pages/searchbar/SearchBarContext';

export default  function LeftNavBar  ()  {
    const { changeSearchType } = useSearch();

  const navLinks = [
    { name: "Home", href: "#home", image: "" },
    { name: "About", href: "#about", image: "" },
    { name: "Services", href: "#services", image: "" },
    { name: "Contact", href: "#contact", image: "" },
  ];

  return (
    <nav className="left-navbar">
      <div className="navbar-image">
        <img src="" alt="User Avatar" />
      </div>
      
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.name} className="navbar-item">
            <img src={link.image} alt={link.name} className="link-image" />
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

