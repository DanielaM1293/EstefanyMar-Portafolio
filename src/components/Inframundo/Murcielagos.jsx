// src/components/Inframundo/Murcielagos.jsx
import { motion } from "framer-motion";

const Murcielagos = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
      {/* Murciélago individual flotando, sin brillo */}
      <motion.img
        src="/assets/murcielago.png"
        alt="Murciélago"
        className="absolute top-[45%] left-[12%] w-10 md:w-14 opacity-80 z-20"
        animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grupo de murciélagos flotando */}
      <motion.img
        src="/assets/murcielagos.png"
        alt="Murciélagos múltiples"
        className="absolute top-[5%] right-[6%] w-36 md:w-48 opacity-70 z-20"
        animate={{ y: [0, -18, 0], x: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Murciélagos cruzando de izquierda a derecha */}
      {[...Array(6)].map((_, i) => (
        <motion.img
          key={`fly-lr-${i}`}
          src="/assets/murcielago.png"
          alt="Murciélago volando"
          className="absolute w-6 md:w-8 z-30 opacity-50"
          initial={{
            x: "-10vw",
            y: `${10 + i * 10}%`,
            opacity: 0,
          }}
          animate={{
            x: "110vw",
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 5 + i * 1.1,
            delay: i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Murciélagos cruzando de derecha a izquierda */}
      {[...Array(4)].map((_, i) => (
        <motion.img
          key={`fly-rl-${i}`}
          src="/assets/murcielago.png"
          alt="Murciélago cruzando"
          className="absolute w-5 md:w-7 z-30 opacity-45"
          initial={{
            x: "110vw",
            y: `${60 + i * 8}%`,
            opacity: 0,
          }}
          animate={{
            x: "-10vw",
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 6 + i * 1.3,
            delay: i * 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Murcielagos;
