import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ParticulasMagicas from "../components/CorteDeHielo/ParticulasMagicas";

const CorteDeHielo = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showParticles, setShowParticles] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [buttonGlowing, setButtonGlowing] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  const translations = {
    es: {
      titulo: "Envíame un mensaje",
      nombre: "Nombre",
      correo: "Correo",
      mensaje: "Mensaje",
      enviar: "Enviar Mensaje",
      ok: "¡Mensaje enviado! Te responderé pronto. ✨",
      error: "No se pudo enviar. Inténtalo de nuevo o escríbeme por correo.",
      enviando: "Enviando…",
    },
    en: {
      titulo: "Send me a message",
      nombre: "Name",
      correo: "Email",
      mensaje: "Message",
      enviar: "Send Message",
      ok: "Message sent! I will get back to you soon. ✨",
      error: "Could not send. Please try again or email me directly.",
      enviando: "Sending…",
    },
    pt: {
      titulo: "Envie-me uma mensagem",
      nombre: "Nome",
      correo: "Email",
      mensaje: "Mensagem",
      enviar: "Enviar Mensagem",
      ok: "Mensagem enviada! Responderei em breve. ✨",
      error: "Não foi possível enviar. Tente novamente ou me escreva por e-mail.",
      enviando: "Enviando…",
    },
  };

  const t = translations[lang] || translations.es;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xeokbydj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      // fetch no lanza error en respuestas 4xx/5xx: hay que revisar res.ok
      if (!res.ok) throw new Error(`Formspree respondió ${res.status}`);

      setFormData({ name: "", email: "", message: "" });
      setStatus("ok");

      // Activar animaciones mágicas ✨
      setShowParticles(true);
      setShowGlow(true);
      setButtonGlowing(true);

      // Detenerlas después de 2s
      setTimeout(() => {
        setShowParticles(false);
        setShowGlow(false);
        setButtonGlowing(false);
      }, 2000);
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contacto"
      className="relative w-full min-h-screen bg-[#0A0A0C] text-white overflow-hidden flex items-center justify-center px-4"
    >
      <img
        src="/assets/fondocontacto.png"
        alt="Cueva helada"
        className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none z-0"
      />

      <ParticulasMagicas showParticles={showParticles} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`relative z-20 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 md:p-10 w-full max-w-xl transition-all duration-500 ${
          showGlow ? "animate-form-glow" : ""
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-fraunces text-center text-white mb-6 animate-glow">
          {t.titulo}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            aria-label={t.nombre}
            autoComplete="name"
            placeholder={t.nombre}
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <input
            type="email"
            name="email"
            aria-label={t.correo}
            autoComplete="email"
            placeholder={t.correo}
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <textarea
            name="message"
            rows="4"
            aria-label={t.mensaje}
            placeholder={t.mensaje}
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            type="submit"
            disabled={status === "sending"}
            className={`disabled:opacity-60 bg-blue-200/20 text-white font-bold py-3 rounded-md border border-blue-100/20 transition ${
              buttonGlowing ? "animate-button-glow" : "hover:bg-blue-100/10"
            }`}
          >
            {status === "sending" ? t.enviando : t.enviar}
          </motion.button>

          <p role="status" aria-live="polite" className="text-center text-sm min-h-[1.25rem]">
            {status === "ok" && <span className="text-rocio">{t.ok}</span>}
            {status === "error" && <span className="text-aurora">{t.error}</span>}
          </p>
        </form>

        <div className="mt-6 flex justify-center gap-6 text-2xl text-white">
          <a href="https://github.com/DanielaM1293" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-blue-300 transition" />
          </a>
          <a href="https://www.linkedin.com/in/estefany-daniela-mart%C3%ADnez-ni%C3%B1o-b0832b209/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-blue-300 transition" />
          </a>
          <a href="mailto:estefanydanielamartineznino@gmail.com" aria-label="Email">
            <FaEnvelope className="hover:text-blue-300 transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CorteDeHielo;
