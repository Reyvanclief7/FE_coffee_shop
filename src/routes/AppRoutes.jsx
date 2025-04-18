import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
// import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Homepage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}
