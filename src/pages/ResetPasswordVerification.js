import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.css"

function ResetPasswordVerification() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send verification code to the email
    navigate("/verification-code");
  };

  return (
   
    <div className="container-fluid vh-100">
    <div className="row h-100">
      {/* Left Side - Login Form */}
      <div className="col-md-6 d-flex align-items-center justify-content-center p-5 ">
        <div className="w-75">
          <h2 className="text-center mb-4 loog">Reset Password Verification</h2>
          <div className="mb-3">
            
          <form onSubmit={handleSubmit}>
      
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" 
            className="form-control" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
          </div>
     
        <button type="submit" className="btn btn-primary btn-log w-100 mt-5">Send verification Code</button>
      </form>
          </div>
        </div>
      </div>
      
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

export default ResetPasswordVerification;