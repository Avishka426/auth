import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import ResetPasswordVerification from "./pages/ResetPasswordVerification";
import VerificationCode from "./pages/VerificationCode";
import ResetPassword from "./pages/ResetPassword";
import PasswordResetSuccess from "./pages/PasswordResetSuccess";
import NotFound from "./pages/NotFound";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard/*" element={<MainLayout />} />
          <Route path="login" element={<Login />} /> {/* Login Page */}
          <Route path="reset-password-verification" element={<ResetPasswordVerification />} /> {/* Reset Password Verification Page */}
          <Route path="verification-code" element={<VerificationCode />} /> {/* Verification Code Page */}
          <Route path="reset-password" element={<ResetPassword />} /> {/* Reset Password Page */}
          <Route path="password-reset-success" element={<PasswordResetSuccess />} /> {/* Password Reset Success Page */}
          <Route path="*" element={<NotFound />} />
       
      </Routes>
    </Router>
  );
}

export default App;