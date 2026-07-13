// src/layouts/RootLayout.jsx
import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import WhatsAppButton from "../components/whatsappbutton/WhatsAppButton";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton 
        phone="51962626003"
        message="Hola, quisiera solicitar una cotización para un proyecto."
      />
    </>
  );
}