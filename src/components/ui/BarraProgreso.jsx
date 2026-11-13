// src/components/ui/BarraProgreso.jsx
// Barra fina arriba de la pantalla que muestra cuánto se ha recorrido la página.
import { motion, useScroll, useSpring } from "framer-motion";

const BarraProgreso = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-aurora via-lavanda to-rocio"
      style={{ scaleX }}
    />
  );
};

export default BarraProgreso;
