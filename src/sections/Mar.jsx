import React from "react";
import { motion } from "framer-motion";
import DecoracionesMarinas from "../components/Mar/DecoracionesMarinas";

// Traducciones por idioma
const traducciones = {
  es: {
    titulo: "Mis Proyectos",
    proyectos: [
      {
        nombre: "Colombian Core",
        descripcion: "Plataforma que celebra y conecta el talento colombiano.",
      },
      {
        nombre: "RAN",
        descripcion: "Sistema de gestión para registros académicos nacionales.",
      },
      {
        nombre: "Martínez Iure",
        descripcion: "Asistente legal moderno con enfoque en experiencia de usuario.",
      },
      {
        nombre: "Infinicode",
        descripcion: "Plataforma educativa para programadores creativos.",
      },
    ],
  },
  en: {
    titulo: "My Projects",
    proyectos: [
      {
        nombre: "Colombian Core",
        descripcion: "Platform that celebrates and connects Colombian talent.",
      },
      {
        nombre: "RAN",
        descripcion: "Management system for national academic records.",
      },
      {
        nombre: "Martínez Iure",
        descripcion: "Modern legal assistant focused on user experience.",
      },
      {
        nombre: "Infinicode",
        descripcion: "Educational platform for creative coders.",
      },
    ],
  },
  pt: {
    titulo: "Meus Projetos",
    proyectos: [
      {
        nombre: "Colombian Core",
        descripcion: "Plataforma que celebra e conecta talentos colombianos.",
      },
      {
        nombre: "RAN",
        descripcion: "Sistema de gestão para registros acadêmicos nacionais.",
      },
      {
        nombre: "Martínez Iure",
        descripcion: "Assistente jurídico moderno com foco na experiência do usuário.",
      },
      {
        nombre: "Infinicode",
        descripcion: "Plataforma educacional para programadores criativos.",
      },
    ],
  },
};

const Mar = ({ lang }) => {
  const t = traducciones[lang] || traducciones.es;

  // Asumiendo que los links e imágenes no cambian por idioma
  const enlaces = [
    "https://colombiacore.netlify.app/",
    "https://github.com/JhosepCastro/RAN-",
    "https://martineziure.netlify.app/",
    "https://infinicode.vercel.app/",
  ];
  const imagenes = [
    "https://blog.novasafra.com.br/wp-content/uploads/2022/01/6-dicas-de-sucesso-para-alavancar-as-vendas-do-seu-delivery-780x450.jpeg",
    "/assets/ranlogo.jpg",
    "https://martineziure.netlify.app/assets/logo.webp",
    "https://infinicode.vercel.app/logo1.png",
  ];

  return (
    <section
      id="mar"
      className="relative w-full min-h-screen overflow-hidden bg-[#0C1A2C] text-marfil flex flex-col items-center justify-center px-4 pt-16"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/videoonyo.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      <div className="absolute inset-0 bg-[#0C1A2C]/50 backdrop-blur-sm z-10" />
      <DecoracionesMarinas />

      <motion.h2
        className="z-30 text-3xl md:text-5xl font-fraunces font-bold mb-8 text-center drop-shadow-[0_0_10px_#F0BFD3]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t.titulo}
      </motion.h2>

      <div className="relative z-30 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl">
        {t.proyectos.map((proyecto, i) => (
          <motion.a
            key={i}
            href={enlaces[i]}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -6, 0, 6, 0] }}
            transition={{ duration: 2 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="relative w-[90px] h-[90px] md:w-[100px] md:h-[100px] rounded-full border-[2px] border-[#BDE3D0]/30 
                bg-gradient-to-br from-[#BDE3D0]/10 via-[#C3B2E4]/20 to-[#8699C7]/20 shadow-[0_0_12px_#BDE3D0] 
                backdrop-blur-xl animate-flotarBurbujas animate-girarBurbuja"
            >
              <div className="absolute top-1 left-1 w-5 h-5 bg-white/60 rounded-full blur-[3px] opacity-80 rotate-[20deg]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 bg-white/30 rounded-full blur-sm opacity-50" />
              <img
                src={imagenes[i]}
                alt={proyecto.nombre}
                className="absolute inset-0 w-full h-full object-cover rounded-full opacity-90 mix-blend-lighten"
              />
            </motion.div>

            <motion.div
              className="mt-2 w-[160px] md:w-[180px] text-[11px] text-marfil bg-[#0C0A12]/90 p-2 rounded-lg shadow-lg backdrop-blur-sm font-quicksand z-50
                         ring-1 ring-aurora/40 drop-shadow-[0_0_8px_#F0BFD3] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition"
            >
              {proyecto.descripcion}
            </motion.div>

            <span className="mt-2 text-sm font-semibold text-center">
              {proyecto.nombre}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Mar;
