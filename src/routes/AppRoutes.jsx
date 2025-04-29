import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
// import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Homepage";
import Product from "../pages/Product";
import Chart from "../pages/chart";
import ProductDetail from "../pages/Product_detail";
import ProfilePage from "../pages/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Product_detail" element={<ProductDetail />} />
      <Route path="/chart" element={<Chart />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}
