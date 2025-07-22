import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Code2,
  Settings,
  Mail,
  MessageCircleHeart,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const translations = {
  es: {
    inicio: "Inicio",
    sobreMi: "Sobre mí",
    habilidades: "Habilidades",
    proyectos: "Proyectos",
    contacto: "Contacto",
    github: "GitHub",
    testimonios: "Testimonios",
  },
  en: {
    inicio: "Home",
    sobreMi: "About Me",
    habilidades: "Skills",
    proyectos: "Projects",
    contacto: "Contact",
    github: "GitHub",
    testimonios: "Testimonials",
  },
  pt: {
    inicio: "Início",
    sobreMi: "Sobre mim",
    habilidades: "Habilidades",
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

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <div
        className="
          flex gap-3
          overflow-x-auto no-scrollbar
          bg-[#0C0A12]/80 border border-[#8699C7] rounded-full backdrop-blur-md shadow-lg
          py-1 px-3
          sm:gap-3 sm:py-2 sm:px-5
          md:gap-4 md:py-2 md:px-6
          max-w-screen-lg
          mx-auto
        "
      >
        {navItems.map(({ icon, label, href, external }, index) =>
          external ? (
            <motion.a
              key={index}
              href={href}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                group
                flex-shrink-0
                w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10
                flex items-center justify-center rounded-full
                bg-[#E8A9BE] hover:bg-[#C3B2E4] transition-colors duration-300 relative
              "
            >
              {React.cloneElement(icon, {
                size: 18,
                className:
                  "text-[#F8F5F1] group-hover:text-[#0C0A12] transition-colors",
              })}
              <span className="absolute opacity-0 group-hover:opacity-100 text-xs mt-12 text-[#F8F5F1] transition-opacity whitespace-nowrap">
                {label}
              </span>
            </motion.a>
          ) : (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-shrink-0"
            >
              {href.startsWith("#") ? (
                <a
                  href={href}
                  title={label}
                  className="
                    group
                    w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10
                    flex items-center justify-center rounded-full
                    bg-[#E8A9BE] hover:bg-[#C3B2E4] transition-colors duration-300 relative
                  "
                >
                  {React.cloneElement(icon, {
                    size: 18,
                    className:
                      "text-[#F8F5F1] group-hover:text-[#0C0A12] transition-colors",
                  })}
                  <span className="absolute opacity-0 group-hover:opacity-100 text-xs mt-12 text-[#F8F5F1] transition-opacity whitespace-nowrap">
                    {label}
                  </span>
                </a>
              ) : (
                <Link
                  to={href}
                  title={label}
                  className="
                    group
                    w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10
                    flex items-center justify-center rounded-full
                    bg-[#E8A9BE] hover:bg-[#C3B2E4] transition-colors duration-300 relative
                  "
                >
                  {React.cloneElement(icon, {
                    size: 18,
                    className:
                      "text-[#F8F5F1] group-hover:text-[#0C0A12] transition-colors",
                  })}
                  <span className="absolute opacity-0 group-hover:opacity-100 text-xs mt-12 text-[#F8F5F1] transition-opacity whitespace-nowrap">
                    {label}
                  </span>
                </Link>
              )}
            </motion.div>
          )
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
