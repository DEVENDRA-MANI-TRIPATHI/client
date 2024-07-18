import React, { useEffect, useState } from 'react';
import '../../styles/userDashboard.css'; // Assuming userDashboard.css is in the parent directory

const UserDashboard = () => {
    const [user, setUser] = useState(null);

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
        <div className="user-dashboard-container">
            <header className="user-dashboard-header">
                <h1>Dashboard</h1>
            </header>
            <main className="user-dashboard-main">
                <div className="user-details-container">
                    <h2>Your Details</h2>
                    <div className="user-info">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Location:</strong> {user.location}</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserDashboard;
