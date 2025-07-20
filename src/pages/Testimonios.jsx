// src/pages/Testimonios.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import MagicParticles from "../components/MagicParticles";

const testimonios = {
  es: [
    {
      nombre: "Angie Martínez",
      mensaje: "Trabajar contigo fue una experiencia maravillosa. Profesionalismo y dulzura en cada detalle.",
      emoji: "🌸",
    },
    {
      nombre: "Leslie",
      mensaje: "Tu creatividad es única, llena de encanto y magia. ¡Eres increíble!",
      emoji: "🍓",
    },
    {
      nombre: "Alejandra Almanza",
      mensaje: "Tu dedicación y talento hacen que cada proyecto brille. ¡Gracias por todo!",
      emoji: "🖤",
    },
  ],
  en: [
    {
      nombre: "Angie Martínez",
      mensaje: "Working with you was a wonderful experience. Professionalism and sweetness in every detail.",
      emoji: "🌸",
    },
    {
      nombre: "Leslye Moreno",
      mensaje: "Your creativity is unique, full of charm and magic. You’re amazing!",
      emoji: "🍓",
    },
    {
      nombre: "Alejandra Almanza",
      mensaje: "Your dedication and talent make every project shine. Thank you for everything!",
      emoji: "🖤",
    },
  ],
  pt: [
    {
      nombre: "Angie Martínez",
      mensaje: "Trabalhar com você foi uma experiência maravilhosa. Profissionalismo e delicadeza em cada detalhe.",
      emoji: "🌸",
    },
    {
      nombre: "Leslie",
      mensaje: "Sua criatividade é única, cheia de encanto e magia. Você é incrível!",
      emoji: "🍓",
    },
    {
      nombre: "Alejandra Almanza",
      mensaje: "Sua dedicação e talento fazem cada projeto brilhar. Obrigada por tudo!",
      emoji: "🖤",
    },
  ],
};

const Testimonios = ({ lang }) => {
  const data = testimonios[lang] || testimonios.es;
  const [likes, setLikes] = useState(Array(data.length).fill(false));
  const [hearts, setHearts] = useState([]);

  const toggleLike = (index, e) => {
    const updated = [...likes];
    updated[index] = !updated[index];
    setLikes(updated);

    const rect = e.currentTarget.getBoundingClientRect();
    const newHeart = {
      id: Date.now(),
      x: rect.left + rect.width / 2,
      y: rect.top,
    };
    setHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1000);
  };

  const images = [
    "amarillo.png", "cinamon.png", "cinamorroll.png", "guño.png", "hello.png",
    "kuromicorazon.png", "llorando.png", "melodi.png", "melodicorazon.png",
    "mymelodicapa.png", "pastel.png", "perro.png", "rarones.png", "sanrio.png",
    "sapo.png", "pajaro.png",
  ];

  return (
    <section className="relative min-h-screen bg-pink-100 text-[#5E3360] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <MagicParticles />

      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center mb-16 z-10"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Sparkles className="inline-block mr-2 text-pink-500" />
        {lang === "en"
          ? "Magical Testimonials"
          : lang === "pt"
          ? "Depoimentos Mágicos"
          : "Testimonios Mágicos"}
      </motion.h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl z-10">
        {data.map((t, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            className="bg-white rounded-3xl shadow-md p-6 relative overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-[0_0_20px_#f9a8d4] hover:scale-105 duration-300"
          >
            <div className="flex items-center gap-2 text-xl mb-2">
              <span>{t.emoji}</span>
              <h3 className="font-semibold">{t.nombre}</h3>
            </div>
            <p className="italic text-sm text-gray-700 mb-4">“{t.mensaje}”</p>
            <button
              onClick={(e) => toggleLike(index, e)}
              className={`absolute bottom-4 right-4 text-xl transition-transform ${
                likes[index] ? "text-pink-500 scale-125" : "text-gray-300"
              }`}
              aria-label="Me gusta"
            >
              <FaHeart />
            </button>
          </motion.div>
        ))}
      </div>

      {/* 🌈 Imágenes decorativas flotantes con brillo animado */}
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={`/assets/sanrio/${img}`}
          alt={`decorativo-${i}`}
          className="absolute pointer-events-none opacity-80 z-0"
          initial={{ y: 0, opacity: 0.6 }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            repeatType: "mirror",
            delay: i * 0.1,
          }}
          style={{
            width: `${40 + (i % 3) * 20}px`,
            top: `${10 + (i * 7) % 80}%`,
            left: `${5 + (i * 13) % 90}%`,
            transform: `rotate(${(Math.random() * 40) - 20}deg)`,
          }}
        />
      ))}

      {/* ❤️ Corazones flotantes visuales */}
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ opacity: 1, y: 0, scale: 1 }}
          animate={{ opacity: 0, y: -50, scale: 1.5 }}
          transition={{ duration: 1 }}
          className="fixed text-pink-400 text-xl pointer-events-none z-50"
          style={{ left: h.x, top: h.y }}
        >
          <FaHeart />
        </motion.div>
      ))}
    </section>
  );
};

export default Testimonios;
