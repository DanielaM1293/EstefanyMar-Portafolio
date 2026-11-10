// src/data/education.js
// ─────────────────────────────────────────────────────────────
// Formación y certificaciones. Para agregar una nueva basta con
// añadir un objeto a `education` (las más recientes primero).
//
//  - emoji:  ícono de la tarjeta
//  - titulo / lugar / detalle: textos por idioma
//  - fecha:  texto libre (año o rango)
// ─────────────────────────────────────────────────────────────

export const education = [
  {
    id: "ing-software",
    emoji: "🎓",
    titulo: {
      es: "Ingeniería de Software",
      en: "B.Sc. in Software Engineering",
      pt: "Engenharia de Software",
    },
    lugar: "Politécnico Grancolombiano",
    detalle: {
      es: "En curso.",
      en: "In progress.",
      pt: "Em andamento.",
    },
  },
  {
    id: "cs50x",
    emoji: "🏛️",
    fecha: "2026",
    titulo: {
      es: "CS50x: Introducción a las Ciencias de la Computación",
      en: "CS50x: Introduction to Computer Science",
      pt: "CS50x: Introdução à Ciência da Computação",
    },
    lugar: "Harvard University",
    detalle: {
      es: "Con proyecto final full-stack: Mi Mundo.",
      en: "With a full-stack final project: Mi Mundo.",
      pt: "Com projeto final full-stack: Mi Mundo.",
    },
  },
  {
    id: "gci",
    emoji: "🗼",
    fecha: "2026",
    titulo: {
      es: "GCI World 2026",
      en: "GCI World 2026",
      pt: "GCI World 2026",
    },
    lugar: "University of Tokyo",
    detalle: {
      es: "Análisis de datos y machine learning.",
      en: "Data analysis and machine learning.",
      pt: "Análise de dados e machine learning.",
    },
  },
  {
    id: "code-in-place",
    emoji: "🐍",
    fecha: "2026",
    titulo: {
      es: "Code in Place",
      en: "Code in Place",
      pt: "Code in Place",
    },
    lugar: "Stanford University",
    detalle: {
      es: "Programación con Python.",
      en: "Programming with Python.",
      pt: "Programação com Python.",
    },
  },
  {
    id: "sena-tecnologo",
    emoji: "💻",
    fecha: "2023 – 2025",
    titulo: {
      es: "Tecnóloga en Análisis y Desarrollo de Software",
      en: "Technologist in Software Analysis and Development",
      pt: "Tecnóloga em Análise e Desenvolvimento de Software",
    },
    lugar: "SENA",
    detalle: { es: "", en: "", pt: "" },
  },
  {
    id: "ai-solutions",
    emoji: "🤖",
    fecha: "2025",
    titulo: {
      es: "Implementación de Soluciones de IA",
      en: "AI Solutions Implementation",
      pt: "Implementação de Soluções de IA",
    },
    lugar: "SENA",
    detalle: { es: "48 horas.", en: "48 hours.", pt: "48 horas." },
  },
  {
    id: "react-redux",
    emoji: "⚛️",
    fecha: "2024",
    titulo: {
      es: "Desarrollo Web Frontend: React y Redux",
      en: "Frontend Web Development: React & Redux",
      pt: "Desenvolvimento Web Frontend: React e Redux",
    },
    lugar: "SENA · AHK · KeyCode",
    detalle: { es: "80 horas.", en: "80 hours.", pt: "80 horas." },
  },
  {
    id: "cisco",
    emoji: "🌐",
    titulo: {
      es: "Cisco Networking Academy",
      en: "Cisco Networking Academy",
      pt: "Cisco Networking Academy",
    },
    lugar: "Cisco",
    detalle: {
      es: "Python Essentials 1 y 2 · English for IT 2 · Network Support and Security · CCNA: Introduction to Networks (Letter of Merit).",
      en: "Python Essentials 1 & 2 · English for IT 2 · Network Support and Security · CCNA: Introduction to Networks (Letter of Merit).",
      pt: "Python Essentials 1 e 2 · English for IT 2 · Network Support and Security · CCNA: Introduction to Networks (Letter of Merit).",
    },
  },
];

export const educationTitle = {
  es: { titulo: "Raíces: formación y cursos", intro: "Lo que he estudiado y las certificaciones que respaldan mi camino." },
  en: { titulo: "Roots: education & courses", intro: "What I've studied and the certifications behind my path." },
  pt: { titulo: "Raízes: formação e cursos", intro: "O que estudei e as certificações que respaldam meu caminho." },
};
