import React from "react";
import { SistemaSolar, Cometa, AuroraBoreal, EstrellasFugaces } from "../components/Espacio";
import { useTranslate } from "../hooks/useTranslate";

const Espacio = ({ lang }) => {
  const t = useTranslate(lang);

  return (
    <section
      id="espacio"
      className="relative w-full h-screen bg-bosque text-marfil flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Cometas animados */}
      <Cometa
        color="#F5E6B3"
        delay={0}
        rotate={45}
        path={{
          x: ["-20vw", "0vw", "50vw", "120vw"],
          y: ["-20vh", "0vh", "30vh", "60vh"],
        }}
      />

      <Cometa
        color="#C3B2E4"
        delay={3}
        rotate={30}
        path={{
          x: ["-30vw", "10vw", "60vw", "130vw"],
          y: ["10vh", "30vh", "40vh", "50vh"],
        }}
      />

      <Cometa
        color="#E8A9BE"
        delay={6}
        rotate={-180}
        path={{
          x: ["120vw", "80vw", "40vw", "-10vw"],
          y: ["0vh", "20vh", "30vh", "50vh"],
        }}
      />

      <AuroraBoreal />
      <EstrellasFugaces />
      <SistemaSolar />

      {/* Texto y contenido principal */}
      <div className="z-20 relative">
        <h1 className="text-4xl md:text-6xl font-bold font-fraunces animate-fadeInDown">
          {t("saludo")}
        </h1>
        <p className="text-lg md:text-2xl mt-4 font-quicksand max-w-xl mx-auto">
          {t("bienvenida")}
        </p>

        <a
          href="#cielo"
          className="mt-10 inline-block bg-acento text-fondo px-6 py-3 rounded-full shadow-lg hover:bg-hover transition transform hover:scale-105 font-quicksand"
        >
          {t("descubre")}
        </a>
      </div>
    </section>
  );
};

export default Espacio;
