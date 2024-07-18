import React,{useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home.js';
import TempPage from './pages/TempPage.js';
import Pagenotfound from './pages/Pagenotfound';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/user/Dashboard';
import UserDashboard from './pages/user/userDashboard.js';
import PrivateRoute from './components/Layout/Routes/Private';
import Layout from './components/Layout/Layout.js';
import AqiPage from './pages/Aqi.js';

function App() {
  const [selectedStation, setSelectedStation] = useState(null);

    const handleStationSelect = (stationName) => {
        setSelectedStation(stationName);
  };
  
  const isAdmin = true;

  return (
    <>
      <Layout onStationSelect={handleStationSelect} >
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/temp' element={<TempPage />} />
          <Route path='/aqi' element={<AqiPage />} />
          {isAdmin && (
            <Route path='/dashboard' element={<Dashboard />} />
          )}
          {!isAdmin && (
            <Route path='/dashboard' element={<UserDashboard />} />
          )}
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
        <ToastContainer />
      </Layout>

    </>
  );
}

export default App;
