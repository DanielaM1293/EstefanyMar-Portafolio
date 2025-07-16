// src/components/MunequitoScroll.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

const IDS = ["espacio", "cielo", "tierra", "mar", "inframundo", "cortehielo"];

const MunequitoScroll = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 3000], [0, 1200]);

  const [leftSide, setLeftSide] = useState(true); // true = izquierda
  const sectionIndex = useRef(0);

  /* 1️⃣  Animación de caminar continua */
  useEffect(() => {
    controls.start({
      x: [0, 6, 0, -6, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    });
  }, [controls]);

  /* 2️⃣  Observer para salto + cambio de lado */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = IDS.indexOf(entry.target.id);
          if (entry.isIntersecting && idx !== sectionIndex.current) {
            sectionIndex.current = idx;
            setLeftSide(idx % 2 === 0); // par → izquierda, impar → derecha
            // salto
            controls.start({
              y: [-24, 0],
              transition: { duration: 0.45, ease: "easeOut" },
            });
          }
        });
      },
      { threshold: 0.55 }
    );

    IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect(); // ✅ solo cleanup
  }, [controls]);

  return (
    <motion.img
      src="/assets/muñequito.png"
      alt="Muñequito mágico"
      style={{ y }}
      animate={controls}
      className={`
        fixed
        ${leftSide ? "left-4 sm:left-6 md:left-8" : "right-4 sm:right-6 md:right-8"}
        bottom-20 sm:bottom-28 md:bottom-32
        w-12 sm:w-14 md:w-16
        z-[60] pointer-events-none select-none
      `}
    />
  );
};

export default MunequitoScroll;
