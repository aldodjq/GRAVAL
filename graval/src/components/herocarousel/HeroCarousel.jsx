import { useState, useEffect } from "react";
import "./HeroCarousel.css";

const images = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{
            backgroundImage: `url(${img}?auto=format&fit=crop&w=1920&q=80)`
          }}
        />
      ))}

      <div className="overlay"></div>

      <div className="hero-content">
        <span className="subtitle">
          BIENVENIDOS A
        </span>

        <h1>
          GRAVAL
          <br />
          CONSTRUYENDO EL FUTURO
        </h1>

        <p>
          Somos una constructora comprometida con la calidad,
          innovación y excelencia en cada proyecto.
        </p>

        <button>
          Solicitar Cotización
        </button>
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

    </section>
  );
}

export default HeroCarousel;