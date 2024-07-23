// import React, { useState } from 'react';
// import bgvid from './bgvideo.mp4';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Register.css';
// import { useAuth } from '../../context/auth';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [auth,setAuth]=useAuth()

//   const navigate = useNavigate();

//   //Form function
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password });
//       console.log("Response: ", res);
//       if (res.data.success) {
//         toast.success(res.data.message);
//         setAuth({
//           ...auth,
//           user: res.data.user,
//           token: res.data.token
//         })
//         localStorage.setItem('auth', JSON.stringify(res.data));
//         navigate("/home"); // Ensure this is the correct route for your home page
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       toast.error("Login failed. Please try again.");
//       console.log("Error: ", error);
//     }
//   };

//   return (
//     <div className="register-container">
//       <ToastContainer />
//       <video className='background-video' src={bgvid} autoPlay loop muted />
//       <div className="register-content">
//         <h1 className='register-header'>Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//               placeholder='Enter Your Email'
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control"
//               placeholder='Enter Your Password'
//               required
//             />
//           </div>
//           <div className="form-actions">
//             <div className="forgot-password">
//               <a href="/forgot-password">Forgot Password?</a>
//             </div>
//             <button type="submit" className="btn-primary">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import bgvid from './bgvideo.mp4';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import { useAuth } from '../../context/auth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const navigate = useNavigate();

  // Form function for login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password });
      console.log("Response: ", res);
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate("/home"); // Ensure this is the correct route for your home page
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.log("Error: ", error);
    }
  };

  // Function to handle forgot password click
  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  // Function to handle reset password submit
  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/forgot-password`, { email: resetEmail });
      if (res.data.success) {
        toast.success("Password reset link has been sent to your email");
        setShowForgotPassword(false);
        setResetEmail("");
      } else {
        toast.error(res.data.message);
        setShowForgotPassword(false);
      }
    } catch (error) {
      toast.error("Failed to send reset link. Please try again.");
       setShowForgotPassword(false);
      console.log("Error: ", error);
    }
  };

  return (
    <div className="register-container">
      <ToastContainer /> 
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
              <button type="button" onClick={handleForgotPasswordClick} className="btn-link">Forgot Password?</button>
            </div>
            <button type="submit" className="btn-primary">Submit</button>
          </div>
        </form>
      </div>

      {showForgotPassword && (
        <div className="forgot-password-container">
          <h2 className='register-header'>Forgot Password</h2>
          <form onSubmit={handleResetPasswordSubmit}>
            <div className="mb-3">
              <input
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="form-control"
                placeholder='Enter Your Email'
                required
              />
            </div>
            <div className="form-actions">
            <button type="submit" className="btn-primary" >Submit</button>
            <button type="button" className="btn-secondary" onClick={() => setShowForgotPassword(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
