// src/sections/Raices.jsx
// Formación y cursos. Los datos se editan en src/data/education.js
import React from "react";
import { motion } from "framer-motion";

import { education, educationTitle } from "@/data/education";

const Raices = ({ lang }) => {
  const t = educationTitle[lang] || educationTitle.es;

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#0C0A12] via-[#101a17] to-[#0C1A2C] text-marfil flex flex-col items-center justify-center px-4 py-24"
    >
      {/* Brillo suave de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-rocio/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-lavanda/10 blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-2xl mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-fraunces font-bold mb-4 text-rocio drop-shadow-[0_0_8px_#BDE3D0]">
          {t.titulo}
        </h2>
        <p className="text-base md:text-lg font-quicksand text-marfil/90">{t.intro}</p>
      </motion.div>

      <ul className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-6xl w-full">
        {education.map((item, i) => {
          const detalle = item.detalle[lang] ?? item.detalle.es;
          return (
            <motion.li
              key={item.id}
              className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-5 shadow-lg
                         hover:border-rocio/50 hover:shadow-[0_0_18px_#BDE3D0]/30 transition"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl leading-none" aria-hidden="true">
                  {item.emoji}
                </span>
                <div className="text-left">
                  <h3 className="font-fraunces font-bold text-lg leading-snug">
                    {item.titulo[lang] || item.titulo.es}
                  </h3>
                  <p className="text-sm text-aurora mt-1">
                    {item.lugar}
                    {item.fecha ? ` · ${item.fecha}` : ""}
                  </p>
                  {detalle && (
                    <p className="text-sm text-marfil/80 mt-2 leading-snug">{detalle}</p>
                  )}
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Raices;
