import React from "react";
import { motion } from "framer-motion";

const EstrellaDeHowl = () => {
  return (
    <>
      {/* 🔥 Calcifer flotante con trayectoria animada */}
      <motion.div
        className="absolute z-20 pointer-events-none"
        initial={{ x: "110vw", y: "10vh", opacity: 0, rotate: 0 }}
        animate={{
          x: ["110vw", "70vw", "40vw", "-15vw"],
          y: ["10vh", "12vh", "9vh", "13vh"],
          opacity: [0, 1, 1, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
      >
        <motion.img
          src="/assets/Calcifer.png"
          alt="Estrella de Howl - Calcifer"
          className="w-[42px] md:w-[52px] opacity-80 z-0 drop-shadow-[0_0_8px_#E8A9BE] saturate-150 mix-blend-screen"
          animate={{
            scale: [1, 1.05, 1],
            filter: [
              "drop-shadow(0 0 6px #F5E6B3)",
              "drop-shadow(0 0 10px #E8A9BE)",
              "drop-shadow(0 0 6px #F5E6B3)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* ✨ Partículas flotantes mágicas */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => {
          const colores = ["#F5E6B3", "#C3B2E4", "#E8A9BE", "#BDE3D0", "#F8F5F1"];
          const color = colores[i % colores.length];

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: "5px",
                height: "5px",
                top: `${30 + Math.random() * 40}vh`,
                left: `${10 + Math.random() * 80}vw`,
                background: `radial-gradient(circle, ${color}, transparent)`,
                opacity: 0.4 + Math.random() * 0.3,
                filter: "blur(1px)",
                boxShadow: `0 0 8px ${color}88`,
              }}
              animate={{ y: [0, -20], opacity: [0.4, 0] }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default EstrellaDeHowl;
