import React from 'react'
import '../../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryFull, faStar, faBell, faWifi } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <div className='Header-container'>
            <SearchBar />
            <div className="navbar">
                <div className="navbar-icon"><FontAwesomeIcon icon={faBatteryFull} size="lg" /></div>
                <div className="navbar-icon"><FontAwesomeIcon icon={faStar} size="lg" /></div>
                <div className="navbar-icon"><FontAwesomeIcon icon={faBell} size="lg" /></div>
                <div className="navbar-icon"><FontAwesomeIcon icon={faWifi} size="lg" /></div>
                <div className="navbar-end-circle" />
                
            </div>
        </div>

    )
}

export default Header;