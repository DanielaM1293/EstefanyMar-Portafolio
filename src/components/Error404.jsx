import React from "react";
import Burbujas from "../components/Burbujas";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Error404 = ({ lang = "es" }) => {
  const navigate = useNavigate();

  const translations = {
    es: {
      titulo: "Página no encontrada",
      mensaje:
        "Lo sentimos, la página que estás buscando no existe. Parece que te has perdido en la galaxia.",
      boton: "Regresar a la Tierra",
    },
    en: {
      titulo: "Page not found",
      mensaje:
        "Sorry, the page you're looking for doesn't exist. It seems you've lost your way in the galaxy.",
      boton: "Return to Earth",
    },
    pt: {
      titulo: "Página não encontrada",
      mensaje:
        "Desculpe, a página que você está procurando não existe. Parece que você se perdeu na galáxia.",
      boton: "Voltar à Terra",
    },
  };

  const t = translations[lang] || translations.es;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden font-quicksand">
      {/* Fondo estrellado */}
      <div className="absolute inset-0 bg-stars opacity-40 z-0" />

      {/* 🐾 Totoros decorativos */}
      <motion.img
        src="/assets/totoros.png"
        alt="Totoros"
        className="absolute bottom-0 left-0 w-[220px] md:w-[300px] z-10 pointer-events-none opacity-90"
        initial={{ x: -50, y: 20, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* 🌟 GIF de Totoro (opcional, si tienes uno principal) */}
      <motion.img
        src="/assets/totoro-gif.gif"
        alt="Totoro animado"
        className="absolute top-10 right-10 w-[120px] md:w-[160px] z-10 pointer-events-none opacity-80"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />

      {/* Contenido central */}
      <motion.div
        className="text-center space-y-6 p-10 max-w-lg relative z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold text-aurora animate-pulse drop-shadow-[0_0_15px_#E8A9BE]">
          404
        </h1>

        <h2 className="text-3xl font-semibold text-marfil drop-shadow-md">
          {t.titulo}
        </h2>

        <p className="text-base text-gray-300">{t.mensaje}</p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-aurora hover:bg-hover text-fondo font-semibold rounded-full shadow-lg transition duration-300"
        >
          {t.boton}
        </button>
      </motion.div>

      {/* Burbujas mágicas flotando */}
      <Burbujas />
    </div>
  );
};

export default Error404;
