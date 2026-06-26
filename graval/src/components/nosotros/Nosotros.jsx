import "./Nosotros.css";
import {
  FaBullseye,
  FaEye,
  FaShieldAlt,
  FaUsers,
  FaHardHat,
  FaLeaf
} from "react-icons/fa";

const valores = [
  {
    icon: <FaShieldAlt />,
    titulo: "Calidad",
    texto: "Ejecutamos cada proyecto bajo los más altos estándares técnicos."
  },
  {
    icon: <FaUsers />,
    titulo: "Compromiso",
    texto: "Trabajamos junto a nuestros clientes para superar expectativas."
  },
  {
    icon: <FaHardHat />,
    titulo: "Seguridad",
    texto: "La seguridad de nuestro personal y clientes es nuestra prioridad."
  },
  {
    icon: <FaLeaf />,
    titulo: "Sostenibilidad",
    texto: "Promovemos construcciones responsables con el medio ambiente."
  }
];

export default function Nosotros() {
  return (
    <section className="about">

      <div className="about-image">

        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
          alt="Constructora"
        />

        <div className="experience">
          <h2>15+</h2>
          <span>Años Construyendo</span>
        </div>

      </div>

      <div className="about-content">

        <span className="subtitle">
          QUIÉNES SOMOS
        </span>

        <h2>
          Construimos confianza, calidad e innovación en cada proyecto.
        </h2>

        <p>
          Somos una empresa especializada en ingeniería, arquitectura y
          construcción. Nuestro compromiso es desarrollar proyectos
          eficientes, seguros y sostenibles, utilizando tecnología de
          vanguardia y un equipo altamente calificado.
        </p>

        <div className="cards">

          <div className="card">

            <div className="icon">
              <FaBullseye />
            </div>

            <h3>Misión</h3>

            <p>
              Diseñar y ejecutar proyectos de construcción con excelencia,
              brindando soluciones innovadoras, seguras y sostenibles que
              generen valor para nuestros clientes.
            </p>

          </div>

          <div className="card">

            <div className="icon">
              <FaEye />
            </div>

            <h3>Visión</h3>

            <p>
              Ser una constructora líder reconocida por la calidad,
              innovación y compromiso con el desarrollo de infraestructura
              moderna y sostenible.
            </p>

          </div>

        </div>

        <div className="values">

          {valores.map((valor, index) => (

            <div className="value" key={index}>

              <div className="value-icon">
                {valor.icon}
              </div>

              <div>

                <h4>{valor.titulo}</h4>

                <p>{valor.texto}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}