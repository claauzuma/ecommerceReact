import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
        <div className="navbar-brand">ZUMA FIT</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-brand mb-0 h1"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link active" aria-current="page">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"categoria/suplementos"} className="nav-link" aria-current="page">Suplementos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"categoria/pesasrusas"} className="nav-link" aria-current="page">Pesas Rusas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"categoria/ropa"} className="nav-link" aria-current="page">Ropa</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"carrito"} className="nav-link" aria-current="page">Carrito</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
