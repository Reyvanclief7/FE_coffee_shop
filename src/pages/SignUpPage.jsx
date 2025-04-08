import SignUpForm from "../components/SignUpForm";
import "../styles/FormStyle.css";

export default function SignUpPage() {
  return (
    <div className="auth-form-container">
      <h2>Sign Up</h2>
      <SignUpForm />
    </div>
  );
}
