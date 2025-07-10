import { motion } from "framer-motion";

const LanguageSelector = ({ lang, setLang }) => {
  const flags = [
    { code: "es", label: "Español", src: "/flags/co.png", color: "luciernaga" },
    { code: "en", label: "English", src: "/flags/en.png", color: "lavanda" },
    { code: "pt", label: "Português", src: "/flags/pt.png", color: "rocio" },
  ];

  return (
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-1/2 right-3 -translate-y-1/2 z-50 flex flex-col gap-3 p-2 rounded-xl backdrop-blur-md bg-transparent shadow-xl"
    >
      {flags.map(({ code, label, src, color }) => (
        <motion.button
          key={code}
          onClick={() => setLang(code)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`group relative w-10 h-10 flex items-center justify-center rounded-full bg-${color} hover:bg-${color}/80 transition-all duration-300 shadow-md ring-offset-2 ${
            lang === code ? `ring-2 ring-${color}` : ""
          }`}
        >
          <img
            src={src}
            alt={label}
            className="w-5 h-5 object-contain"
          />
          <span className="absolute left-full ml-2 bg-black/70 text-marfil text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default LanguageSelector;
