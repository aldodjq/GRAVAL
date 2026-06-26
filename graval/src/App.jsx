import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";  
import Team from "./components/team/Team";
import Hero from "./components/hero/hero";
import Nosotros from "./components/nosotros/Nosotros";
import Servicios from "./components/servicios/Servicios";

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Nosotros />
    <Servicios />
    <Body />
    <Team/>
    <Footer />  
    </>
  )
}

export default App
