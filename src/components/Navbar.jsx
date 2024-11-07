import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const navigate = useNavigate(); // Inicializa useNavigate
  const { isAuthenticated, logout } = useAuth();

  const handleRegister = () => {
    navigate("/register"); //
  };

  const handleLogout = () => {
    logout(); // Llama a logout desde el contexto para actualizar el estado global
    alert("Has cerrado sesión exitosamente.");
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#contacto">
                  Contatos
                </a>
              </li>
            </ul>

            <div className={styles.titulo}>
              <h1>Tienda Biquinis</h1>
              <div className={styles.modelsNav}>
                <ul>
                  <li>
                    <a className="nav-link " href="#">
                      Lançamentos
                    </a>
                  </li>
                  <li>
                    <a className="nav-link " href="#">
                      Lançamentos
                    </a>
                  </li>
                  <li>
                    <a className="nav-link " href="#">
                      Lançamentos
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {isAuthenticated ? (
              <button onClick={handleLogout}>Cerrar Sesión</button>
            ) : (
              <button onClick={handleRegister}>Iniciar Sesión</button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
