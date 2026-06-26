import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";  
import Team from "./components/team/Team";
import Hero from "./components/hero/hero";
import Nosotros from "./components/nosotros/Nosotros";
import Servicios from "./components/servicios/Servicios";
import Estadisticas from "./components/estadisticas/Estadisticas";

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Nosotros />
    <Servicios />
    <Estadisticas />
    <Team/>
    <Footer />  
    </>
  )
}

export default App
