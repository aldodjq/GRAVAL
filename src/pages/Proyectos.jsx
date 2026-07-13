// src/pages/Proyectos.jsx
import Certificaciones from "../components/certificaciones/Certificaciones";
import Proyectos from "../components/proyectos/Proyectos";
export function Component() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <Proyectos/>
      <Certificaciones/>
    </section>
  );
}