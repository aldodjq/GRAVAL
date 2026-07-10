// src/pages/Proyectos.jsx
// src/pages/ProyectoDetalle.jsx
import { useParams } from "react-router";

export function Component() {
  const { slug } = useParams();
  return (
    <section style={{ padding: "80px 24px" }}>
      <h1>Proyecto: {slug}</h1>
    </section>
  );
}