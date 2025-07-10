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
      className="fixed bottom-6 right-6 z-50 bg-acento text-fondo p-4 rounded-full shadow-lg hover:bg-hover transition-colors duration-300 animate-bounce"
      title="Envíame un mensaje por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default BotonWhatsApp;
