import { motion } from "framer-motion";

const decoraciones = [
  /* 🐠 Ponyo centrado */
{
  src: "/assets/ponyoagua.png",
  alt: "Ponyo flotando",
  className:
    // 📌 Posición pegada a la esquina inferior izquierda
    "absolute left-0 bottom-0 " +
    // 📱 En móviles lo subimos un poco para que no estorbe
    "sm:bottom-2 sm:left-2 " +
    // 💻 En escritorio se queda fijo tapando marca
    "lg:bottom-[0] lg:left-[0] " +
    // 📐 Tamaños por dispositivo
    "w-36 sm:w-44 md:w-48 lg:w-56 xl:w-60 " +
    // ✨ Estética y z-index
    "opacity-25 mix-blend-soft-light z-40",
}

,

  /* 🎩 Otras decoraciones */
{
  src: "/assets/totoro.png",
  alt: "Totoro",
  className: `
    absolute
    right-[6%] sm:right-[10%] md:right-[12%] lg:right-[14%]
    top-[45%] sm:top-[65%] md:top-[60%] lg:top-[60%]
    w-32 sm:w-40 md:w-48 lg:w-56
    z-40
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
    bottom-[-4%]
    sm:bottom-[-6%]
    md:bottom-[-10%]
    lg:bottom-[-14%]
    w-44
    sm:w-48
    md:w-56
    lg:w-64
  `
},

  {
    src: "/assets/mononoke.png",
    alt: "Mononoke",
    className: "absolute right-[5%] top-[30%] w-12 sm:w-16 md:w-20",
  },
  {
    src: "/assets/bolitas.png",
    alt: "Bolas mágicas",
    className: "absolute left-[13%] top-[25%] w-10 sm:w-14 md:w-16",
  },
  {
    src: "/assets/totoros.png",
    alt: "Totoritos",
    className: "absolute right-[28%] bottom-[1%] w-32 sm:w-64 md:w-64",
  },
  {
    src: "/assets/bolita.png",
    alt: "Bolita",
    className: "absolute right-[10%] top-[10%] w-10 sm:w-16 md:w-20",
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
