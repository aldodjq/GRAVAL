import React, { useState, useEffect } from "react";
import "./Header.css"; 
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";

// dentro del <ul>:


/**
 * Header — componente de cabecera para web de constructora.
 *
 * CÓMO EDITAR RÁPIDO:
 * 1. Logo: cambia el texto en LOGO_TEXT o reemplaza el <svg> por tu <img src="..." />
 * 2. Menú: agrega/quita/edita objetos en NAV_ITEMS (label + href)
 * 3. Botón de acción: cambia CTA_TEXT y CTA_HREF
 * 4. Colores/fuentes: todo se controla desde las variables :root en Header.css
 */

const LOGO_TEXT = "GRUPO";
const LOGO_ACCENT = "GRAVAL";

const NAV_ITEMS = [
  { label: "Inicio", to: "/" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Contacto", to: "/contacto" },
];
<NavLink to={item.to} className={({ isActive }) => (isActive ? "active" : "")}>
  {item.label}
</NavLink>

const CTA_TEXT = "Solicitar Presupuesto";
const CTA_HREF = "#presupuesto";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sombra sutil al hacer scroll (efecto opcional, fácil de quitar)
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`chdr ${isScrolled ? "chdr--scrolled" : ""}`}>
      <div className="chdr__inner">
        {/* LOGO */}
        <a href="#inicio" className="chdr__logo" onClick={closeMenu}>
          <img className="chdr__logo-icon" src={logo} alt="Logo de GRAVAL" />
          <span className="chdr__logo-text">
            {LOGO_TEXT}
            <span className="chdr__logo-accent">{LOGO_ACCENT}</span>
          </span>
        </a>

        {/* MENÚ DESKTOP */}
        <nav className="chdr__nav chdr__nav--desktop" aria-label="Principal">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA DESKTOP */}
        <a href={CTA_HREF} className="chdr__cta chdr__cta--desktop">
          {CTA_TEXT}
        </a>

        {/* BOTÓN HAMBURGUESA (solo móvil) */}
        <button
          className={`chdr__toggle ${isMenuOpen ? "chdr__toggle--open" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="chdr-mobile-nav"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MENÚ MÓVIL (overlay desplegable) */}
      <div
        id="chdr-mobile-nav"
        className={`chdr__mobile ${isMenuOpen ? "chdr__mobile--open" : ""}`}
      >
        <nav aria-label="Principal móvil">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={CTA_HREF} className="chdr__cta chdr__cta--mobile" onClick={closeMenu}>
          {CTA_TEXT}
        </a>
      </div>
    </header>
  );
}