import React, { useEffect, useState } from 'react';
import '../../styles/userDashboard.css'; // Assuming userDashboard.css is in the parent directory
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    const [user, setUser] = useState(null);
    const [view, setView] = useState('dashboard');

    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        if (auth && auth.token) {
            setUser(auth.user);
        }
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <MountainIcon className="icon" />
                    <a href="/home">Home</a>
                </div>
                <nav className="sidebar-nav">
                    <a href="#" className="nav-link" onClick={() => setView('dashboard')}>
                        <HomeIcon className="icon" />
                        Dashboard
                    </a>
                </nav>
            </aside>
            <main className="main-content">
            <header className="header">
                    <div className="header-left">
                        <MountainIcon className="icon" />
                        <h3>Hello! {user.name}</h3>
                    </div>
                </header>
                <div className="user-details-container">
                    <div className="user-info">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserDashboard;

const HomeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const MountainIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
);