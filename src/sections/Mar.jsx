// src/sections/Mar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

import DecoracionesMarinas from "@/components/Mar/DecoracionesMarinas";
import BurbujaTapaMarca from "@/components/Mar/BurbujaTapaMarca";
import { projects, projectsTitle, projectLinkLabels } from "@/data/projects";
import EncabezadoSeccion from "@/components/ui/EncabezadoSeccion";
import FundidoSeccion from "@/components/ui/FundidoSeccion";

const etiquetas = { es: "Portafolio", en: "Portfolio", pt: "Portfólio" };

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
      className="relative w-full min-h-screen overflow-hidden bg-[#0C1A2C] text-marfil flex flex-col items-center px-4 sm:px-6 md:px-16 lg:px-20 pt-28 pb-44 md:pb-52"
    >
      {/* Video de fondo: del tamaño de la pantalla y recortado a esta sección.
          Así se ve nítido y cubre todo, aunque la sección sea muy alta (celular). */}
      <div className="absolute inset-0 z-0 [clip-path:inset(0)] pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="fixed top-0 left-0 w-screen h-screen object-cover"
        >
          <source src="/assets/videoonyo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Capa oscura para que el texto siempre se lea */}
      <div className="absolute inset-0 bg-[#0C1A2C]/60 backdrop-blur-sm z-10" />
      <DecoracionesMarinas />
      <BurbujaTapaMarca />

      <FundidoSeccion />

      <EncabezadoSeccion etiqueta={etiquetas[lang] || etiquetas.es} titulo={titulo} className="mb-12" />

      {/* Grid de proyectos: se genera desde src/data/projects.js */}
      <ul className="relative z-30 grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-[1200px] w-full">
        {projects.map((proyecto, i) => {
          const principal = proyecto.url || proyecto.codigo;
          return (
            <motion.li
              key={proyecto.id}
              className="flex flex-col items-center text-center rounded-3xl border border-white/10
                         bg-[#0C1A2C]/70 backdrop-blur-md p-4 sm:p-5 shadow-lg
                         hover:border-rocio/50 hover:shadow-[0_0_22px_#BDE3D0]/30 transition"
              initial={{ opacity: 0, scale: 0.9 }}
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
                  className="relative w-32 sm:w-36 lg:w-40 aspect-square
                             rounded-full border-[3px] border-[#BDE3D0]/30
                             bg-gradient-to-br from-[#BDE3D0]/10 via-[#C3B2E4]/20 to-[#8699C7]/20
                             shadow-[0_0_20px_#BDE3D0] backdrop-blur-xl overflow-hidden
                             hover:shadow-[0_0_28px_#E0F7FF] hover:scale-[1.04] transition duration-300
                             flex items-center justify-center"
                >
                  {/* ✨ Reflejos */}
                  <div className="absolute top-3 left-3 w-5 h-5 bg-white/50 rounded-full blur-[5px]" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 bg-white/30 rounded-full blur-[3px]" />
                  <LogoProyecto imagen={proyecto.imagen} icono={proyecto.icono} />
                </div>
              </a>

              {/* 🏷 Nombre y stack */}
              <h3 className="mt-3 text-base font-semibold leading-tight">{proyecto.nombre}</h3>
              {proyecto.stack && (
                <p className="mt-1 text-[11px] text-rocio/90 leading-snug">{proyecto.stack}</p>
              )}

              {/* Descripción: siempre visible, dentro de la tarjeta (nunca tapa a las demás) */}
              <p className="mt-2 text-xs sm:text-[13px] text-marfil/90 leading-snug">
                {proyecto.descripcion[lang] || proyecto.descripcion.es}
              </p>

              {/* Enlaces: demo y código (se alinean al fondo de la tarjeta) */}
              <div className="mt-auto pt-3 flex flex-wrap justify-center gap-2 text-xs">
                {proyecto.url && (
                  <a
                    href={proyecto.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full border border-aurora/60 hover:bg-aurora/20 transition"
                  >
                    {labels.demo}
                  </a>
                )}
                {proyecto.codigo && (
                  <a
                    href={proyecto.codigo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full border border-universo/70 hover:bg-universo/20 transition"
                  >
                    {labels.codigo}
                  </a>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Mar;
