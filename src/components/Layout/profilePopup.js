import React, { useEffect, useRef }  from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/profilePopup.css';

const ProfilePopup = ({ isOpen, togglePopup, handleLogout, userName }) => {
  const navigate = useNavigate();
  const popupRef = useRef(null);

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleOutsideClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      togglePopup();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <div id="profile-popup" className="popup" ref={popupRef}>
          <div className="popup-content">
            <h3 className='popup-name'>Hello! {userName}</h3>
            <a href="#dashboard" className="popup-link" onClick={handleDashboardClick}>
              Dashboard
            </a>
            <a href="#signout" className="popup-link signout" onClick={handleLogout}>
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePopup;
