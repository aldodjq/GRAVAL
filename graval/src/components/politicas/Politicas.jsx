import "./Politicas.css";
import {
  FaHardHat,
  FaShieldAlt,
  FaLeaf,
  FaBalanceScale,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const politicas = [
  {
    icon: <FaHardHat />,
    titulo: "Seguridad y Salud en el Trabajo",
    descripcion:
      "La seguridad de nuestros colaboradores es nuestra prioridad. Cumplimos las normas vigentes en Seguridad y Salud en el Trabajo, promoviendo la prevención de riesgos, capacitaciones permanentes y el uso obligatorio de equipos de protección personal."
  },
  {
    icon: <FaCheckCircle />,
    titulo: "Política de Calidad",
    descripcion:
      "Nos comprometemos a desarrollar proyectos de ingeniería y construcción con altos estándares de calidad, cumpliendo los requisitos técnicos, legales y las expectativas de nuestros clientes."
  },
  {
    icon: <FaLeaf />,
    titulo: "Protección del Medio Ambiente",
    descripcion:
      "Promovemos el uso responsable de los recursos naturales, la correcta gestión de residuos y la prevención de impactos ambientales en todas nuestras operaciones."
  },
  {
    icon: <FaBalanceScale />,
    titulo: "Cumplimiento Legal",
    descripcion:
      "Cumplimos con la legislación peruana aplicable, así como con las normas técnicas, laborales, tributarias y de seguridad relacionadas con nuestras actividades."
  },
  {
    icon: <FaUsers />,
    titulo: "Ética e Integridad",
    descripcion:
      "Actuamos con honestidad, transparencia y respeto en nuestras relaciones con clientes, proveedores, colaboradores y la comunidad, rechazando cualquier acto de corrupción o discriminación."
  },
  {
    icon: <FaShieldAlt />,
    titulo: "Mejora Continua",
    descripcion:
      "Fomentamos la innovación y la mejora continua de nuestros procesos para incrementar la productividad, la eficiencia y la satisfacción de nuestros clientes."
  }
];

function Politicas() {
  return (
    <section className="politicas" id="politicas">

      <div className="politicas-header">

        <span>Nuestro Compromiso</span>

        <h2>Políticas Corporativas</h2>

        <p>
          En Grupo Graval desarrollamos nuestros proyectos bajo principios de
          calidad, seguridad, sostenibilidad y transparencia, garantizando el
          cumplimiento de la normativa peruana y la satisfacción de nuestros
          clientes.
        </p>

      </div>

      <div className="politicas-grid">

        {politicas.map((item, index) => (

          <div className="card-politica" key={index}>

            <div className="icono">
              {item.icon}
            </div>

            <h3>{item.titulo}</h3>

            <p>{item.descripcion}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Politicas;