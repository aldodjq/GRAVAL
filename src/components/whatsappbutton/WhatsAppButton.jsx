import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({
  phone = "51999999999",
  message = "Hola, deseo solicitar una cotización.",
}) => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <span className="tooltip">¿Necesitas ayuda?</span>

      <div className="pulse"></div>

      <FaWhatsapp className="icon" />
    </a>
  );
};

export default WhatsAppButton;