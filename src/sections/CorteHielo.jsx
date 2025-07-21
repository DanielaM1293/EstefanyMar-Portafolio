// src/sections/CorteDeHielo.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { ParticulasMagicas } from "@/components";

const CorteDeHielo = ({ lang }) => {
  const [showParticles, setShowParticles] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const translations = {
    es: {
      titulo: "Envíame un mensaje",
      nombre: "Nombre",
      correo: "Correo",
      mensaje: "Mensaje",
      enviar: "Enviar Mensaje",
    },
    en: {
      titulo: "Send me a message",
      nombre: "Name",
      correo: "Email",
      mensaje: "Message",
      enviar: "Send Message",
    },
    pt: {
      titulo: "Envie-me uma mensagem",
      nombre: "Nome",
      correo: "Email",
      mensaje: "Mensagem",
      enviar: "Enviar Mensagem",
    },
  };

  const t = translations[lang] || translations.es;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowParticles(true);

    try {
      await fetch("https://formspree.io/f/xeokbydj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar:", error);
    }

    setTimeout(() => setShowParticles(false), 1000);
  };

  return (
    <section
      id="contacto"
      className="relative w-full min-h-screen bg-[#0A0A0C] text-white overflow-hidden flex items-center justify-center px-4"
    >
      {/* Fondo con imagen helada */}
      <img
        src="/assets/fondocontacto.png"
        alt="Cueva helada"
        className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none z-0"
      />

      {/* Copos + partículas */}
      <ParticulasMagicas showParticles={showParticles} />

      {/* Formulario */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 md:p-10 w-full max-w-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-fraunces text-center text-white mb-6 animate-glow">
          {t.titulo}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder={t.nombre}
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <input
            type="email"
            name="email"
            placeholder={t.correo}
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <textarea
            name="message"
            rows="4"
            placeholder={t.mensaje}
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-200/20 text-white font-bold py-3 rounded-md border border-blue-100/20 hover:bg-blue-100/10 transition"
            type="submit"
          >
            {t.enviar}
          </motion.button>
        </form>

        {/* Redes sociales visibles siempre */}
        <div className="mt-6 flex justify-center gap-6 text-2xl text-white">
          <a
            href="https://github.com/DanielaM1293"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-blue-300 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/estefany-daniela-mart%C3%ADnez-ni%C3%B1o-b0832b209/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-300 transition" />
          </a>
          <a
            href="mailto:estefanydanielamartineznino@gmail.com"
            className="text-white"
          >
            <FaEnvelope className="hover:text-blue-300 transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CorteDeHielo;
