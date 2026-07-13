import "./Certificaciones.css";
import {
  FaAward,
  FaShieldAlt,
  FaLeaf,
  FaCheckCircle,
} from "react-icons/fa";

const certificaciones = [
  {
    iso: "ISO 9001:2015",
    icon: <FaAward />,
    color: "#f59e0b",
    titulo: "Sistema de Gestión de la Calidad",
    descripcion:
      "Promueve la mejora continua de los procesos, el cumplimiento de requisitos técnicos y la satisfacción del cliente en cada proyecto de ingeniería y construcción.",
  },
  {
    iso: "ISO 45001:2018",
    icon: <FaShieldAlt />,
    color: "#2563eb",
    titulo: "Seguridad y Salud en el Trabajo",
    descripcion:
      "Orienta la prevención de accidentes laborales, la identificación de riesgos y la protección permanente de nuestros colaboradores.",
  },
  {
    iso: "ISO 14001:2015",
    icon: <FaLeaf />,
    color: "#16a34a",
    titulo: "Gestión Ambiental",
    descripcion:
      "Impulsa el desarrollo responsable de las actividades, minimizando impactos ambientales y promoviendo el uso eficiente de los recursos.",
  }
];

export default function Certificaciones() {
  return (
    <section className="certificaciones" id="certificaciones">

      <div className="certificaciones-title">

        <span>Excelencia Empresarial</span>

        <h2>Normas Internacionales de Referencia</h2>

        <p>
          En <strong>Grupo Graval</strong> desarrollamos nuestros proyectos
          siguiendo las mejores prácticas internacionales, promoviendo la
          calidad, la seguridad y el cuidado del medio ambiente conforme a los
          lineamientos de las normas ISO.
        </p>

      </div>

      <div className="iso-container">

        {certificaciones.map((item) => (
          <article className="iso-card" key={item.iso}>

            <div
              className="iso-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <span className="iso-number">
              {item.iso}
            </span>

            <h3>{item.titulo}</h3>

            <p>{item.descripcion}</p>

            <div className="iso-footer">
              <FaCheckCircle />
              <span>Buenas prácticas implementadas</span>
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}