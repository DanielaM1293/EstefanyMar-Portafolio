import React from "react";
import { motion } from "framer-motion";
import "./SistemaSolar.css"; // Asegúrate de tener este archivo CSS

const SistemaSolar = () => {
  return (
<div className="relative w-full h-[100vh] overflow-hidden">
  {/* Fondo Galáctico difuminado */}
<div className="absolute top-0 left-0 w-full h-full bg-andromeda bg-cover opacity-10" />
  <div className="absolute top-0 left-0 w-full h-full bg-bosque-sm z-6" />


      {/* Sol */}
      <motion.div
        className="sol"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Planeta 1 */}
      <div className="orbita orbita1">
        <motion.div
          className="planeta planeta1"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="esfera planeta-terrestre" />
        </motion.div>
      </div>

      {/* Planeta 2 */}
      <div className="orbita orbita2">
        <motion.div
          className="planeta planeta2"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="esfera planeta-saturno" />
        </motion.div>
      </div>

      {/* Luna */}
      <div className="orbita orbita-luna">
        <motion.div
          className="planeta luna"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="esfera luna-esfera" />
        </motion.div>
      </div>
    </div>
  );
};

export default SistemaSolar;
