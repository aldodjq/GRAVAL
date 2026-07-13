import "./Servicios.css";

import {
  FaBuilding,
  FaHardHat,
  FaDraftingCompass,
  FaRoad,
  FaTools,
  FaClipboardCheck,
  FaArrowRight
} from "react-icons/fa";

const servicios = [
  {
    id: "01",
    icon: <FaBuilding />,
    titulo: "Construcción de Edificaciones",
    descripcion:
      "Desarrollamos proyectos residenciales, comerciales e industriales con altos estándares de calidad.",
  },
  {
    id: "02",
    icon: <FaDraftingCompass />,
    titulo: "Arquitectura y Diseño",
    descripcion:
      "Creamos diseños modernos, funcionales y adaptados a las necesidades de cada cliente.",
  },
  {
    id: "03",
    icon: <FaRoad />,
    titulo: "Infraestructura Vial",
    descripcion:
      "Construcción y mantenimiento de carreteras, puentes y obras civiles.",
  },
  {
    id: "04",
    icon: <FaHardHat />,
    titulo: "Supervisión de Obras",
    descripcion:
      "Control técnico, seguridad y calidad durante todas las etapas del proyecto.",
  },
  {
    id: "05",
    icon: <FaTools />,
    titulo: "Remodelaciones",
    descripcion:
      "Renovamos y modernizamos espacios residenciales, comerciales e industriales.",
  },
  {
    id: "06",
    icon: <FaClipboardCheck />,
    titulo: "Consultoría",
    descripcion:
      "Asesoría especializada para garantizar proyectos eficientes y sostenibles.",
  },
];

export default function Servicios() {
  return (
    <section className="services">

      <div className="services-header">

        <span>NUESTROS SERVICIOS</span>

        <h2>
          Soluciones Integrales para Construcción e Ingeniería
        </h2>

        <p>
          Ofrecemos servicios especializados para desarrollar proyectos
          innovadores, seguros y de alta calidad que superan las expectativas
          de nuestros clientes.
        </p>

      </div>

      <div className="services-grid">

        {servicios.map((item) => (

          <div className="service-card" key={item.id}>

            <div className="number">
              {item.id}
            </div>

            <div className="service-icon">
              {item.icon}
            </div>

            <h3>
              {item.titulo}
            </h3>

            <p>
              {item.descripcion}
            </p>

            <button>
              Ver más
              <FaArrowRight />
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}