import React from "react";
import { motion } from "framer-motion";
import Nubes from "../components/Cielo/Nubes";
import EstrellaDeHowl from "../components/Cielo/EstrellaDeHowl";

const Cielo = ({ lang }) => {
  const translations = {
    es: {
      titulo: "Sobre mí",
      descripcion:
        "Soy Estefany, una exploradora de mundos creativos. Me encanta contar historias visuales, transformar ideas en experiencias y sumergirme en universos llenos de magia, diseño y detalle. ✨",
      cvEsp: "CV en Español",
      cvEng: "CV en Inglés",
    },
    en: {
      titulo: "About Me",
      descripcion:
        "I'm Estefany, an explorer of creative worlds. I love telling visual stories, turning ideas into experiences, and diving into universes full of magic, design, and detail. ✨",
      cvEsp: "CV in Spanish",
      cvEng: "CV in English",
    },
    pt: {
      titulo: "Sobre mim",
      descripcion:
        "Sou Estefany, uma exploradora de mundos criativos. Adoro contar histórias visuais, transformar ideias em experiências e mergulhar em universos cheios de magia, design e detalhes. ✨",
      cvEsp: "CV em Espanhol",
      cvEng: "CV em Inglês",
    },
  };

  const t = translations[lang] || translations.es;

  return (
    <section
      id="cielo"
      className="relative w-full min-h-screen overflow-hidden text-marfil flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/75/34/e0/7534e0ae3575e54341426fe0fd91b392.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Fondo con blending */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[#0C0A12]/40 mix-blend-overlay backdrop-blur-[2px]" />
      </div>

      {/* Rayos de luz */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-full bg-gradient-to-b from-[#F5E6B3]/10 to-transparent blur-md"
            style={{ left: `${10 + i * 15}%` }}
            animate={{ opacity: [0.2, 0.4, 0.2], y: [0, 10, 0] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Castillo flotante */}
      <img
        src="/assets/castillo.png"
        alt="Castillo del Vagabundo"
        className="absolute w-[150px] md:w-[250px] lg:w-[350px] bottom-6 left-4 animate-flotarCastillo opacity-80 pointer-events-none z-10 mix-blend-soft-light blur-[0.5px]"
      />

      {/* Nubes y estrella */}
      <Nubes />
      <EstrellaDeHowl />

      {/* Texto principal */}
      <motion.div
        className="z-20 max-w-xl px-4 md:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl md:text-5xl font-fraunces font-bold mb-4">
          {t.titulo}
        </h2>
        <p className="text-base md:text-lg font-quicksand">{t.descripcion}</p>

        {/* Botones de CV */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="/CV-EstefanyMartinez.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-aurora text-fondo px-6 py-3 rounded-full shadow-lg hover:bg-hover transition transform hover:scale-105 font-quicksand"
          >
            📄 {t.cvEsp}
          </a>
          <a
            href="/CV-EstefanyMartinez-English.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-aurora text-fondo px-6 py-3 rounded-full shadow-lg hover:bg-hover transition transform hover:scale-105 font-quicksand"
          >
            📄 {t.cvEng}
          </a>
        </div>
      </motion.div>

      {/* Niebla mágica */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[40vh] bg-[#ffffff10] backdrop-blur-sm pointer-events-none z-5"
        animate={{ x: [0, 0, 0] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          maskImage: "linear-gradient(to top, black 60%, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black 60%, transparent)",
        }}
      />
    </section>
  );
};

export default Cielo;
