import { useState } from "react";
import "./Proyectos.css";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

const categorias = [
  "Todos",
  "Residencial",
  "Comercial",
  "Infraestructura",
  "Remodelación",
];

const proyectos = [
  {
    id: 1,
    categoria: "Residencial",
    titulo: "Condominio Los Andes",
    lugar: "Arequipa",
    anio: "2025",
    imagen:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    categoria: "Comercial",
    titulo: "Centro Empresarial Prime",
    lugar: "Lima",
    anio: "2024",
    imagen:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    categoria: "Infraestructura",
    titulo: "Puente Metropolitano",
    lugar: "Cusco",
    anio: "2023",
    imagen:
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    categoria: "Remodelación",
    titulo: "Hotel Colonial",
    lugar: "Puno",
    anio: "2025",
    imagen:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    categoria: "Residencial",
    titulo: "Residencial El Sol",
    lugar: "Tacna",
    anio: "2024",
    imagen:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    categoria: "Comercial",
    titulo: "Centro Comercial Nova",
    lugar: "Arequipa",
    anio: "2026",
    imagen:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Proyectos() {
  const [filtro, setFiltro] = useState("Todos");

  const lista =
    filtro === "Todos"
      ? proyectos
      : proyectos.filter((p) => p.categoria === filtro);

  return (
    <section className="projects">

      <div className="projects-header">
        <span>NUESTROS PROYECTOS</span>

        <h2>
          Obras que reflejan calidad, innovación y confianza
        </h2>

        <p>
          Cada proyecto representa nuestro compromiso con la excelencia y el
          desarrollo de infraestructura sostenible.
        </p>
      </div>

      <div className="filters">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={filtro === cat ? "active" : ""}
            onClick={() => setFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">

        {lista.map((item) => (

          <div className="project-card" key={item.id}>

            <img src={item.imagen} alt={item.titulo} />

            <div className="overlay">

              <span className="tag">
                {item.categoria}
              </span>

              <h3>{item.titulo}</h3>

              <div className="details">

                <span>
                  <FaMapMarkerAlt />
                  {item.lugar}
                </span>

                <span>
                  <FaCalendarAlt />
                  {item.anio}
                </span>

              </div>

              <button>
                Ver Proyecto
                <FaArrowRight />
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}