import Footer from "./components/footer/Footer";  
import Team from "./components/team/Team";
import Hero from "./components/hero/hero";
import Nosotros from "./components/nosotros/Nosotros";
import Servicios from "./components/servicios/Servicios";
import Estadisticas from "./components/estadisticas/Estadisticas";
import Proyectos from "./components/proyectos/Proyectos";
import Testimonios from "./components/testimonios/Testimonios";
import Header from "./components/header/Header";

function App() {

  return (
    <>
    <Header />
    <Hero />
    <Nosotros />
    <Servicios />
    <Estadisticas />
    <Proyectos />
    <Testimonios />
    <Team/>
    <Footer />  
    </>
  )
}

export default App
