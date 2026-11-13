// src/sections/Cielo.jsx
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

import Nubes from "@/components/Cielo/Nubes";
import EstrellaDeHowl from "@/components/Cielo/EstrellaDeHowl";

const Cielo = ({ lang }) => {
  /* Traducciones */
  const t = {
    es: {
      titulo: "Sobre mí",
      descripcion:
        "Soy Estefany, tecnóloga en Análisis y Desarrollo de Software y estudiante de Ingeniería de Software. Creo interfaces visuales y funcionales con React, y también trabajo backend y análisis de datos. Freelance desde 2023, completé CS50x de Harvard. ✨",
      cvEsp: "CV en Español",
      cvEng: "CV en Inglés",
    },
    en: {
      titulo: "About Me",
      descripcion:
        "I'm Estefany, a Software Analysis and Development technologist studying Software Engineering. I build visual, functional interfaces with React, and I also work on backend and data analysis. Freelancing since 2023, and I completed Harvard's CS50x. ✨",
      cvEsp: "CV in Spanish",
      cvEng: "CV in English",
    },
    pt: {
      titulo: "Sobre mim",
      descripcion:
        "Sou Estefany, tecnóloga em Análise e Desenvolvimento de Software e estudante de Engenharia de Software. Crio interfaces visuais e funcionais com React e também trabalho com backend e análise de dados. Freelancer desde 2023, concluí o CS50x de Harvard. ✨",
      cvEsp: "CV em Espanhol",
      cvEng: "CV em Inglês",
    },
  }[lang] || t.es;

  /* Variantes para entrada */
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  /* Estilo base del botón */
  const btn =
    "relative flex items-center gap-2 px-6 py-3 rounded-full text-[#0C0A12] font-quicksand font-semibold group focus-visible:ring-2 focus-visible:ring-luciernaga transition-transform";

  return (
<section
  className="relative w-full min-h-screen overflow-hidden text-marfil flex flex-col justify-center items-center text-center px-5 py-28"
>
  {/* Video de fondo en lugar del gif */}
  <video
    src="/assets/fondocielo.mp4"
    className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
    autoPlay
    loop
    muted
    playsInline
    preload="none"
  />
      {/* Capa de oscurecimiento */}
      <div className="absolute inset-0 bg-[#0C0A12]/40 mix-blend-overlay backdrop-blur-[2px] pointer-events-none" />

      {/* Rayos de luz (igual que antes) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-full bg-gradient-to-b from-luciernaga/10 to-transparent blur-md"
            style={{ left: `${10 + i * 15}%` }}
            animate={{ opacity: [0.2, 0.4, 0.2], y: [0, 10, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Castillo flotante */}
      <img
        src="/assets/castillo.png"
        alt="Castillo del Vagabundo"
        className="absolute bottom-6 left-4 w-[150px] md:w-[250px] lg:w-[350px] animate-flotarCastillo opacity-80 mix-blend-soft-light pointer-events-none"
      />

      {/* Nubes & estrella */}
      <Nubes />
      <EstrellaDeHowl />

      {/* Texto principal */}
      <motion.div
        className="z-20 max-w-2xl w-full rounded-3xl border border-white/15 bg-[#0C1A2C]/55 backdrop-blur-md shadow-2xl px-6 py-8 md:px-10 md:py-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <p className="inline-block mb-3 px-4 py-1 rounded-full border border-aurora/50 bg-black/30 text-[11px] sm:text-xs tracking-[0.25em] uppercase text-luciernaga">Estefany Mar</p>
        <h2 className="text-3xl md:text-5xl font-fraunces font-bold mb-4 drop-shadow-[0_2px_14px_rgba(232,169,190,0.6)]">{t.titulo}</h2>
        <p className="text-base md:text-lg font-quicksand leading-relaxed text-marfil/95">{t.descripcion}</p>

        {/* Botones mágicos */}
<div className="mt-10 flex flex-col md:flex-row gap-6 justify-center items-center">

  {/* Botón CV Español */}
  <a
    href="/cv/CV_EstefanyMar_ES.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="relative group px-7 py-3 rounded-full border-2 border-aurora text-marfil font-fraunces text-lg shadow-lg backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 overflow-hidden"
  >
    {/* Fondo mágico animado */}
    <span className="absolute inset-0 bg-gradient-to-r from-aurora via-lavanda to-rocio bg-[length:200%_200%] opacity-25 blur-sm animate-gradient-x" />

    {/* Sparkles mágicos */}
    <span className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 bg-luciernaga rounded-full opacity-0 group-hover:animate-sparkles"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </span>

    <span className="relative z-10 flex items-center gap-2">
      📄 {t.cvEsp}
    </span>
  </a>

  {/* Botón CV Inglés */}
  <a
    href="/cv/CV_EstefanyMar_EN.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="relative group px-7 py-3 rounded-full border-2 border-universo text-marfil font-fraunces text-lg shadow-lg backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 overflow-hidden"
  >
    {/* Fondo mágico animado */}
    <span className="absolute inset-0 bg-gradient-to-r from-universo via-rocio to-lavanda bg-[length:200%_200%] opacity-25 blur-sm animate-gradient-x" />

    {/* Sparkles mágicos */}
    <span className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 bg-luciernaga rounded-full opacity-0 group-hover:animate-sparkles"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3 + 0.1}s`,
          }}
        />
      ))}
    </span>

    <span className="relative z-10 flex items-center gap-2">
      📄 {t.cvEng}
    </span>
  </a>
</div>


      </motion.div>

      {/* Niebla baja */}
      <motion.div
        className="absolute bottom-0 right-0 w-full h-[10vh] bg-[#ffffff0f] backdrop-blur-sm pointer-events-none"

        animate={{ x: [0, 0, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        style={{
          maskImage: "linear-gradient(to top, black 60%, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black 60%, transparent)",
        }}
      />
    </section>
  );
};

export default Cielo;
