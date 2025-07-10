import React from "react";
import { motion } from "framer-motion";

const Nubes = () => {
  const nubes = [
    { size: "w-40 h-20", delay: 0, top: "top-10", left: "left-[-10%]", opacity: 0.5 },
    { size: "w-64 h-28", delay: 6, top: "top-20", left: "left-[-15%]", opacity: 0.4 },
    { size: "w-52 h-24", delay: 12, top: "top-32", left: "left-[-20%]", opacity: 0.6 },
    { size: "w-48 h-22", delay: 3, top: "top-[50vh]", left: "left-[-25%]", opacity: 0.5 },
    { size: "w-56 h-26", delay: 9, top: "top-[55vh]", left: "left-[-18%]", opacity: 0.45 }
  ];

  return (
    <>
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        {/* Nubes animadas desde la izquierda */}
        {nubes.map((nube, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%" }}
            animate={{ x: "120%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              delay: nube.delay,
            }}
            className={`absolute ${nube.top} ${nube.left} ${nube.size} bg-white rounded-full blur-2xl`}
            style={{ opacity: nube.opacity }}
          />
        ))}

        {/* Nubes brumosas estáticas cerca del castillo */}
        <div className="absolute top-[48vh] left-[30vw] w-[180px] h-[90px] bg-white opacity-15 rounded-full blur-3xl mix-blend-soft-light" />
        <div className="absolute top-[46vh] left-[55vw] w-[200px] h-[100px] bg-white opacity-20 rounded-full blur-2xl mix-blend-soft-light" />
        <div className="absolute top-[50vh] left-[42vw] w-[220px] h-[110px] bg-white opacity-25 rounded-full blur-2xl mix-blend-soft-light" />
      </div>

      {/* Avión de Porco Rosso */}
      <motion.img
        src="/assets/porco.png"
        alt="Avión de Porco Rosso"
        className="absolute w-[90px] md:w-[140px] z-10 pointer-events-none opacity-40 mix-blend-soft-light"
        initial={{ x: "-25vw", y: "5vh", opacity: 0 }}
        animate={{
          x: ["-25vw", "0vw", "40vw", "110vw"],
          y: ["-46vh", "-40vh", "-29vh", "-29vh"],
          opacity: [0, 0, 1, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
      />

      {/* Castillo en el cielo */}
      <motion.img
        src="/assets/castillo-cielo.png"
        alt="Castillo en el cielo"
        className="absolute top-[40vh] left-[65%] w-[240px] md:w-[320px] opacity-60 mix-blend-soft-light -translate-x-1/2 z-0 pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: [0, -45, 0, 5, 0] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default Nubes;
