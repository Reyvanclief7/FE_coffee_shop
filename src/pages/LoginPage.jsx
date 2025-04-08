import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import "../styles/FormStyle.css";

export default function LoginPage() {
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <LoginForm />
      <p>
        Belum punya akun? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
