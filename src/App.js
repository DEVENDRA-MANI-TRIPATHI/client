import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Pagenotfound from './pages/Pagenotfound';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Layout/Routes/Private';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Home' element={<HomePage />} /> {/* Changed path to /Home */}
        <Route path='/About' element={<About />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
