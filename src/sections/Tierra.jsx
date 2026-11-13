import React from "react";
import { motion } from "framer-motion";
import HadasSkills from "@/components/Tierra/HadasSkills";
import Luciernagas from "@/components/Tierra/Luciernagas";
import RayosMagicos from "@/components/Tierra/RayosMagicos";
import CarruselMagico from "@/components/Tierra/CarruselMagico";
import EncabezadoSeccion from "@/components/ui/EncabezadoSeccion";
import FundidoSeccion from "@/components/ui/FundidoSeccion";

const Tierra = ({ lang }) => {
  const translations = {
    es: {
      etiqueta: "Habilidades",
      titulo: "Herramientas de mi universo",
      descripcion:
        "Estas son las tecnologías, herramientas y habilidades que utilizo para construir experiencias digitales impactantes. Desde el diseño hasta el desarrollo, cada una aporta magia a mis proyectos.",
    },
    en: {
      etiqueta: "Skills",
      titulo: "Tools from My Universe",
      descripcion:
        "These are the technologies, tools, and skills I use to craft impactful digital experiences. From design to development, each one adds magic to my projects.",
    },
    pt: {
      etiqueta: "Habilidades",
      titulo: "Ferramentas do Meu Universo",
      descripcion:
        "Estas são as tecnologias, ferramentas e habilidades que utilizo para criar experiências digitais impactantes. Do design ao desenvolvimento, cada uma adiciona um toque mágico aos meus projetos.",
    },
  };

  const t = translations[lang] || translations.es;

  return (
<section
  className="relative w-full min-h-screen overflow-hidden text-marfil flex flex-col items-center text-center bg-[#0C0A12] pt-28 pb-24 px-5 sm:px-6 md:px-16 lg:px-20"
>


      <CarruselMagico />

      {/* 🧚‍♀️ Partículas/luciérnagas flotantes */}
      <Luciernagas />

      {/* ⚡️ Rayos mágicos decorativos */}
      <RayosMagicos />

      <FundidoSeccion />

      <EncabezadoSeccion etiqueta={t.etiqueta} titulo={t.titulo} intro={t.descripcion} />

      {/* ✨ Habilidades en flujo normal */}
      <div className="relative z-10 mt-12 w-full max-w-6xl">
        <HadasSkills lang={lang} />
      </div>
    </section>
  );
};

export default Tierra;