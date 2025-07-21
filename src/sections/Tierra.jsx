import React from "react";
import { motion } from "framer-motion";
import HadasSkills from "@/components/Tierra/HadasSkills";
import Luciernagas from "@/components/Tierra/Luciernagas";
import RayosMagicos from "@/components/Tierra/RayosMagicos";
import CarruselMagico from "@/components/Tierra/CarruselMagico";

const Tierra = ({ lang }) => {
  const translations = {
    es: {
      titulo: "Herramientas de mi universo",
      descripcion:
        "Estas son las tecnologías, herramientas y habilidades que utilizo para construir experiencias digitales impactantes. Desde el diseño hasta el desarrollo, cada una aporta magia a mis proyectos.",
    },
    en: {
      titulo: "Tools from My Universe",
      descripcion:
        "These are the technologies, tools, and skills I use to craft impactful digital experiences. From design to development, each one adds magic to my projects.",
    },
    pt: {
      titulo: "Ferramentas do Meu Universo",
      descripcion:
        "Estas são as tecnologias, ferramentas e habilidades que utilizo para criar experiências digitais impactantes. Do design ao desenvolvimento, cada uma adiciona um toque mágico aos meus projetos.",
    },
  };

  const t = translations[lang] || translations.es;

  return (
<section
  id="tierra"
  className="relative w-full h-screen sm:min-h-screen overflow-hidden text-marfil flex flex-col items-center text-center bg-[#0C0A12] py-16 px-6"
>


      <CarruselMagico />

      {/* 🌫️ Capa mágica de mezcla */}
      <div className="absolute inset-0 bg-[#0C0A12]/10 backdrop-blur-[1px] mix-blend-overlay z-0 pointer-events-none" />

      {/* 🧚‍♀️ Partículas/luciérnagas flotantes */}
      <Luciernagas />

      {/* ⚡️ Rayos mágicos decorativos */}
      <RayosMagicos />

      {/* 💬 Texto central */}
      <motion.div
        className="z-10 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl md:text-5xl font-fraunces font-bold mb-4 animate-pulse text-aurora drop-shadow-[0_0_5px_#E8A9BE]">
          {t.titulo}
        </h2>

        <p className="text-lg md:text-xl font-quicksand">{t.descripcion}</p>
      </motion.div>

      {/* ✨ Habilidades en flujo normal */}
      <div className="z-10 mt-12 w-full max-w-6xl">
        <HadasSkills lang={lang} />
      </div>
    </section>
  );
};

export default Tierra;