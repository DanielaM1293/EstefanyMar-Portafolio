// src/components/Mar/BurbujaTapaMarca.jsx
import { motion } from "framer-motion";

/** Burbuja mágica + caústica que tapa la marca de agua de TikTok */
const BurbujaTapaMarca = () => (
  <div className="absolute left-0 top-46 pointer-events-none z-30">


    {/* Burbuja grande y luminosa */}
    <motion.div
      className="absolute -left-[20px] top-[-100px] w-[220px] h-[220px]
                 sm:w-[240px] sm:h-[240px] lg:w-[260px] lg:h-[260px] rounded-full"
      animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Burbuja principal */}
      <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_30%,rgb(241, 13, 13)_0%,rgba(255, 255, 255, 0)_25%,rgba(0,0,0,0)_100%)]
                     backdrop-blur-[94px] mix-blend-screen shadow-[0_0_30px_#BDE3D080]" />

      {/* Anillo exterior */}
      <div
        className="absolute inset-0 rounded-full ring-2 ring-[#BDE3D0]/50 blur-[1px]"
        style={{ boxShadow: "0 0 18px 6px rgba(88, 50, 164, 0)" }}
      />

      {/* Destellos internos */}
      {Array.from({ length: 8 }).map((_, idx) => (
        <motion.span
          key={idx}
          className="absolute w-[6px] h-[6px] rounded-full bg-luciernaga/80"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2.5 + Math.random() * 1.5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </motion.div>
  </div>
);

export default BurbujaTapaMarca;
