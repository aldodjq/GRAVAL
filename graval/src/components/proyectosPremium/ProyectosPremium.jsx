import { useState } from "react";
import "./ProyectosPremium.css";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTimes,
  FaArrowRight
} from "react-icons/fa";

const categorias = [
  "Todos",
  "Residencial",
  "Comercial",
  "Infraestructura",
  "Industrial"
];

const proyectos = [
  {
    id: 1,
    categoria: "Residencial",
    titulo: "Residencial Los Andes",
    lugar: "Arequipa",
    anio: "2025",
    descripcion:
      "Proyecto residencial moderno con acabados premium y áreas verdes.",
    imagen:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    altura: "large"
  },

  {
    id: 2,
    categoria: "Comercial",
    titulo: "Centro Empresarial Nova",
    lugar: "Lima",
    anio: "2024",
    descripcion:
      "Complejo corporativo con certificación sostenible.",
    imagen:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    altura: "medium"
  },

  {
    id: 3,
    categoria: "Infraestructura",
    titulo: "Puente Metropolitano",
    lugar: "Cusco",
    anio: "2023",
    descripcion:
      "Infraestructura vial de alto impacto regional.",
    imagen:
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15",
    altura: "small"
  },

  {
    id: 4,
    categoria: "Industrial",
    titulo: "Planta Industrial",
    lugar: "Moquegua",
    anio: "2026",
    descripcion:
      "Proyecto industrial con tecnología de última generación.",
    imagen:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    altura: "large"
  },

  {
    id: 5,
    categoria: "Residencial",
    titulo: "Condominio El Sol",
    lugar: "Tacna",
    anio: "2025",
    descripcion:
      "Complejo habitacional moderno y sostenible.",
    imagen:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    altura: "medium"
  }
];

export default function ProyectosPremium() {
  const [categoria, setCategoria] = useState("Todos");
  const [modal, setModal] = useState(null);

  const filtrados =
    categoria === "Todos"
      ? proyectos
      : proyectos.filter(
          item => item.categoria === categoria
        );

  return (
    <section className="portfolio">

      <div className="portfolio-header">

        <span>NUESTROS PROYECTOS</span>

        <h2>
          Construimos espacios que transforman el futuro
        </h2>

        <p>
          Cada obra representa innovación,
          calidad y compromiso.
        </p>

      </div>

      <div className="portfolio-filters">

        {categorias.map(cat => (

          <button
            key={cat}
            className={
              categoria === cat
                ? "filter active"
                : "filter"
            }
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>

        ))}

      </div>

      <div className="masonry-grid">

        {filtrados.map(item => (

          <div
            key={item.id}
            className={`project ${item.altura}`}
            onClick={() => setModal(item)}
          >

            <img
              src={`${item.imagen}?auto=format&fit=crop&w=1200&q=80`}
              alt={item.titulo}
            />

            <div className="project-overlay">

              <span>{item.categoria}</span>

              <h3>{item.titulo}</h3>

              <button>
                Ver Proyecto
                <FaArrowRight />
              </button>

            </div>

          </div>

        ))}

      </div>

      {modal && (

        <div
          className="modal"
          onClick={() => setModal(null)}
        >

          <div
            className="modal-content"
            onClick={e => e.stopPropagation()}
          >

            <button
              className="close"
              onClick={() => setModal(null)}
            >
              <FaTimes />
            </button>

            <img
              src={`${modal.imagen}?auto=format&fit=crop&w=1800&q=80`}
              alt=""
            />

            <div className="modal-info">

              <h2>{modal.titulo}</h2>

              <p>{modal.descripcion}</p>

              <div className="meta">

                <span>
                  <FaMapMarkerAlt />
                  {modal.lugar}
                </span>

                <span>
                  <FaCalendarAlt />
                  {modal.anio}
                </span>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}