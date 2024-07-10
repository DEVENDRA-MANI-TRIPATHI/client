import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/dashboard.css';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [view, setView] = useState('dashboard');
    const [users, setUsers] = useState([]);
    const [schools, setSchools] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        if (auth && auth.token) {
            setUser(auth.user);
        }
        const savedSchools = localStorage.getItem('schools');
        if (savedSchools) {
            setSchools(JSON.parse(savedSchools));
        }
        const savedUsers = localStorage.getItem('user');
        if (savedUsers) {
            setSchools(JSON.parse(savedUsers));
        }
        
        fetchUsers();
        fetchSchools();
    }, []);

    const handleUsersClick = () => {
        console.log('Changing view to users');
        setView('users');
        fetchUsers();
    };

    const handleSchoolsClick = () => {
        console.log('Changing view to schools');
        setView('schools');
        fetchSchools();
    };

    const fetchUsers = () => {
        setLoading(true);
        const auth = JSON.parse(localStorage.getItem('auth'));
        axios.get('http://localhost:8080/api/v1/alluser', {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        })
            .then(response => {
                console.log('Full API response for users:', response.data);
                if (response.data.success && Array.isArray(response.data.users)) {
                    setUsers(response.data.users);
                    console.log('Users set in state:', response.data.users);
                } else {
                    console.error('Expected a successful response with an array of users, but received:', response.data);
                }
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const fetchSchools = () => {
        setLoading(true);
        const auth = JSON.parse(localStorage.getItem('auth'));
        axios.get('http://localhost:8080/api/v1/schools', {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        })
            .then(response => {
                console.log('Full API response for schools:', response.data);
                if (response.data.success && Array.isArray(response.data.schools)) {
                    setSchools(response.data.schools);
                    console.log('Schools set in state:', response.data.schools);
                } else {
                    console.error('Expected a successful response with an array of schools, but received:', response.data);
                }
            })
            .catch(error => {
                console.error('There was an error fetching the schools!', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleUpdateUser = (userId) => {
        console.log('Update user with ID:', userId);
        const auth = JSON.parse(localStorage.getItem('auth'));
        axios.put(`http://localhost:8080/api/v1/user/${userId}`, {}, {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        })
            .then(response => {
                console.log('User updated successfully:', response.data);
                fetchUsers();
            })
            .catch(error => {
                console.error('Error updating user:', error);
            });
    };

    const handleDeleteUser = (userId) => {
        console.log('Delete user with ID:', userId);
        const auth = JSON.parse(localStorage.getItem('auth'));
        axios.delete(`http://localhost:8080/api/v1/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        })
            .then(response => {
                console.log('User deleted successfully:', response.data);
                fetchUsers();
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <MountainIcon className="icon" />
                    <a href="/home">Aviotron</a>
                </div>
                <nav className="sidebar-nav">
                    <a href="#" className="nav-link" onClick={() => setView('dashboard')}>
                        <HomeIcon className="icon" />
                        Dashboard
                    </a>
                    <a href="#" className="nav-link" onClick={handleSchoolsClick}>
                        <PackageIcon className="icon" />
                        Schools
                    </a>
                    <a href="#" className="nav-link" onClick={handleUsersClick}>
                        <UsersIcon className="icon" />
                        Users
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
                {view === 'dashboard' && (
                    <div className="dashboard-card-container">
                        <div className="dashboard-card">
                            <div className="dashboard-card-header">
                                <h2>Users</h2>
                                <p>View and manage your Users.</p>
                            </div>
                            <div className="dashboard-card-content">
                                <div className="dashboard-card-stat">
                                    <span>{users.length}</span>
                                    <UsersIcon className="icon" />
                                </div>
                            </div>
                            <div className="dashboard-card-footer">
                                <a href="#" onClick={handleUsersClick}>View all Users</a>
                            </div>
                        </div>
                        <div className="dashboard-card">
                            <div className="dashboard-card-header">
                                <h2>Schools</h2>
                                <p>View and manage Schools.</p>
                            </div>
                            <div className="dashboard-card-content">
                                <div className="dashboard-card-stat">
                                    <span>{schools.length}</span>
                                    <PackageIcon className="icon" />
                                </div>
                            </div>
                            <div className="dashboard-card-footer">
                                <a href="#" onClick={handleSchoolsClick}>View all Schools</a>
                            </div>
                        </div>
                    </div>
                )}
                {view === 'users' && (
                    <div className="users-container">
                        <h1 className="users-heading">Registered Users</h1>
                        {console.log('Current users state:', users)}
                        {loading ? (
                            <div className="loading-message">Loading users...</div>
                        ) : users.length === 0 ? (
                            <div className="empty-list-message">No users found. The user list is empty.</div>
                        ) : (
                            <ul className="users-list">
                                {users.map(user => (
                                    <li key={user.id} className="user-item">
                                        <span className="user-info">Name: {user.name || 'N/A'}</span>
                                        <span className="user-info"> Email: {user.email || 'N/A'}</span>
                                        <div className="user-actions">
                                            <button onClick={() => handleUpdateUser(user.id)} className="action-button update-button">Update</button>
                                            <button onClick={() => handleDeleteUser(user.id)} className="action-button delete-button">Delete</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
                {view === 'schools' && (
                    <div className="schools-container">
                        <h1 className="schools-heading">Schools</h1>
                        {console.log('Current schools state:', schools)}
                        {loading ? (
                            <div className="loading-message">Loading schools...</div>
                        ) : schools.length === 0 ? (
                            <div className="empty-list-message">No schools found. The list is empty.</div>
                        ) : (
                            <ul className="schools-list">
                                {schools.map(school => (
                                    <li key={school.id} className="school-item">
                                        <h3 className="school-name">{school.name}</h3>
                                        <span className="school-info">Address: {school.address}</span>
                                        <span className="school-info">Number of Students: {school.numOfStudents}</span>
                                        <span className="school-info">Aerobay Students: {school.noOfAerobayStudents || 'N/A'}</span>
                                        {/* <p className="school-info">Location: Lat {school.location.latitude}, Long {school.location.longitude}</p> */}
                                        <div className='school-actions'>
                                            <button className='action-button update-button'>Update</button>
                                            <button className='action-button delete-button'>Delete</button>

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Dashboard;

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

const PackageIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4.05a2 2 0 0 0-2 0l-7 4.05A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4.05a2 2 0 0 0 2 0l7-4.05A2 2 0 0 0 21 16V8z" />
        <polyline points="3.29 7 12 12.5 20.71 7" />
        <line x1="12" x2="12" y1="22.76" y2="12.5" />
    </svg>
);

const UsersIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);
