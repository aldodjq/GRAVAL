import React, { useState } from "react";
import "./Contact.css";

/**
 * Contact — sección de contacto para web de constructora.
 * Panel de datos de la empresa + formulario moderno.
 *
 * CÓMO EDITAR RÁPIDO:
 * 1. Datos de la empresa: edita el objeto COMPANY_INFO
 * 2. Textos de la cabecera de la sección: EYEBROW_TEXT / TITLE_TEXT / SUBTITLE_TEXT
 * 3. Campo "Tipo de proyecto": edita el array PROJECT_TYPES
 * 4. Endpoint de envío: reemplaza la función submitToServer() por tu llamada real (fetch a tu API, EmailJS, Formspree, etc.)
 * 5. Colores/fuentes: reutiliza las mismas variables --chdr-* definidas en Header.css
 *    (así toda la web comparte una sola paleta). Si usas este componente sin Header.css,
 *    los valores de fallback en Contact.css se aplican solos.
 */

const EYEBROW_TEXT = "Contáctanos";
const TITLE_TEXT = "Hablemos de tu próximo proyecto";
const SUBTITLE_TEXT =
  "Cuéntanos qué necesitas construir y te respondemos con una propuesta en menos de 24 horas.";

const COMPANY_INFO = {
  location: "Av. Los Constructores 482, Trujillo, La Libertad",
  phone: "+51 944 123 456",
  phoneHref: "tel:+51944123456",
  email: "contacto@graval.pe",
  hours: "Lun – Vie: 8:00 am – 6:00 pm",
};

const PROJECT_TYPES = [
  "Vivienda unifamiliar",
  "Edificio multifamiliar",
  "Local comercial",
  "Remodelación",
  "Otro",
];

// Reemplaza esta función por tu integración real de envío
async function submitToServer(formData) {
  console.log("Datos del formulario:", formData);
  await new Promise((resolve) => setTimeout(resolve, 900)); // simula latencia de red
  return { ok: true };
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: PROJECT_TYPES[0],
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await submitToServer(formData);
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", projectType: PROJECT_TYPES[0], message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="cct" id="contacto">
      <div className="cct__inner">
        {/* PANEL DE INFORMACIÓN */}
        <div className="cct__info">
          <span className="cct__eyebrow">{EYEBROW_TEXT}</span>
          <h2 className="cct__title">{TITLE_TEXT}</h2>
          <p className="cct__subtitle">{SUBTITLE_TEXT}</p>

          <ul className="cct__details">
            <li>
              <span className="cct__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22s7-6.2 7-12A7 7 0 0 0 5 10c0 5.8 7 12 7 12Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <div>
                <span className="cct__label">Ubicación</span>
                <span className="cct__value">{COMPANY_INFO.location}</span>
              </div>
            </li>

            <li>
              <span className="cct__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <span className="cct__label">Teléfono</span>
                <a className="cct__value cct__link" href={COMPANY_INFO.phoneHref}>
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </li>

            <li>
              <span className="cct__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <span className="cct__label">Correo</span>
                <a className="cct__value cct__link" href={`mailto:${COMPANY_INFO.email}`}>
                  {COMPANY_INFO.email}
                </a>
              </div>
            </li>
          </ul>

          <div className="cct__hours">
            <span className="cct__label">Horario de atención</span>
            <span className="cct__value">{COMPANY_INFO.hours}</span>
          </div>
        </div>

        {/* FORMULARIO */}
        <form className="cct__form" onSubmit={handleSubmit} noValidate>
          <div className="cct__row">
            <div className="cct__field">
              <label htmlFor="cct-name">Nombre completo</label>
              <input
                id="cct-name"
                name="name"
                type="text"
                placeholder="Ej. María Fernández"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="cct__field">
              <label htmlFor="cct-phone">Teléfono</label>
              <input
                id="cct-phone"
                name="phone"
                type="tel"
                placeholder="+51 900 000 000"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="cct__field">
            <label htmlFor="cct-email">Correo electrónico</label>
            <input
              id="cct-email"
              name="email"
              type="email"
              placeholder="tu@correo.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="cct__field">
            <label htmlFor="cct-project-type">Tipo de proyecto</label>
            <select
              id="cct-project-type"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
            >
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="cct__field">
            <label htmlFor="cct-message">Cuéntanos sobre tu proyecto</label>
            <textarea
              id="cct-message"
              name="message"
              rows={4}
              placeholder="Ubicación del terreno, metraje aproximado, plazos..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button className="cct__submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status === "sent" && (
            <p className="cct__status cct__status--ok" role="status">
              Mensaje enviado. Te contactaremos pronto.
            </p>
          )}
          {status === "error" && (
            <p className="cct__status cct__status--error" role="alert">
              Algo salió mal. Intenta de nuevo o escríbenos directamente por correo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}