// src/components/Tierra/CarruselMagico.jsx
// Fondo con fundido cruzado entre imágenes. Sin librerías externas:
// ocupa siempre el tamaño de la pantalla y cubre toda la sección.
import React, { useEffect, useState } from "react";
import FondoPantalla from "@/components/ui/FondoPantalla";

const imagenes = ["/assets/sendero.webp", "/assets/fondotierra.jpg"];

const CarruselMagico = () => {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const reducir = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reducir) return;
    const id = setInterval(() => setActual((i) => (i + 1) % imagenes.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <FondoPantalla>
        {imagenes.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[1800ms] ease-in-out ${
              i === actual ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </FondoPantalla>

      {/* Capa oscura para que el texto siempre se lea */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0C0A12]/60 via-[#0C0A12]/40 to-[#0C0A12]/75 pointer-events-none" />
    </>
  );
};

export default CarruselMagico;
