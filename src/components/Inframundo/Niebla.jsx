import { motion } from "framer-motion";

const Niebla = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-[45]">
      {/* Capa base difusa que cubre todo */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#b4bfd033]/30 via-[#a4b4cc22]/20 to-[#0A0A0C00] 
                   blur-3xl opacity-70"
        animate={{ x: [-20, 20, -20] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Niebla superior animada en burbujas suaves */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`top-${i}`}
          className="absolute rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl"
          style={{
            width: `${250 + i * 80}px`,
            height: `${140 + i * 50}px`,
            top: `${5 + i * 15}%`,
            left: `${i % 2 === 0 ? 5 + i * 10 : 60 - i * 5}%`,
            opacity: 0.18,
          }}
          animate={{ x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0] }}
          transition={{
            duration: 18 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Niebla densa y baja (suelo) */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`bottom-${i}`}
          className="absolute rounded-full bg-gradient-to-t from-white/20 to-transparent blur-3xl"
          style={{
            width: `${300 + i * 100}px`,
            height: `${100 + i * 60}px`,
            bottom: `${5 + i * 10}%`,
            left: `${i % 2 === 0 ? 0 + i * 10 : 50 - i * 10}%`,
            opacity: 0.3,
          }}
          animate={{ x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0] }}
          transition={{
            duration: 25 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Niebla;
