// src/pages/ErrorPage.jsx
import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ padding: "80px 24px", textAlign: "center" }}>
      <h1>Ocurrió un error</h1>
      <p>{error?.statusText || error?.message || "Algo salió mal."}</p>
    </div>
  );
}