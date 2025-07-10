import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Code2,
  Settings,
  Mail,
  Snowflake,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const navItems = [
  { icon: <Home size={20} />, label: "Inicio", href: "#espacio" },
  { icon: <User size={20} />, label: "Sobre mí", href: "#cielo" },
  { icon: <Settings size={20} />, label: "Habilidades", href: "#tierra" },
  { icon: <Code2 size={20} />, label: "Proyectos", href: "#mar" },
  { icon: <Mail size={20} />, label: "Contacto", href: "#cortehielo" },
  {

    icon: <FaGithub className="text-xl" />,
    label: "GitHub",
    href: "https://github.com/DanielaM1293",
    external: true,
  },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <div className="flex gap-3 items-center bg-[#0C0A12]/80 border border-[#8699C7] rounded-full backdrop-blur-md shadow-lg py-2 px-4">
        {navItems.map(({ icon, label, href, external }, index) => (
          <motion.a
            key={index}
            href={href}
            title={label}
            target={external ? "_blank" : "_self"}
            rel={external ? "noopener noreferrer" : undefined}
            whileHover={{ y: -6, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#E8A9BE] hover:bg-[#C3B2E4] transition-colors duration-300 relative"
          >
            {React.cloneElement(icon, {
              className:
                "text-[#F8F5F1] group-hover:text-[#0C0A12] transition-colors",
            })}
            <span className="absolute opacity-0 group-hover:opacity-100 text-xs mt-12 text-[#F8F5F1] transition-opacity whitespace-nowrap">
              {label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
