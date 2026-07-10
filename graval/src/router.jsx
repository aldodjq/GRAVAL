// src/router.jsx
import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter( {basename: "/graval" }, [
  {
    path: "/",
    Component: RootLayout,       // Header + Footer una sola vez, no por página
    errorElement: <ErrorPage />, // captura 404 y errores de cualquier ruta hija
    children: [
      { index: true, lazy: () => import("./pages/Home") },
      { path: "proyectos", lazy: () => import("./pages/Proyectos") },
      { path: "proyectos/:slug", lazy: () => import("./pages/ProyectoDetalle") },
      { path: "servicios", lazy: () => import("./pages/Servicios") },
      { path: "nosotros", lazy: () => import("./pages/Nosotros") },
      { path: "contacto", lazy: () => import("./pages/Contacto") },
      { path: "*", lazy: () => import("./pages/NotFound") },
    ],
  },
]);