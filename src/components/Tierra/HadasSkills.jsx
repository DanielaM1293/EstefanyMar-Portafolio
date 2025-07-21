// HadasSkills.jsx
import React from "react";
import { motion } from "framer-motion";
import ParticulasMagicas from "./ParticulasMagicas";

// 🌍 Traducciones por idioma
const traducciones = {
  es: {
    categorias: {
      tecnologias: "🛠️ Tecnologías",
      diseno: "🎨 Diseño y UX",
      productividad: "📋 Productividad",
      extras: "✨ Extras mágicos",
    },
    habilidades: {
      javascript: {
        nombre: "JavaScript",
        descripcion: "Lenguaje base del desarrollo web.",
      },
      react: {
        nombre: "React",
        descripcion: "Librería para interfaces dinámicas.",
      },
      tailwind: {
        nombre: "Tailwind CSS",
        descripcion: "Framework de CSS utilitario.",
      },
      figma: {
        nombre: "Figma (UI/UX)",
        descripcion: "Herramienta para diseño de interfaces.",
      },
      photoshop: {
        nombre: "Photoshop",
        descripcion: "Edición visual y composición.",
      },
      office: {
        nombre: "Microsoft Office",
        descripcion: "Word, Excel, PowerPoint.",
      },
      notion: {
        nombre: "Notion",
        descripcion: "Organización y gestión personal.",
      },
      trello: {
        nombre: "Trello",
        descripcion: "Gestión de tareas visuales.",
      },
      ingles: {
        nombre: "Inglés",
        descripcion: "Dominio del idioma para comunicación global.",
      },
      vm: {
        nombre: "VirtualBox / VMs",
        descripcion: "Manejo de máquinas virtuales.",
      },
    },
  },
  en: {
    categorias: {
      tecnologias: "🛠️ Technologies",
      diseno: "🎨 Design & UX",
      productividad: "📋 Productivity",
      extras: "✨ Extra Magic",
    },
    habilidades: {
      javascript: {
        nombre: "JavaScript",
        descripcion: "Core language for web development.",
      },
      react: {
        nombre: "React",
        descripcion: "Library for dynamic interfaces.",
      },
      tailwind: {
        nombre: "Tailwind CSS",
        descripcion: "Utility-first CSS framework.",
      },
      figma: {
        nombre: "Figma (UI/UX)",
        descripcion: "Interface design tool.",
      },
      photoshop: {
        nombre: "Photoshop",
        descripcion: "Visual editing and composition.",
      },
      office: {
        nombre: "Microsoft Office",
        descripcion: "Word, Excel, PowerPoint.",
      },
      notion: {
        nombre: "Notion",
        descripcion: "Organization and personal management.",
      },
      trello: {
        nombre: "Trello",
        descripcion: "Visual task management.",
      },
      ingles: {
        nombre: "English",
        descripcion: "Language proficiency for global communication.",
      },
      vm: {
        nombre: "VirtualBox / VMs",
        descripcion: "Virtual machine handling.",
      },
    },
  },
  pt: {
    categorias: {
      tecnologias: "🛠️ Tecnologias",
      diseno: "🎨 Design e UX",
      productividad: "📋 Produtividade",
      extras: "✨ Extras mágicos",
    },
    habilidades: {
      javascript: {
        nombre: "JavaScript",
        descripcion: "Linguagem base do desenvolvimento web.",
      },
      react: {
        nombre: "React",
        descripcion: "Biblioteca para interfaces dinâmicas.",
      },
      tailwind: {
        nombre: "Tailwind CSS",
        descripcion: "Framework de CSS utilitário.",
      },
      figma: {
        nombre: "Figma (UI/UX)",
        descripcion: "Ferramenta de design de interfaces.",
      },
      photoshop: {
        nombre: "Photoshop",
        descripcion: "Edição visual e composição.",
      },
      office: {
        nombre: "Microsoft Office",
        descripcion: "Word, Excel, PowerPoint.",
      },
      notion: {
        nombre: "Notion",
        descripcion: "Organização e gestão pessoal.",
      },
      trello: {
        nombre: "Trello",
        descripcion: "Gestão visual de tarefas.",
      },
      ingles: {
        nombre: "Inglês",
        descripcion: "Domínio do idioma para comunicação global.",
      },
      vm: {
        nombre: "VirtualBox / VMs",
        descripcion: "Gerenciamento de máquinas virtuais.",
      },
    },
  },
};

// 🌟 Íconos por habilidad
const iconos = {
  javascript: "https://cdn-icons-png.flaticon.com/128/16511/16511135.png",
  react: "https://cdn-icons-png.flaticon.com/128/3393/3393920.png",
  tailwind: "https://www.svgrepo.com/show/333609/tailwind-css.svg",
  figma: "https://cdn-icons-png.flaticon.com/128/5968/5968704.png",
  photoshop: "https://www.svgrepo.com/show/31529/photoshop.svg",
  office: "https://cdn-icons-png.flaticon.com/128/1/1816.png",
  notion: "https://cdn-icons-png.flaticon.com/128/5968/5968885.png",
  trello: "https://www.svgrepo.com/show/394518/trello.svg",
  ingles: "https://www.svgrepo.com/show/532170/english-to-chinese.svg",
  vm: "https://www.svgrepo.com/show/448309/azure-vms.svg",
};

const HadasSkills = ({ lang }) => {
  const t = traducciones[lang] || traducciones.es;

  const categorias = [
    {
      titulo: t.categorias.tecnologias,
      claves: ["javascript", "react", "tailwind"],
    },
    {
      titulo: t.categorias.diseno,
      claves: ["figma", "photoshop"],
    },
    {
      titulo: t.categorias.productividad,
      claves: ["office", "notion", "trello"],
    },
    {
      titulo: t.categorias.extras,
      claves: ["ingles", "vm"],
    },
  ];

  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {categorias.map((grupo, i) => (
          <motion.div
            key={grupo.titulo}
            className="flex flex-col items-center text-center font-quicksand text-marfil"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-aurora mb-6 drop-shadow-[0_0_5px_#E8A9BE]">
              {grupo.titulo}
            </h3>

            <div className="flex flex-wrap justify-center gap-6">
              {grupo.claves.map((clave) => {
                const { nombre, descripcion } = t.habilidades[clave];
                const icono = iconos[clave];
                return (
                  <motion.div
                    key={clave}
                    className="relative flex flex-col items-center text-center group w-[80px]"
                    whileHover={{ scale: 1.05, zIndex: 30 }}
                  >
                    <div className="absolute inset-0 hidden group-hover:block pointer-events-none z-20">
                      <ParticulasMagicas />
                    </div>

                    <motion.div
                      className="absolute w-[40px] h-[40px] rounded-full bg-aurora/50 blur-[10px] z-[-1]"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />

                    <motion.img
                      src={icono}
                      alt={nombre}
                      className="w-[50px] h-[50px] object-contain transition-transform duration-300 drop-shadow-[0_0_8px_#F0BFD3] group-hover:drop-shadow-[0_0_16px_#F0BFD3]/90"
                      whileHover={{ rotate: [0, -6, 6, 0], scale: 1.2 }}
                    />

                    <span className="mt-2 text-xs font-semibold opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {nombre}
                    </span>

                    <motion.div
                      className="absolute mt-14 w-[170px] text-[11px] leading-tight text-marfil bg-[#0C0A12]/90 p-2 rounded-lg shadow-lg backdrop-blur-sm font-quicksand z-[999] pointer-events-none
                               ring-1 ring-aurora/40 drop-shadow-[0_0_8px_#F0BFD3] transition duration-300
                               opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                    >
                      {descripcion}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HadasSkills;