// src/data/projects.js
// ─────────────────────────────────────────────────────────────
// ÚNICO lugar donde se editan los proyectos del portafolio.
// Para agregar uno nuevo basta con añadir un objeto a `projects`.
//
//  - url:    enlace principal (demo / sitio en vivo). Si no hay, se usa `codigo`.
//  - codigo: repositorio en GitHub (opcional).
//  - imagen: logo en /public/assets (opcional). Si no hay, se muestra `icono`.
//  - stack:  tecnologías, separadas por " · " (opcional).
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    id: "mimundo",
    nombre: "Mi Mundo",
    icono: "🌍",
    url: "https://mimundo-y5rd.onrender.com",
    codigo: "https://github.com/DanielaM1293/MiMundo",
    stack: "Flask · SQLite · Tailwind · Chart.js",
    descripcion: {
      es: "App de productividad (proyecto final de CS50x): finanzas, agenda, tablero Kanban y seguimiento de cursos, con dashboards, modo oscuro, inglés/español y login seguro.",
      en: "Productivity app (CS50x final project): finances, agenda, Kanban board and course tracking, with dashboards, dark mode, English/Spanish and secure login.",
      pt: "App de produtividade (projeto final do CS50x): finanças, agenda, quadro Kanban e acompanhamento de cursos, com dashboards, modo escuro, inglês/espanhol e login seguro.",
    },
  },
  {
    id: "pixials",
    nombre: "Pixials News",
    icono: "📰",
    url: "https://pixials-news.netlify.app/",
    codigo: "https://github.com/DanielaM1293/Pixials-News-Angular",
    stack: "Angular · Tailwind",
    descripcion: {
      es: "Plataforma de noticias de tecnología con favoritos y un pequeño CRUD.",
      en: "Tech news platform with favorites and a small CRUD.",
      pt: "Plataforma de notícias de tecnologia com favoritos e um pequeno CRUD.",
    },
  },
  {
    id: "martineziure",
    nombre: "Martínez Iure",
    icono: "⚖️",
    imagen: "https://martineziure.netlify.app/assets/logo.webp",
    url: "https://martineziure.netlify.app/",
    codigo: "https://github.com/DanielaM1293/martineziure",
    stack: "HTML · CSS · Tailwind · JavaScript",
    descripcion: {
      es: "Sitio completo para un consultorio jurídico: landing responsive, formulario de contacto, SEO y páginas legales.",
      en: "Complete website for a law office: responsive landing page, contact form, SEO and legal pages.",
      pt: "Site completo para um escritório de advocacia: landing page responsiva, formulário de contato, SEO e páginas legais.",
    },
  },
  {
    id: "nfl",
    nombre: "NFL Draft Prediction",
    icono: "📊",
    codigo: "https://github.com/DanielaM1293/gci-world-2026",
    stack: "Python · Pandas · scikit-learn",
    descripcion: {
      es: "Modelo de clasificación (drafteado / no drafteado) evaluado con ROC-AUC. Proyecto de GCI World 2026, Universidad de Tokio.",
      en: "Classification model (drafted vs. not drafted) evaluated with ROC-AUC. GCI World 2026 project, University of Tokyo.",
      pt: "Modelo de classificação (draftado / não draftado) avaliado com ROC-AUC. Projeto do GCI World 2026, Universidade de Tóquio.",
    },
  },
  {
    id: "colombiancore",
    nombre: "Colombian Core",
    imagen: "/assets/colombiacore.png",
    url: "https://colombiacore.netlify.app/",
    descripcion: {
      es: "Plataforma que celebra y conecta el talento colombiano.",
      en: "Platform that celebrates and connects Colombian talent.",
      pt: "Plataforma que celebra e conecta talentos colombianos.",
    },
  },
  {
    id: "infinicode",
    nombre: "Infinicode",
    icono: "💻",
    imagen: "https://infinicode.vercel.app/logo1.png",
    url: "https://infinicode.vercel.app/",
    descripcion: {
      es: "Plataforma educativa para programadores creativos.",
      en: "Educational platform for creative coders.",
      pt: "Plataforma educacional para programadores criativos.",
    },
  },
  {
    id: "almanza",
    nombre: "Grupo Almanza",
    imagen: "/assets/grupo_almanza_logo.png",
    url: "https://grupo-almanza.com/",
    descripcion: {
      es: "Sitio web corporativo de servicios legales.",
      en: "Corporate website for a legal services firm.",
      pt: "Site corporativo de serviços jurídicos.",
    },
  },
  {
    id: "ran",
    nombre: "RAN",
    imagen: "/assets/ranlogo.jpg",
    url: "https://github.com/JhosepCastro/RAN-",
    descripcion: {
      es: "Tienda de plantas desarrollada en equipo.",
      en: "Plant store built as a team project.",
      pt: "Loja de plantas desenvolvida em equipe.",
    },
  },
];

export const projectsTitle = {
  es: "Mis Proyectos",
  en: "My Projects",
  pt: "Meus Projetos",
};

export const projectLinkLabels = {
  es: { demo: "Ver", codigo: "Código" },
  en: { demo: "View", codigo: "Code" },
  pt: { demo: "Ver", codigo: "Código" },
};
