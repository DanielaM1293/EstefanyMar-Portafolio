// src/components/BotonWhatsApp.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const BotonWhatsApp = () => {
  const numero = "573209861514"; // +57 (Colombia) sin espacios ni signos

  return (
    <a
      href={`https://wa.me/${numero}`}
      
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#1ebe5b] transition-colors duration-300"
      title="Envíame un mensaje por WhatsApp"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={26} />
    </a>
  );
};

export default BotonWhatsApp;
