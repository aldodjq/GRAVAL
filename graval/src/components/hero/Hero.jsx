import { useEffect, useState } from "react";
import "./Hero.css";
import {
  FaArrowRight,
  FaPlay,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

const slides = [
  {
    title: "Construimos el Futuro",
    subtitle:
      "Más de 15 años desarrollando proyectos de ingeniería, infraestructura y edificaciones con los más altos estándares de calidad.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Innovación en Cada Proyecto",
    subtitle:
      "Tecnología, experiencia y compromiso para convertir tus ideas en obras que perduran en el tiempo.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Construcción con Calidad",
    subtitle:
      "Nuestro equipo transforma espacios con eficiencia, seguridad y excelencia profesional.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrent((current + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <section className="hero">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>

          <div className="content">

            <span className="badge">
              Construcción • Ingeniería • Arquitectura
            </span>

            <h1>{slide.title}</h1>

            <p>{slide.subtitle}</p>

            <div className="buttons">

              <button className="btn-primary">
                Solicitar Cotización
                <FaArrowRight />
              </button>

              <button className="btn-secondary">
                <FaPlay />
                Ver Proyectos
              </button>

            </div>

          </div>
        </div>
      ))}

      <button className="arrow left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <button className="arrow right" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      <div className="counter">
        {String(current + 1).padStart(2, "0")}
        <span>/0{slides.length}</span>
      </div>

    </section>
  );
}