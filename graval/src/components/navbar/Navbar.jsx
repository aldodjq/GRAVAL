import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar">
        <div class="logo">
            <img src="logo.png" alt="GRAVAL">
            <span>GRAVAL</span>
        </div>

        <ul class="nav-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Proyectos</a></li>
            <li><a href="#">Clientes</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>

        <div class="nav-actions">
            <button class="btn-cotizacion">
                Solicitar Cotización
            </button>
        </div>
    </nav>
  );
}

export default Navbar;