// HadasSkills.jsx
import React from "react";
import { motion } from "framer-motion";
import ParticulasMagicas from "./ParticulasMagicas";
import {
  SiHtml5,
  SiAngular,
  SiPython,
  SiFlask,
  SiNodedotjs,
  SiSqlite,
  SiPandas,
  SiScikitlearn,
  SiGit,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
  SiNotion,
  SiTrello,
  SiVirtualbox,
} from "react-icons/si";
import { FaMicrosoft, FaLanguage } from "react-icons/fa";

// 🌍 Traducciones por idioma
const traducciones = {
  es: {
    categorias: {
      tecnologias: "🛠️ Tecnologías",
      backend: "🧠 Backend y datos",
      herramientas: "🧰 Herramientas",
      diseno: "🎨 Diseño y UX",
      productividad: "📋 Productividad",
      extras: "✨ Extras mágicos",
    },
    habilidades: {
      html: {
        nombre: "HTML y CSS",
        descripcion: "Estructura y estilos de la web.",
      },
      angular: {
        nombre: "Angular",
        descripcion: "Framework para aplicaciones web.",
      },
      python: {
        nombre: "Python",
        descripcion: "Scripts, análisis de datos y backend.",
      },
      flask: {
        nombre: "Flask",
        descripcion: "Microframework web en Python.",
      },
      node: {
        nombre: "Node.js",
        descripcion: "JavaScript del lado del servidor.",
      },
      sql: {
        nombre: "SQL / SQLite",
        descripcion: "Bases de datos relacionales.",
      },
      pandas: {
        nombre: "Pandas y NumPy",
        descripcion: "Análisis y manipulación de datos.",
      },
      sklearn: {
        nombre: "scikit-learn",
        descripcion: "Machine learning en Python.",
      },
      git: {
        nombre: "Git y GitHub",
        descripcion: "Control de versiones y colaboración.",
      },
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
        descripcion: "Nivel B2 (intermedio alto) para comunicación global.",
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
      backend: "🧠 Backend & Data",
      herramientas: "🧰 Tools",
      diseno: "🎨 Design & UX",
      productividad: "📋 Productivity",
      extras: "✨ Extra Magic",
    },
    habilidades: {
      html: {
        nombre: "HTML & CSS",
        descripcion: "Web structure and styling.",
      },
      angular: {
        nombre: "Angular",
        descripcion: "Framework for web applications.",
      },
      python: {
        nombre: "Python",
        descripcion: "Scripting, data analysis and backend.",
      },
      flask: {
        nombre: "Flask",
        descripcion: "Python web microframework.",
      },
      node: {
        nombre: "Node.js",
        descripcion: "Server-side JavaScript.",
      },
      sql: {
        nombre: "SQL / SQLite",
        descripcion: "Relational databases.",
      },
      pandas: {
        nombre: "Pandas & NumPy",
        descripcion: "Data analysis and manipulation.",
      },
      sklearn: {
        nombre: "scikit-learn",
        descripcion: "Machine learning in Python.",
      },
      git: {
        nombre: "Git & GitHub",
        descripcion: "Version control and collaboration.",
      },
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
        descripcion: "B2 level (upper-intermediate) for global communication.",
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
      backend: "🧠 Backend e dados",
      herramientas: "🧰 Ferramentas",
      diseno: "🎨 Design e UX",
      productividad: "📋 Produtividade",
      extras: "✨ Extras mágicos",
    },
    habilidades: {
      html: {
        nombre: "HTML e CSS",
        descripcion: "Estrutura e estilos da web.",
      },
      angular: {
        nombre: "Angular",
        descripcion: "Framework para aplicações web.",
      },
      python: {
        nombre: "Python",
        descripcion: "Scripts, análise de dados e backend.",
      },
      flask: {
        nombre: "Flask",
        descripcion: "Microframework web em Python.",
      },
      node: {
        nombre: "Node.js",
        descripcion: "JavaScript no servidor.",
      },
      sql: {
        nombre: "SQL / SQLite",
        descripcion: "Bancos de dados relacionais.",
      },
      pandas: {
        nombre: "Pandas e NumPy",
        descripcion: "Análise e manipulação de dados.",
      },
      sklearn: {
        nombre: "scikit-learn",
        descripcion: "Machine learning em Python.",
      },
      git: {
        nombre: "Git e GitHub",
        descripcion: "Controle de versão e colaboração.",
      },
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
        descripcion: "Nível B2 (intermediário alto) para comunicação global.",
      },
      vm: {
        nombre: "VirtualBox / VMs",
        descripcion: "Gerenciamento de máquinas virtuais.",
      },
    },
  },
};

// 🌟 Íconos por habilidad
// Todos los íconos vienen de react-icons (van dentro del bundle, sin enlaces externos)
const iconos = {
  html: { Icon: SiHtml5, color: "#E34F26" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  react: { Icon: SiReact, color: "#61DAFB" },
  angular: { Icon: SiAngular, color: "#DD0031" },
  tailwind: { Icon: SiTailwindcss, color: "#38BDF8" },
  python: { Icon: SiPython, color: "#FFD43B" },
  flask: { Icon: SiFlask, color: "#F8F5F1" },
  node: { Icon: SiNodedotjs, color: "#5FA04E" },
  sql: { Icon: SiSqlite, color: "#7FB6E0" },
  pandas: { Icon: SiPandas, color: "#C3B2E4" },
  sklearn: { Icon: SiScikitlearn, color: "#F7931E" },
  git: { Icon: SiGit, color: "#F05032" },
  figma: { Icon: SiFigma, color: "#F24E1E" },
  photoshop: { Icon: SiAdobephotoshop, color: "#31A8FF" },
  office: { Icon: FaMicrosoft, color: "#EB3C00" },
  notion: { Icon: SiNotion, color: "#F8F5F1" },
  trello: { Icon: SiTrello, color: "#0079BF" },
  ingles: { Icon: FaLanguage, color: "#BDE3D0" },
  vm: { Icon: SiVirtualbox, color: "#8699C7" },
};

const HadasSkills = ({ lang }) => {
  const t = traducciones[lang] || traducciones.es;

  const categorias = [
    {
      titulo: t.categorias.tecnologias,
      claves: ["html", "javascript", "react", "angular", "tailwind"],
    },
    {
      titulo: t.categorias.backend,
      claves: ["python", "flask", "node", "sql", "pandas", "sklearn"],
    },
    {
      titulo: t.categorias.herramientas,
      claves: ["git", "figma", "photoshop"],
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {categorias.map((grupo, i) => (
          <motion.div
            key={grupo.titulo}
            className="flex flex-col items-center text-center font-quicksand text-marfil rounded-3xl border border-white/10 bg-[#0C0A12]/55 backdrop-blur-md p-6 sm:p-7 shadow-xl hover:border-aurora/40 transition-colors md:last:odd:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.15 }}
          >
            <h3 className="font-fraunces text-xl md:text-2xl font-bold text-aurora mb-6 drop-shadow-[0_0_5px_#E8A9BE]">
              {grupo.titulo}
            </h3>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-7">
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

                    <motion.div
                      className="w-[50px] h-[50px] flex items-center justify-center drop-shadow-[0_0_8px_#F0BFD3]"
                      whileHover={{ rotate: [0, -6, 6, 0], scale: 1.2 }}
                      aria-hidden="true"
                    >
                      {React.createElement(icono.Icon, { size: 40, color: icono.color })}
                    </motion.div>

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