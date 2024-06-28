import React, { useState } from 'react';
import bgvid from './bgvideo.mp4';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'; // Import the CSS file for styling
import { useAuth } from '../../context/auth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth]=useAuth()

  const navigate = useNavigate();

  //Form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password });
      console.log("Response: ", res); // Log the response to check it
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        })
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate("/Home"); // Ensure this is the correct route for your home page
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.log("Error: ", error);
    }
  };

  return (
    <div className="register-container">
      <ToastContainer /> {/* Add ToastContainer to display notifications */}
      <video className='background-video' src={bgvid} autoPlay loop muted />
      <div className="register-content">
        <h1 className='register-header'>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder='Enter Your Email'
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder='Enter Your Password'
              required
            />
          </div>
          <div className="form-actions">
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
