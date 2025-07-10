import React from "react";
import { motion } from "framer-motion";

const Luciernagas = () => {
  const colores = ["#F5E6B3", "#C3B2E4", "#E8A9BE", "#BDE3D0", "#F8F5F1"]; // paleta mágica
  const cantidad = 80; // 🎆 Más luciérnagas aún

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {Array.from({ length: cantidad }).map((_, i) => {
        const color = colores[i % colores.length];
        const size = 2 + Math.random() * 6;
        const blur = size > 5 ? 2.5 : 1.2; // más grandes = más difusas
        const isFondo = Math.random() > 0.7; // algunas estarán más lejos (menos opacidad y tamaño)

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              background: color,
              opacity: isFondo ? 0.15 + Math.random() * 0.15 : 0.3 + Math.random() * 0.4,
              filter: `blur(${blur}px)`,
              boxShadow: `0 0 ${size * 2}px ${color}66`,
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, 5, -5, 0],
              opacity: [0.3, 0.6, 0.4],
            }}
            transition={{
              duration: 5 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        );
      })}
    </div>
  );
};

export default Luciernagas;
