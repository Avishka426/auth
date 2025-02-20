import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ResetPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to reset the password
    navigate("/password-reset-success");
  };

  return (
    <div className="container-fluid vh-100">
    <div className="row h-100">
      {/* Left Side - Login Form */}
      <div className="col-md-6 d-flex align-items-center justify-content-center p-5 ">
        <div className="w-75">
        <form onSubmit={handleSubmit}> 
          <h2 className="text-center mb-4 loog">Reset Password</h2>
          <div className="mb-3"> 
          
            <label className="form-label">New Password</label>
            <input type="password"
            className="form-control"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required />
           
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control mb-5" placeholder="Confirm password" />
          </div>
          <div className="text-center mt-3 reset">
        <button type="submit" className="btn btn-primary btn-log w-100 ">Create</button>
          </div>
          </form>
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

export default ResetPassword;