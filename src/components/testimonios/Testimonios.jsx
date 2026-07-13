import { useEffect, useState } from "react";
import "./Testimonios.css";

import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const testimonios = [
  {
    nombre: "Carlos Mendoza",
    cargo: "Empresario",
    ciudad: "Arequipa",
    proyecto: "Centro Comercial",
    foto: "https://randomuser.me/api/portraits/men/45.jpg",
    comentario:
      "La empresa superó nuestras expectativas. El proyecto fue entregado dentro del plazo establecido y con una calidad excepcional.",
  },
  {
    nombre: "María Torres",
    cargo: "Arquitecta",
    ciudad: "Lima",
    proyecto: "Edificio Residencial",
    foto: "https://randomuser.me/api/portraits/women/54.jpg",
    comentario:
      "Su profesionalismo y compromiso fueron evidentes durante toda la obra. Recomiendo ampliamente sus servicios.",
  },
  {
    nombre: "José Ramírez",
    cargo: "Ingeniero Industrial",
    ciudad: "Cusco",
    proyecto: "Planta Industrial",
    foto: "https://randomuser.me/api/portraits/men/33.jpg",
    comentario:
      "Excelente organización, comunicación y calidad constructiva. Sin duda volveríamos a trabajar con ellos.",
  },
  {
    nombre: "Ana Flores",
    cargo: "Gerente General",
    ciudad: "Tacna",
    proyecto: "Hotel Boutique",
    foto: "https://randomuser.me/api/portraits/women/65.jpg",
    comentario:
      "Desde el diseño hasta la entrega, demostraron un nivel de excelencia y responsabilidad que pocas empresas ofrecen.",
  },
];

export default function Testimonios() {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActual((prev) => (prev + 1) % testimonios.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const siguiente = () =>
    setActual((actual + 1) % testimonios.length);

  const anterior = () =>
    setActual((actual - 1 + testimonios.length) % testimonios.length);

  return (
    <section className="testimonials">

      <div className="title">

        <span>TESTIMONIOS</span>

        <h2>
          Lo que opinan nuestros clientes
        </h2>

        <p>
          Cada proyecto refleja nuestro compromiso con la calidad,
          la innovación y la satisfacción de quienes confían en nosotros.
        </p>

      </div>

      <div className="slider">

        <button className="nav left" onClick={anterior}>
          <FaChevronLeft />
        </button>

        <div className="cards">

          {testimonios.map((item, index) => {

            let clase = "hidden";

            if (index === actual) clase = "active";
            else if (
              index ===
              (actual - 1 + testimonios.length) %
                testimonios.length
            )
              clase = "left";
            else if (
              index === (actual + 1) % testimonios.length
            )
              clase = "right";

            return (
              <div className={`card ${clase}`} key={index}>

                <FaQuoteLeft className="quote" />

                <img
                  src={item.foto}
                  alt={item.nombre}
                />

                <h3>{item.nombre}</h3>

                <span className="cargo">
                  {item.cargo}
                </span>

                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p>{item.comentario}</p>

                <div className="project">

                  <strong>{item.proyecto}</strong>

                  <span>{item.ciudad}</span>

                </div>

              </div>
            );
          })}

        </div>

        <button className="nav right" onClick={siguiente}>
          <FaChevronRight />
        </button>

      </div>

      <div className="dots">

        {testimonios.map((_, i) => (
          <span
            key={i}
            className={actual === i ? "dot active" : "dot"}
            onClick={() => setActual(i)}
          />
        ))}

      </div>

    </section>
  );
}