import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-wave"></div>

      <div className="footer-container">

        {/* Empresa */}

        <div className="footer-box">
          <h2>CONSTRUCTORA</h2>

          <p>
            Construimos proyectos sólidos, modernos y sostenibles,
            ofreciendo soluciones integrales de ingeniería y arquitectura
            con altos estándares de calidad.
          </p>

          <div className="footer-social">

            <a href="#">
              <FaFacebookF/>
            </a>

            <a href="#">
              <FaInstagram/>
            </a>

            <a href="#">
              <FaLinkedinIn/>
            </a>

            <a href="#">
              <FaYoutube/>
            </a>

          </div>

        </div>

        {/* Enlaces */}

        <div className="footer-box">

          <h3>Enlaces</h3>

          <a href="#">Inicio</a>
          <a href="#">Nosotros</a>
          <a href="#">Servicios</a>
          <a href="#">Proyectos</a>
          <a href="#">Equipo</a>
          <a href="#">Contacto</a>

        </div>

        {/* Servicios */}

        <div className="footer-box">

          <h3>Servicios</h3>

          <a href="#">Construcción Civil</a>
          <a href="#">Arquitectura</a>
          <a href="#">Supervisión</a>
          <a href="#">Remodelaciones</a>
          <a href="#">Consultoría</a>
          <a href="#">Obras Públicas</a>

        </div>

        {/* Contacto */}

        <div className="footer-box">

          <h3>Contacto</h3>

          <div className="info">

            <FaMapMarkerAlt/>
            <span>Arequipa, Perú</span>

          </div>

          <div className="info">

            <FaPhoneAlt/>
            <span>+51 999 999 999</span>

          </div>

          <div className="info">

            <FaEnvelope/>
            <span>contacto@constructora.com</span>

          </div>

          <div className="info">

            <FaClock/>
            <span>Lun - Sáb | 8:00 am - 6:00 pm</span>

          </div>

        </div>

        {/* Newsletter */}

        <div className="footer-box">

          <h3>Boletín</h3>

          <p>
            Recibe noticias sobre nuestros proyectos y novedades.
          </p>

          <div className="newsletter">

            <input
              type="email"
              placeholder="Correo electrónico"
            />

            <button>

              <FaPaperPlane/>

            </button>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Constructora | Todos los derechos reservados.
        </p>

      </div>

    </footer>
  );
}

export default Footer;