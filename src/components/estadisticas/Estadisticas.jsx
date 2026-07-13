import { useEffect, useRef, useState } from "react";
import "./Estadisticas.css";

import {
  FaBuilding,
  FaUsers,
  FaAward,
  FaHardHat,
} from "react-icons/fa";

const datos = [
  {
    icon: <FaAward />,
    numero: 15,
    sufijo: "+",
    titulo: "Años de Experiencia",
    color: "#F4B400",
  },
  {
    icon: <FaBuilding />,
    numero: 280,
    sufijo: "+",
    titulo: "Proyectos Ejecutados",
    color: "#0EA5E9",
  },
  {
    icon: <FaUsers />,
    numero: 950,
    sufijo: "+",
    titulo: "Clientes Satisfechos",
    color: "#22C55E",
  },
  {
    icon: <FaHardHat />,
    numero: 120,
    sufijo: "+",
    titulo: "Profesionales",
    color: "#F97316",
  },
];

function Counter({ end }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;

    const duration = 2000;

    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [visible, end]);

  return <span ref={ref}>{count}</span>;
}

export default function Estadisticas() {
  return (
    <section className="stats">

      <div className="stats-header">

        <span>NUESTROS LOGROS</span>

        <h2>
          La experiencia que respalda cada proyecto
        </h2>

        <p>
          Durante años hemos desarrollado obras que generan confianza,
          crecimiento y satisfacción para nuestros clientes.
        </p>

      </div>

      <div className="stats-grid">

        {datos.map((item, index) => (

          <div
            className="stat-card"
            key={index}
            style={{
              "--accent": item.color,
            }}
          >

            <div className="circle">

              {item.icon}

            </div>

            <h3>

              <Counter end={item.numero} />

              {item.sufijo}

            </h3>

            <p>{item.titulo}</p>

          </div>

        ))}

      </div>

    </section>
  );
}