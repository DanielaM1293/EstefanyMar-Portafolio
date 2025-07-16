import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // evitar restauración automática de scroll
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // bloquear scroll durante preloader
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
      document.body.style.overflow = "";
    }, 800); // ⏱️ ajustable

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-bosque/80 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Fondo mágico con rayos verticales */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-full bg-gradient-to-b from-luciernaga/10 to-transparent blur-md"
                style={{ left: `${10 + i * 15}%` }}
                animate={{ opacity: [0.2, 0.4, 0.2], y: [0, 10, 0] }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>

          {/* Partículas mágicas */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-[2px] h-[2px] bg-luciernaga rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0.8, 0], y: -40 }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Niebla baja */}
          <div className="absolute bottom-0 w-full h-[25vh] bg-white/5 backdrop-blur-md pointer-events-none z-0" />

          {/* Totoro bajando */}
          <motion.img
            src="/assets/loader.png"
            alt="Totoro bajando con sombrilla"
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-[150px] md:w-[200px] animate-flotarCastillo z-10 drop-shadow-[0_0_10px_rgba(245,230,179,0.6)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
