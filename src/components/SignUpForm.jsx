import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Service langsung di sini biar praktis
const registerUser = async (userData) => {
  console.log("Mengirim data:", userData); // Optional debug log
  const response = await fetch("http://localhost:8080/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Registrasi gagal");
  }

  return await response.json();
};

export default function SignUpForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const userData = {
      fullName,
      email,
      password,
      phone,
      address,
    };

    try {
      await registerUser(userData);
      alert("Registrasi berhasil! Silakan login.");
      navigate("/login");
    } catch (error) {
      console.error("Gagal registrasi:", error.message);
      alert("Registrasi gagal. Silakan coba lagi.");
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}
