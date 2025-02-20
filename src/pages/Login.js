import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"


import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleResetPasswordClick = () => {
    navigate("/reset-password-verification");
  };

  return (
   
    <div className="container-fluid vh-100">
    <div className="row h-100">
      {/* Left Side - Login Form */}
      <div className="col-md-6 d-flex align-items-center justify-content-center p-5 ">
        <div className="w-75">
          <h2 className="text-center mb-4 loog">Login</h2>
          <div className="mb-3">
            
            <label className="form-label">Username</label>
            <input type="text" className="form-control" placeholder="Enter username" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control mb-5" placeholder="Enter password" />
          </div>
          <button className="btn btn-primary btn-log w-100 mt-5">Login</button>
          <div className="text-center mt-3 reset">
          
            <a href="#"> <button onClick={handleResetPasswordClick}><span>Reset Password</span></button></a>
          </div>
        </div>
      </div>

      {/* hgcghc */}
      {/* Right Side - Background Image with Logo */}
      <div className="col-md-6 d-none d-md-block position-relative p-0">
        <div 
          className="h-100 w-100" 
          style={{
            backgroundImage: "url('./images/right2.png')",
            // backgroundSize: "cover",
            backgroundPosition: "center",
           
          }}
        >
          {/* <img 
            src="./images/Green Modern Marketing Logo 1.png" 
            alt="Logo" 
            className="position-absolute top-0 start-0 m-3"
          /> */}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;
