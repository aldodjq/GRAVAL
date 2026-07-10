// src/layouts/RootLayout.jsx
import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}