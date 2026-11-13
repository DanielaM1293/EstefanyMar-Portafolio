import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Code2,
  Settings,
  Mail,
  MessageCircleHeart,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const translations = {
  es: {
    inicio: "Inicio",
    sobreMi: "Sobre mí",
    habilidades: "Habilidades",
    formacion: "Formación",
    proyectos: "Proyectos",
    contacto: "Contacto",
    github: "GitHub",
    testimonios: "Testimonios",
  },
  en: {
    inicio: "Home",
    sobreMi: "About Me",
    habilidades: "Skills",
    formacion: "Education",
    proyectos: "Projects",
    contacto: "Contact",
    github: "GitHub",
    testimonios: "Testimonials",
  },
  pt: {
    inicio: "Início",
    sobreMi: "Sobre mim",
    habilidades: "Habilidades",
    formacion: "Formação",
    proyectos: "Projetos",
    contacto: "Contato",
    github: "GitHub",
    testimonios: "Depoimentos",
  },
};

const Navbar = ({ lang = "es" }) => {
  const t = translations[lang] || translations.es;

  const navItems = [
    { icon: <Home />, label: t.inicio, href: "#espacio" },
    { icon: <Sparkles />, label: t.sobreMi, href: "#cielo" },
    { icon: <Settings />, label: t.habilidades, href: "#tierra" },
    { icon: <GraduationCap />, label: t.formacion, href: "#raices" },
    { icon: <Code2 />, label: t.proyectos, href: "#mar" },
    { icon: <Mail />, label: t.contacto, href: "#cortehielo" },
    {
      icon: <MessageCircleHeart />,
      label: t.testimonios,
      href: "/testimonios",
      external: false,
    },
    {
      icon: <FaGithub className="text-xl" />,
      label: t.github,
      href: "https://github.com/DanielaM1293",
      external: true,
    },
  ];

  // Sección visible en pantalla (para resaltar su botón en el menú)
  const [activa, setActiva] = useState("");
  useEffect(() => {
    const ids = ["espacio", "cielo", "tierra", "raices", "mar", "inframundo", "cortehielo"];
    const elementos = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elementos.length || !("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) setActiva(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" } // cuenta la sección que cruza la mitad de la pantalla
    );
    elementos.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Clases compartidas por todos los botones del menú
  const itemBase =
    "group relative flex-shrink-0 flex items-center justify-center rounded-full " +
    "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 " +
    "hover:bg-[#C3B2E4] focus-visible:bg-[#C3B2E4] transition-colors duration-300";

  const iconClass =
    "text-[#F8F5F1] group-hover:text-[#0C0A12] group-focus-visible:text-[#0C0A12] transition-colors";

  // Etiqueta que aparece debajo del botón (solo con mouse; en táctil basta el ícono)
  const Tooltip = ({ children }) => (
    <span
      className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50
                 hidden md:block opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100
                 transition-opacity whitespace-nowrap rounded-full px-3 py-1 text-xs
                 bg-[#0C0A12]/95 text-[#F8F5F1] border border-[#8699C7]/60 shadow-lg"
    >
      {children}
    </span>
  );

  return (
    <motion.nav
      aria-label="Menú principal"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none"
    >
      <div
        className="
          pointer-events-auto flex items-center
          gap-1 xs:gap-1.5 sm:gap-3 md:gap-4
          bg-[#0C0A12]/85 border border-[#8699C7] rounded-full backdrop-blur-md shadow-lg
          py-1.5 px-2 sm:py-2 sm:px-4 md:px-6
          max-w-full
        "
      >
        {navItems.map(({ icon, label, href, external }) => {
          const esActivo = href === `#${activa}` || (activa === "inframundo" && href === "#cortehielo");
          const itemClass = `${itemBase} ${
            esActivo ? "bg-[#F5E6B3] ring-2 ring-[#F5E6B3]/60 scale-105" : "bg-[#E8A9BE]"
          }`;
          const content = (
            <>
              {React.cloneElement(icon, { size: 18, className: esActivo ? "text-[#0C0A12]" : iconClass })}
              <span className="sr-only">{label}</span>
              <Tooltip>{label}</Tooltip>
            </>
          );

          return (
            <motion.div
              key={href}
              whileHover={{ y: -3, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-shrink-0"
            >
              {external ? (
                <a
                  href={href}
                  title={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={itemClass}
                >
                  {content}
                </a>
              ) : href.startsWith("#") ? (
                <a href={href} title={label} aria-current={esActivo ? "true" : undefined} className={itemClass}>
                  {content}
                </a>
              ) : (
                <Link to={href} title={label} className={itemClass}>
                  {content}
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navbar;
