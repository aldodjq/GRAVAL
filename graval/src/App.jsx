import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";  
import Team from "./components/team/Team";
import Hero from "./components/hero/hero";
import Nosotros from "./components/nosotros/Nosotros";
import Servicios from "./components/servicios/Servicios";
import Estadisticas from "./components/estadisticas/Estadisticas";
import Proyectos from "./components/proyectos/Proyectos";
function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Nosotros />
    <Servicios />
    <Estadisticas />
    <Proyectos />
    <Team/>
    <Footer />  
    </>
  )
}

export default App
