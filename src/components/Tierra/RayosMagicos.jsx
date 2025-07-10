import React from "react";
import { motion } from "framer-motion";

const RayosMagicos = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {Array.from({ length: 6 }).map((_, i) => {
        const left = 10 + Math.random() * 80;
        const delay = Math.random() * 6;
        const colores = ["#C3B2E4", "#F5E6B3", "#E8A9BE"];
        const color = colores[i % colores.length];

        return (
          <motion.div
            key={i}
            className="absolute w-[8px] h-[160vh] bg-transparent"
            style={{
              left: `${left}%`,
              top: "-30vh",
              background: `linear-gradient(to bottom, ${color}66, transparent)`,
              filter: "blur(6px)",
              borderRadius: "20px",
            }}
            animate={{
              y: ["-30vh", "100vh"],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 18 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          />
        );
      })}

      {/* ✨ Destellos flotando al final de cada rayo */}
      {Array.from({ length: 6 }).map((_, i) => {
        const left = 10 + Math.random() * 80;
        const colores = ["#C3B2E4", "#F5E6B3", "#E8A9BE"];
        const color = colores[(i + 1) % colores.length];

        return (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-[6px] h-[6px] rounded-full"
            style={{
              left: `${left}%`,
              top: "100vh",
              background: color,
              filter: "blur(2px)",
              boxShadow: `0 0 8px ${color}`,
            }}
            animate={{
              opacity: [0.3, 1, 0],
              scale: [0.8, 1.5, 0.5],
            }}
            transition={{
              duration: 2,
              delay: i * 3,
              repeat: Infinity,
              repeatDelay: 16,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default RayosMagicos;
