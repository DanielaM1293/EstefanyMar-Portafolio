// src/components/Inframundo/Extras.jsx
import React from "react";
import { motion } from "framer-motion";

const Extras = () => {
  return (
    <>
      {/* Niña fantasma - aparece y desaparece */}
      <motion.img
        src="/assets/niña.png"
        alt="Niña fantasma"
        className="absolute bottom-4 right-4 w-24 md:w-32 opacity-0 z-30 pointer-events-none"

        animate={{ opacity: [0, 0.1, 0.1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Esqueletos flotando suavemente */}
      <motion.img
        src="/assets/esqueletos.png"
        alt="Esqueletos"
        className="absolute bottom-0 left-[50%] -translate-x-5 w-48 md:w-64 opacity-50 z-20 pointer-events-none"
        animate={{ y: [0, -29, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
};

export default Extras;
