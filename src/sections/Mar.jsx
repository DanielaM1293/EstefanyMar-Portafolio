import React from "react";
import { motion } from "framer-motion";
import DecoracionesMarinas from "../components/Mar/DecoracionesMarinas";
import BurbujaTapaMarca from "../components/Mar/BurbujaTapaMarca";

// Traducciones actualizadas (incluye Grupo Almanza)
const traducciones = {
  es: {
    titulo: "Mis Proyectos",
    proyectos: [
      { nombre: "Colombian Core", descripcion: "Plataforma que celebra y conecta el talento colombiano." },
      { nombre: "RAN", descripcion: "Sistema de gestión para registros académicos nacionales." },
      { nombre: "Martínez Iure", descripcion: "Asistente legal moderno con enfoque en experiencia de usuario." },
      { nombre: "Infinicode", descripcion: "Plataforma educativa para programadores creativos." },
      { nombre: "Grupo Almanza", descripcion: "Sitio web corporativo de servicios legales." }
    ],
  },
  en: {
    titulo: "My Projects",
    proyectos: [
      { nombre: "Colombian Core", descripcion: "Platform that celebrates and connects Colombian talent." },
      { nombre: "RAN", descripcion: "Management system for national academic records." },
      { nombre: "Martínez Iure", descripcion: "Modern legal assistant focused on user experience." },
      { nombre: "Infinicode", descripcion: "Educational platform for creative coders." },
      { nombre: "Grupo Almanza", descripcion: "Corporate website for legal services firm." }
    ],
  },
  pt: {
    titulo: "Meus Projetos",
    proyectos: [
      { nombre: "Colombian Core", descripcion: "Plataforma que celebra e conecta talentos colombianos." },
      { nombre: "RAN", descripcion: "Sistema de gestão para registros acadêmicos nacionais." },
      { nombre: "Martínez Iure", descripcion: "Assistente jurídico moderno com foco na experiência do usuário." },
      { nombre: "Infinicode", descripcion: "Plataforma educacional para programadores criativos." },
      { nombre: "Grupo Almanza", descripcion: "Site corporativo para escritório de advocacia." }
    ],
  },
};

const Mar = ({ lang }) => {
  const t = traducciones[lang] || traducciones.es;

  // Enlaces actualizados con Grupo Almanza
  const enlaces = [
    "https://colombiacore.netlify.app/",
    "https://github.com/JhosepCastro/RAN-",
    "https://martineziure.netlify.app/",
    "https://infinicode.vercel.app/",
    "https://grupo-almanza.com/",
  ];

  // Imágenes actualizadas con Grupo Almanza
  const imagenes = [
    "/assets/colombiacore.png",
    "/assets/ranlogo.jpg",
    "https://martineziure.netlify.app/assets/logo.webp",
    "https://infinicode.vercel.app/logo1.png",
    "/assets/grupo_almanza_logo.png",
  ];

  return (
    <section
      id="mar"
      className="relative w-full min-h-screen overflow-hidden bg-[#0C1A2C] text-marfil flex flex-col items-center justify-center px-4 pt-16"
    >
      {/* Video de fondo */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/assets/videoonyo.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-[#0C1A2C]/50 backdrop-blur-sm z-10" />
      <DecoracionesMarinas />
      <BurbujaTapaMarca />

      {/* Título */}
      <motion.h2
        className="z-30 text-3xl md:text-5xl font-fraunces font-bold mb-8 text-center drop-shadow-[0_0_10px_#F0BFD3]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t.titulo}
      </motion.h2>

      {/* Grid de proyectos (ahora puede haber 5 burbujas) */}
<div className="relative z-30 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 
+               gap-y-18 sm:gap-y-18 gap-x-16 sm:gap-x-18 md:gap-x-28 xl:gap-x-16 
+               max-w-[1500px] w-full px-2 sm:px- md:px-14 xl:px-20 justify-between">

  {t.proyectos.map((proyecto, i) => (
    <motion.a
      key={i}
      href={enlaces[i]}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group flex flex-col items-center justify-start w-full max-w-[220px]"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      {/* 💎 Burbuja mágica */}
      <motion.div
     className="relative w-[180px] sm:w-[210px] md:w-[240px] aspect-square
              rounded-full border-[3px] border-[#BDE3D0]/30
              bg-gradient-to-br from-[#BDE3D0]/10 via-[#C3B2E4]/20 to-[#8699C7]/20
              shadow-[0_0_24px_#BDE3D0] backdrop-blur-xl
              animate-[spin_120s_linear_infinite]
              hover:shadow-[0_0_28px_#E0F7FF] hover:scale-[1.05] transition duration-300"
>
        {/* ✨ Reflejos */}
        <div className="absolute top-4 left-4 w-6 h-6 bg-white/50 rounded-full blur-[6px]" />
        <div className="absolute bottom-4 right-4 w-4 h-4 bg-white/30 rounded-full blur-[3px]" />

        {/* 🖼 Imagen uniforme */}
        <img
          src={imagenes[i]}
          alt={proyecto.nombre}
          className="absolute inset-0 w-full h-full rounded-full opacity-90 mix-blend-lighten object-contain p-4"
        />
      </motion.div>

      {/* 🏷 Nombre del proyecto */}
      <span className="mt-3 text-sm sm:text-base font-semibold text-center text-marfil leading-tight">
        {proyecto.nombre}
      </span>

      {/* Tooltip flotante */}
      <motion.div
        className="mt-2 w-full text-xs text-marfil bg-[#0C0A12]/90 p-2 rounded-lg shadow-md backdrop-blur-md
                   ring-1 ring-aurora/40 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-4px] 
                   transition duration-500 animate-flotarTooltip hover:shadow-[0_0_10px_#E0F7FF]"
      >
        {proyecto.descripcion}
      </motion.div>
    </motion.a>
  ))}
</div>

    </section>
  );
};

export default Mar;
