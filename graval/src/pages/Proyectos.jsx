// src/pages/Proyectos.jsx
export async function loader() {
  const res = await fetch("/api/proyectos");
  return res.json();
}

export function Component() {
  const proyectos = useLoaderData();
  return proyectos.map((p) => <ProyectoCard key={p.id} {...p} />);
}