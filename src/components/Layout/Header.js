import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';
import ProfilePopup from './profilePopup';

const Header = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('auth'))?.user;
        if (user) {
            setUserName(user.name);
        }
    }, []);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleLogout = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/logout`);
            if (response.status === 200) {
                localStorage.removeItem('auth');
                window.location.href = '/login';
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <div className='Header-container'>
            <SearchBar />
            <div className="navbar">
                <div className="navbar-icon">
                    <FontAwesomeIcon icon={faBell} size="lg" />
                </div>
                <div className="navbar-end-circle" onClick={togglePopup} />
                <ProfilePopup isOpen={isPopupOpen} togglePopup={togglePopup} handleLogout={handleLogout} userName={userName} />
            </div>
        </div>
    );
};

export default Header;
