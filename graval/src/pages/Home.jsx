import Hero from "../components/hero/Hero";
import Proyectos from "../components/proyectos/Proyectos";
import Servicios from "../components/servicios/Servicios";
import Team from "../components/team/Team";
import Testimonios from "../components/testimonios/Testimonios";

// src/pages/Home.jsx
export function Component() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <Hero/>
      <Servicios/>
      <Testimonios/>
      <Team/>
      <Proyectos/>
    </section>
  );
}