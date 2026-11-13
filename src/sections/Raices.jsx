// src/sections/Raices.jsx
// Formación y cursos. Los datos se editan en src/data/education.js
import React from "react";
import { motion } from "framer-motion";

import { education, educationTitle } from "@/data/education";
import FondoPantalla from "@/components/ui/FondoPantalla";
import FundidoSeccion from "@/components/ui/FundidoSeccion";
import EncabezadoSeccion from "@/components/ui/EncabezadoSeccion";

const etiquetas = { es: "Formación", en: "Education", pt: "Formação" };

const Raices = ({ lang }) => {
  const t = educationTitle[lang] || educationTitle.es;

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0C0A12] text-marfil flex flex-col items-center px-5 md:px-16 lg:px-20 pt-28 pb-28">
      {/* Bosque encantado de fondo (cubre toda la sección) */}
      <FondoPantalla>
        <img
          src="/assets/bosque-encantado.webp"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
      </FondoPantalla>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0C0A12]/70 via-[#0C0A12]/50 to-[#0C0A12]/80 pointer-events-none" />
      <FundidoSeccion />

      <EncabezadoSeccion etiqueta={etiquetas[lang] || etiquetas.es} titulo={t.titulo} intro={t.intro} className="mb-12" />

      <ul className="relative z-10 flex flex-wrap justify-center gap-4 sm:gap-5 max-w-6xl w-full">
        {education.map((item, i) => {
          const detalle = item.detalle[lang] ?? item.detalle.es;
          return (
            <motion.li
              key={item.id}
              className="group flex gap-4 w-full md:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-0.85rem)] rounded-3xl border border-white/10 bg-[#0C0A12]/65 backdrop-blur-md p-5 shadow-xl
                         hover:border-rocio/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(189,227,208,0.18)] transition duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            >
              <span
                className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-rocio/25 to-lavanda/25 border border-white/10 flex items-center justify-center text-2xl"
                aria-hidden="true"
              >
                {item.emoji}
              </span>

              <div className="text-left min-w-0">
                <h3 className="font-fraunces font-bold text-base sm:text-lg leading-snug">
                  {item.titulo[lang] || item.titulo.es}
                </h3>

                <p className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-aurora/15 border border-aurora/40 text-aurora">
                    {item.lugar}
                  </span>
                  {item.fecha && (
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/15 text-marfil/80">
                      {item.fecha}
                    </span>
                  )}
                </p>

                {detalle && (
                  <p className="mt-2 text-sm text-marfil/80 leading-snug">{detalle}</p>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Raices;
