import React from "react";
import "./Header.css"; 

export default  function Header ({ isLoggedIn, userName, onLogin, onLogout }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">YourLogo</div>
      </div>
      <div className="header-right">
        {isLoggedIn ? (
          <div className="user-profile">
            <span className="user-name">{userName}</span>
            <button className="logout-button" onClick={onLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button className="login-button" onClick={onLogin}>
            Login
          </button>
        )}
      </div>
    </header>
  );
};

