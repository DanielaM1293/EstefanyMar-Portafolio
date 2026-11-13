// src/components/ui/EncabezadoSeccion.jsx
// Encabezado común de las secciones: etiqueta pequeña, título y adorno.
// Mantiene la misma jerarquía visual en todo el portafolio.
import { motion } from "framer-motion";

const EncabezadoSeccion = ({ etiqueta, titulo, intro, className = "" }) => (
  <motion.header
    className={`relative z-10 text-center max-w-2xl mx-auto ${className}`}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {etiqueta && (
      <p className="inline-block mb-3 px-4 py-1 rounded-full border border-aurora/50 bg-black/30 backdrop-blur-sm text-[11px] sm:text-xs tracking-[0.25em] uppercase text-luciernaga">
        {etiqueta}
      </p>
    )}

    <h2 className="font-fraunces font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-marfil drop-shadow-[0_2px_14px_rgba(232,169,190,0.75)]">
      {titulo}
    </h2>

    {/* Adorno */}
    <div className="mt-4 flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-aurora/80" />
      <span className="text-luciernaga text-sm">✦</span>
      <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-aurora/80" />
    </div>

    {intro && (
      <p className="mt-5 text-base md:text-lg leading-relaxed text-marfil/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
        {intro}
      </p>
    )}
  </motion.header>
);

export default EncabezadoSeccion;
