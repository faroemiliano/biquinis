import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#contacto">
                  Contatos
                </a>
              </li>
            </ul>

            <div className={styles.titulo}>
              <h1>Tienda Biquinis</h1>
              <div className={styles.modelsNav}>
                <ul>
                  <li>
                    <a class="nav-link " href="#">
                      Lançamentos
                    </a>
                  </li>
                  <li>
                    <a class="nav-link " href="#">
                      Lançamentos
                    </a>
                  </li>
                  <li>
                    <a class="nav-link " href="#">
                      Lançamentos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
