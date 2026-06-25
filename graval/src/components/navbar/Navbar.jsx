import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="GRAVAL" />
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <a href="/">Inicio</a>
        </li>

        <li>
          <a href="/nosotros">Nosotros</a>
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <a href="/">Servicios ▾</a>

          <ul className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>
            <li><a href="/">Construcción Civil</a></li>
            <li><a href="/">Obras Públicas</a></li>
            <li><a href="/">Remodelaciones</a></li>
            <li><a href="/">Consultoría</a></li>
          </ul>
        </li>

        <li>
          <a href="/proyectos">Proyectos</a>
        </li>

        <li>
          <a href="/contacto">Contacto</a>
        </li>

      </ul>

      <button className="btn-cotizacion desktop-btn">
        Solicitar Cotización
      </button>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

    </nav>
  );
}

export default Navbar;