import Hero from "../components/hero/Hero";
import Proyectos from "../components/proyectos/Proyectos";
import Servicios from "../components/servicios/Servicios";
import Team from "../components/team/Team";
import Testimonios from "../components/testimonios/Testimonios";
import Contact from "../components/contact/Contact";

// src/pages/Home.jsx
export function Component() {
  return (
    <section >
      <Hero/>
      <Servicios/>
      <Testimonios/>
      <Team/>
      <Proyectos/>
      <Contact/>
    </section>
  );
}