import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulasi ambil data user (bisa diganti fetch dari backend/Firebase)
    const dummyData = [
      { id: 1, email: "user1@example.com" },
      { id: 2, email: "user2@example.com" },
      { id: 3, email: "user3@example.com" },
    ];
    setUsers(dummyData);
  }, []);

  return (
    <div className="dashboard-container">
      <h1 style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: 0,
      color: "green"
      }}>
      LOGIN ANDA BERHASIL
      </h1>
      <h2>Daftar User</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
