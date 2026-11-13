import { motion } from "framer-motion";

const decoraciones = [
  /* 🐠 Ponyo centrado */
{
  src: "/assets/ponyoagua.png",
  alt: "Ponyo flotando",
  className:
    // 📌 Posición pegada a la esquina inferior izquierda
    "absolute left-0 bottom-0 " +
    // 📐 Tamaños por dispositivo
    "w-28 sm:w-40 md:w-48 lg:w-56 " +
    // ✨ Estética y z-index
    "opacity-25 mix-blend-soft-light z-40",
}

,

  /* 🎩 Otras decoraciones */
{
  src: "/assets/totoro.png",
  alt: "Totoro",
  className: `
    absolute hidden 2xl:block
    right-[2%] top-[55%]
    w-48
    pointer-events-none
  `,

}

,

{
  src: "/assets/chihirofantasma.png",
  alt: "Chihiro fantasma",
  className: `
    absolute
    right-0
    sm:right-[-10]
    md:right-0
    lg:right-10
    bottom-0
    w-36
    sm:w-44
    md:w-52
    lg:w-60
  `
},

  {
    src: "/assets/mononoke.png",
    alt: "Mononoke",
    className: "absolute hidden 2xl:block right-[2%] top-[30%] w-16",
  },
  {
    src: "/assets/bolitas.png",
    alt: "Bolas mágicas",
    className: "absolute hidden 2xl:block left-[2%] top-[25%] w-14",
  },
  {
    src: "/assets/totoros.png",
    alt: "Totoritos",
    className: "absolute right-[28%] bottom-[1%] w-28 sm:w-44 md:w-56",
  },
  {
    src: "/assets/bolita.png",
    alt: "Bolita",
    className: "absolute hidden lg:block right-[3%] top-[12%] w-14",
  },
];

const DecoracionesMarinas = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {decoraciones.map(({ src, className, alt, priority }, i) => (
        <motion.img
          key={i}
          src={src}
          alt={alt}
          className={`select-none rounded-full ${className}`}
          initial={{ y: 8, rotate: 0, opacity: 0.9 }}
          animate={{ y: [8, 0, 8], rotate: [0, 2, -2, 0], opacity: 0.9 }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{ zIndex: priority ? 50 : 10 }}
        />
      ))}
    </div>
  );
};

export default DecoracionesMarinas;
