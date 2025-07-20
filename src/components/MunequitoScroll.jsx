import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

const IDS = ["espacio", "cielo", "tierra", "mar", "inframundo", "cortehielo"];

const MunequitoScroll = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 3000], [0, 1200]);

  const [leftSide, setLeftSide] = useState(true);
  const sectionIndex = useRef(0);

  // Animación base de caminar
  const startWalking = (side = true) => {
    controls.start({
      x: [0, 6, 0, -6, 0],
      scaleX: side ? -1 : 1,
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    });
  };

  useEffect(() => {
    startWalking(leftSide);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const idx = IDS.indexOf(id);

            if (idx !== sectionIndex.current) {
              sectionIndex.current = idx;
              const isLeft = idx % 2 === 0;
              setLeftSide(isLeft);

              // Salta siempre
              controls.start({
                y: [-24, 0],
                scaleX: isLeft ? -1 : 1,
                transition: { duration: 0.45, ease: "easeOut" },
              });

              // Animaciones especiales por sección
              if (id === "mar") {
                controls.start({
                  y: [0, -6, 0, 6, 0],
                  scaleX: isLeft ? -1 : 1,
                  transition: { duration: 2, ease: "easeInOut" },
                });
              } else if (id === "inframundo") {
                controls.start({
                  rotate: [0, -5, 5, -3, 3, 0],
                  scaleX: isLeft ? -1 : 1,
                  transition: { duration: 0.8, ease: "easeInOut" },
                });
              } else if (id === "cortehielo") {
                controls.start({
                  x: [0, 10, -10, 10, -10, 0],
                  scaleX: isLeft ? -1 : 1,
                  transition: { duration: 2, ease: "easeInOut" },
                });
              } else {
                startWalking(isLeft);
              }
            }
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
