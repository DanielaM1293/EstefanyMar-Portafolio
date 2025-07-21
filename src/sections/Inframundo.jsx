// src/sections/Inframundo.jsx
import React from "react";
import { motion } from "framer-motion";

import Niebla from "@/components/Inframundo/Niebla";
import Murcielagos from "@/components/Inframundo/Murcielagos";
import Arañas from "@/components/Inframundo/Arañas";
import Extras from "@/components/Inframundo/Extras";

const Inframundo = () => {
  return (
    <section
      id="inframundo"
className="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] xl:min-h-[55vh] bg-[#0A0A0C] overflow-hidden text-marfil"
    >
{/* Fondo de video tipo collage */}
<video
  src="/assets/fondodefinitivo.mp4"
  className="absolute inset-0 w-full h-full object-cover drop-shadow-[0_0_90px_#0A0A0C] opacity-20 pointer-events-none"
  autoPlay
  loop
  muted
  playsInline
  preload="none" // ❗ Mejora tiempos de carga inicial
/>


      {/* Capas visuales burtonescas */}
      <Niebla />
      <Murcielagos />
      <Arañas />
      <Extras />

      {/* Jinete sin cabeza animado */}
      <motion.img
        src="/assets/jinete.png"
        alt="Jinete sin cabeza"
        className="absolute bottom-4 w-24 sm:w-28 md:w-32 lg:w-36 opacity-30 z-20 pointer-events-none"
        initial={{ x: "-40vw", opacity: 0 }}
        animate={{ x: "100vw", opacity: [0, 0.4, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 20,
          ease: "easeInOut",
        }}
      />

      {/* Sombra difusa del suelo */}
      <div className="absolute bottom-0 left-0 w-64 h-32 bg-[#0A0A0C]/60 blur-2xl z-20 pointer-events-none" />
    </section>
  );
};

export default Inframundo;
