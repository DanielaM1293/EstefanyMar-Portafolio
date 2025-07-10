import { motion } from 'framer-motion';

const decoraciones = [
{
  src: '/assets/ponyoagua.png',
  alt: 'Ponyo flotando',
  className: 'left-[19%] top-[80%] sm:top-[40%] sm:left-0 w-40 sm:w-48 md:w-64 opacity-30 mix-blend-soft-light z-10',

},
  {
    src: '/assets/totoro.png',
    alt: 'Totoro',
    className:
      'right-[0%] bottom-[-3%] w-32 sm:w-64 md:w-32 lg:w-32 xl:w-40',
  },
  {
    src: '/assets/chihirofantasma.png',
    alt: 'Chihiro fantasma',
    className:
      'left-[5%] bottom-[5%] w-16 sm:w-24 md:w-28 lg:w-32',
  },
  {
    src: '/assets/mononoke.png',
    alt: 'Mononoke',
    className:
      'right-[5%] top-[30%] w-12 sm:w-16 md:w-20',
  },
  {
    src: '/assets/bolitas.png',
    alt: 'Bolas mágicas',
    className:
      'left-[13%] top-[25%] w-10 sm:w-14 md:w-16',
  },
  {
    src: '/assets/totoros.png',
    alt: 'Totoritos',
    className:
      'right-[15%] bottom-[30%] w-10 sm:w-14 md:w-16',
      
  },
  {
    src: '/assets/bolita.png',
    alt: 'Bolita',
    className:
      'right-[10%] top-[10%] w-10 sm:w-16 md:w-20',
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
          className={`absolute ${className} select-none rounded-full`}
          initial={{ y: 8, rotate: 0, opacity: 0.9 }}
          animate={{
            y: [8, 0, 8],
            rotate: [0, 2, -2, 0],
            opacity: 0.9,
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          style={{ zIndex: priority ? 50 : 10 }}
        />
      ))}
    </div>
  );
};

export default DecoracionesMarinas;
