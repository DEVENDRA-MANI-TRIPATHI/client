import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home.js';
import TempPage from './pages/TempPage.js';
import Pagenotfound from './pages/Pagenotfound';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Layout/Routes/Private';
import Layout from './components/Layout/Layout.js';
import AqiPage from './pages/Aqi.js';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Home' element={<HomePage />} />
          <Route path='/temp' element={<TempPage />} />
          <Route path='/Aqi' element={<AqiPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
        <ToastContainer />
      </Layout>

    </>
  );
}

export default App;
