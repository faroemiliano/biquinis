import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        formData
      );
      localStorage.setItem("authToken", response.data.token); // Guardar el token
      alert("Login successful");
      // Redirigir a la página principal
      window.location.href = "/"; // Cambia esta ruta según tu configuración
    } catch (error) {
      console.error("Error en el inicio de sesión:", error.response.data);
      alert("Error en el inicio de sesión: " + error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
      <Link to="/register">
        <button type="button">Registro</button>
      </Link>
    </form>
  );
};

export default Login;
