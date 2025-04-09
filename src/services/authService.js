// src/services/authService.js
export const registerUser = async (userData) => {
  const response = await fetch("http://localhost:8080/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const resBody = await response.text();
  console.log("Respon backend:", response.status, resBody); // log response

  if (!response.ok) {
    throw new Error("Registrasi gagal");
  }

  return resBody;
};
