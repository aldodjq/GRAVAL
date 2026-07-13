import "./Team.css";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const team = [
  {
    id: 1,
    nombre: "Ing. Carlos Mendoza",
    cargo: "Gerente General",
    imagen: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 2,
    nombre: "Arq. Daniela Flores",
    cargo: "Arquitecta Principal",
    imagen: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 3,
    nombre: "Ing. Luis Pérez",
    cargo: "Ingeniero Civil",
    imagen: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 4,
    nombre: "Ing. María Torres",
    cargo: "Supervisora de Obras",
    imagen: "https://randomuser.me/api/portraits/women/54.jpg",
  },
];

function Team() {
  return (
    <section className="team-section">

      <div className="team-title">
        <span>Nuestro Equipo</span>
        <h2>Construimos Grandes Proyectos con Grandes Profesionales</h2>
        <p>
          Nuestro equipo está conformado por especialistas comprometidos con la
          calidad, la innovación y la excelencia en cada obra.
        </p>
      </div>

      <div className="team-container">
        {team.map((member) => (
          <div className="team-card" key={member.id}>

            <div className="image-box">
              <img src={member.imagen} alt={member.nombre} />
            </div>

            <div className="card-info">
              <h3>{member.nombre}</h3>
              <p>{member.cargo}</p>

              <div className="social">
                <a href="#">
                  <FaLinkedin />
                </a>

                <a href="#">
                  <FaFacebook />
                </a>

                <a href="#">
                  <FaInstagram />
                </a>

                <a href="#">
                  <FaEnvelope />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Team;