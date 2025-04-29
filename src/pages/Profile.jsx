import React, { useState } from "react";
import "../styles/ProfilePage.css";
import { useNavigate } from "react-router-dom"; // Jika Anda menggunakan React Router

function ProfilePage() {
  const navigate = useNavigate(); // Hook untuk navigasi

  // Dummy user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "A passionate user of this platform.",
  });

  // State untuk mengontrol mode edit
  const [isEditing, setIsEditing] = useState(false);

  // State untuk menyimpan nilai input edit
  const [editName, setEditName] = useState(user.name);
  const [editBio, setEditBio] = useState(user.bio);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setUser({ ...user, name: editName, bio: editBio });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditName(user.name);
    setEditBio(user.bio);
    setIsEditing(false);
  };

  const handleNameChange = (event) => {
    setEditName(event.target.value);
  };

  const handleBioChange = (event) => {
    setEditBio(event.target.value);
  };

  const handleLogoutClick = () => {
    // Di sini Anda akan menambahkan logika logout sebenarnya
    alert("Logged out!");
    // Misalnya, menghapus token dari penyimpanan lokal dan mengarahkan pengguna ke halaman login
  };

  const handleGoBack = () => {
    navigate(-1); // Kembali ke halaman sebelumnya dalam history browser
  };

  return (
    <div className="profile-page-container">
      <button className="back-button" onClick={handleGoBack}>
        &larr; Back
      </button>
      <h1>Profile</h1>
      <div className="profile-info">
        <div className="info-item">
          <label>Name:</label>
          <span>
            {isEditing ? (
              <input type="text" value={editName} onChange={handleNameChange} />
            ) : (
              user.name
            )}
          </span>
        </div>
        <div className="info-item">
          <label>Email:</label>
          <span>{user.email}</span>
        </div>
        <div className="info-item">
          <label>Bio:</label>
          <span>
            {isEditing ? (
              <textarea value={editBio} onChange={handleBioChange} />
            ) : (
              user.bio
            )}
          </span>
        </div>
        <div className="profile-actions">
          {!isEditing ? (
            <button onClick={handleEditClick}>Edit Profile</button>
          ) : (
            <>
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          )}
          <button className="logout-button" onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
