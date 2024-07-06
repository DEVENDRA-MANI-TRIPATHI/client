import React, { useState } from 'react';
import './ProfilePopup.css';

const ProfilePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <button id="profile-btn" onClick={togglePopup}>
        Profile
      </button>
      {isOpen && (
        <div id="profile-popup" className="popup">
          <div className="popup-content">
            <img
              src="profile-pic.jpg"
              alt="Profile Picture"
              className="profile-pic"
            />
            <h3>NAME</h3>
            <a href="#dashboard" className="popup-link">
              Dashboard
            </a>
            <a href="#signout" className="popup-link signout">
              Signout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePopup;
