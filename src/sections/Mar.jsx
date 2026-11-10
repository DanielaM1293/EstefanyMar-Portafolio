// src/sections/Mar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

import DecoracionesMarinas from "@/components/Mar/DecoracionesMarinas";
import BurbujaTapaMarca from "@/components/Mar/BurbujaTapaMarca";
import { projects, projectsTitle, projectLinkLabels } from "@/data/projects";

// Muestra el logo del proyecto; si no existe o no carga, usa el emoji de respaldo.
const LogoProyecto = ({ imagen, icono }) => {
  const [fallo, setFallo] = useState(false);

  if (imagen && !fallo) {
    return (
      <img
        src={imagen}
        alt=""
        loading="lazy"
        onError={() => setFallo(true)}
        className="absolute inset-0 w-full h-full rounded-full opacity-90 mix-blend-lighten object-contain p-4"
      />
    );
  }
  return (
    <span className="text-5xl sm:text-6xl drop-shadow-[0_0_12px_#F0BFD3]" aria-hidden="true">
      {icono || "✨"}
    </span>
  );
};

const Mar = ({ lang }) => {
  const titulo = projectsTitle[lang] || projectsTitle.es;
  const labels = projectLinkLabels[lang] || projectLinkLabels.es;

  return (
    <section
      id="mar"
      className="relative w-full min-h-screen overflow-hidden bg-[#0C1A2C] text-marfil flex flex-col items-center justify-center px-4 pt-20 pb-16"
    >
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/videoonyo.mp4" type="video/mp4" />
      </video>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-[#0C1A2C]/50 backdrop-blur-sm z-10" />
      <DecoracionesMarinas />
      <BurbujaTapaMarca />

      {/* Título */}
      <motion.h2
        className="z-30 text-3xl md:text-5xl font-fraunces font-bold mb-10 text-center drop-shadow-[0_0_10px_#F0BFD3]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {titulo}
      </motion.h2>

      {/* Grid de proyectos: se genera desde src/data/projects.js */}
      <div className="relative z-30 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-16 xl:gap-x-12 max-w-[1300px] w-full px-2 md:px-14 xl:px-20 justify-items-center">
        {projects.map((proyecto, i) => {
          const principal = proyecto.url || proyecto.codigo;
          return (
            <motion.div
              key={proyecto.id}
              className="relative group flex flex-col items-center justify-start w-full max-w-[240px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
            >
              {/* 💎 Burbuja mágica */}
              <a
                href={principal}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={proyecto.nombre}
                className="block rounded-full focus-visible:ring-2 focus-visible:ring-luciernaga"
              >
                <div
                  className="relative w-[150px] sm:w-[190px] md:w-[210px] aspect-square
                             rounded-full border-[3px] border-[#BDE3D0]/30
                             bg-gradient-to-br from-[#BDE3D0]/10 via-[#C3B2E4]/20 to-[#8699C7]/20
                             shadow-[0_0_24px_#BDE3D0] backdrop-blur-xl
                             hover:shadow-[0_0_28px_#E0F7FF] hover:scale-[1.05] transition duration-300
                             flex items-center justify-center"
                >
                  {/* ✨ Reflejos */}
                  <div className="absolute top-4 left-4 w-6 h-6 bg-white/50 rounded-full blur-[6px]" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 bg-white/30 rounded-full blur-[3px]" />

                  <LogoProyecto imagen={proyecto.imagen} icono={proyecto.icono} />
                </div>
              </a>

              {/* 🏷 Nombre */}
              <span className="mt-3 text-sm sm:text-base font-semibold text-center text-marfil leading-tight">
                {proyecto.nombre}
              </span>

              {/* Stack */}
              {proyecto.stack && (
                <span className="mt-1 text-[11px] text-center text-rocio/90 leading-tight">
                  {proyecto.stack}
                </span>
              )}

              {/* Enlaces: demo y código */}
              <div className="mt-2 flex gap-3 text-xs">
                {proyecto.url && (
                  <a
                    href={proyecto.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full border border-aurora/60 text-marfil hover:bg-aurora/20 transition"
                  >
                    {labels.demo}
                  </a>
                )}
                {proyecto.codigo && (
                  <a
                    href={proyecto.codigo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full border border-universo/70 text-marfil hover:bg-universo/20 transition"
                  >
                    {labels.codigo}
                  </a>
                )}
              </div>

              {/* Descripción: visible siempre en móvil, al pasar el mouse en escritorio */}
              <div
                className="mt-2 w-full text-xs text-marfil bg-[#0C0A12]/90 p-2 rounded-lg shadow-md backdrop-blur-md
                           ring-1 ring-aurora/40 transition duration-500
                           md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
              >
                {proyecto.descripcion[lang] || proyecto.descripcion.es}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Mar;
