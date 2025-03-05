import React, { useState } from "react";
import "./Header.css"; 
import { Images } from "../db/config/assets/Images";
import { UserIcon } from '@heroicons/react/solid'; 
import { useNavigate } from "react-router-dom";

export default function Header({ isLoggedIn, userName, onLogout }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleRefreshApp = () => {
    navigate("/home");
  };

  const handleLogoutClick = () => {
    setShowDropdown(false);
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    onLogout();
  };
  return (
    <header className="header">
      <div className="header-left">
        <img 
          src={Images.logo} 
          alt="logo" 
          className="logo" 
          onClick={handleRefreshApp} 
        />
      </div>

      <div className="header-right">
        {isLoggedIn && (
          <div className="profile-menu">
            <UserIcon 
              className="profile-icon" 
              onClick={() => setShowDropdown(!showDropdown)} 
            />
            {showDropdown && (
              <div className="dropdown-menu">
                <p className="dropdown-item">{userName}</p>
                <button className="dropdown-item logout-btn" onClick={handleLogoutClick}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {showLogoutModal && (
        <div className="logout-modal">
          <div className="modal-content">
            <h3>Are you sure you want to logout?</h3>
            <div className="modal-actions">
              <button className="confirm-btn" onClick={confirmLogout}>Yes</button>
              <button className="cancel-btn" onClick={() => setShowLogoutModal(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
