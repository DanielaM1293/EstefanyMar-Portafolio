/* src/components/LanguageSelector.jsx */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";

const flags = [
  { code: "es", label: "Español", src: "/flags/co.png" },
  { code: "en", label: "English", src: "/flags/en.png" },
  { code: "pt", label: "Português", src: "/flags/pt.png" },
];

export default function LanguageSelector({ lang, setLang }) {
  const [open, setOpen] = useState(false);

  /* ----- variantes de animación ----- */
  const list = {
    hidden: { opacity: 0, y: 12, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 22 },
    },
    exit: { opacity: 0, y: 12, scale: 0.95, transition: { duration: 0.18 } },
  };

  /* genera 12 estrellitas para el burst */
  const Sparkles = () => (
    <>
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 bg-luciernaga rounded-full pointer-events-none"
          style={{
            left: "50%",
            top: "50%",
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            x: (Math.random() - 0.5) * 60,
            y: (Math.random() - 0.8) * 80,
            opacity: 0,
            scale: 0.2,
          }}
          transition={{ duration: 0.9, delay: i * 0.04 }}
        />
      ))}
    </>
  );

  return (
    <>
      {/* ------------ MÓVIL: esquina inferior izquierda ------------ */}
      <div className="fixed bottom-4 left-4 z-50 md:hidden">
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          aria-label="Select language"
          onClick={() => setOpen(!open)}
          className="w-12 h-12 rounded-full bg-white/0 hover:bg-white/10 text-marfil backdrop-blur-md shadow-lg flex items-center justify-center transition"
        >
          <Globe size={22} />
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={list}
              initial="hidden"
              animate="show"
              exit="exit"
              className="mt-3 flex flex-col gap-2 p-3 rounded-xl bg-white/0 backdrop-blur-md shadow-2xl relative"
            >
              {/* burst de estrellitas */}
              <Sparkles />
              {flags.map(({ code, label, src }) => (
                <motion.button
                  key={code}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setLang(code);
                    setOpen(false);
                  }}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 ring-offset-2 ${
                    lang === code ? "ring-2 ring-luciernaga" : ""
                  }`}
                >
                  <img src={src} alt={label} className="w-5 h-5" />
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ------------ DESKTOP/TABLET: centro derecho ------------ */}
      <div className="hidden md:flex fixed top-1/2 right-3 -translate-y-1/2 z-50 flex-col gap-3 p-2 rounded-xl bg-white/0 backdrop-blur-md shadow-xl">
        {flags.map(({ code, label, src }) => (
          <motion.button
            key={code}
            whileHover={{ scale: 1.1, rotate: 6 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setLang(code)}
            className={`group w-10 h-10 flex items-center justify-center rounded-full ring-offset-2 bg-white/0 hover:bg-white/0 transition ${
              lang === code ? "ring-2 ring-luciernaga" : ""
            }`}
          >
            <img src={src} alt={label} className="w-5 h-5" />
            <span className="absolute left-full ml-2 bg-black/70 text-marfil text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-10 transition-opacity whitespace-nowrap">
              {label}
            </span>
          </motion.button>
        ))}
      </div>
    </>
  );
}
