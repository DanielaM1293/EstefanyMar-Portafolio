import React from "react";
import { SistemaSolar, Cometa, AuroraBoreal, EstrellasFugaces } from "../components/Espacio";
import { useTranslate } from "../hooks/useTranslate";

const Espacio = ({ lang }) => {
  const t = useTranslate(lang);

  return (
    <section
      className="relative w-full min-h-screen bg-bosque text-marfil flex flex-col justify-start items-center text-center overflow-hidden px-5 pt-[20vh] sm:pt-[22vh] pb-24"
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
      <div className="z-20 relative max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-fraunces leading-tight drop-shadow-[0_2px_18px_rgba(195,178,228,0.55)]">
          {t("saludo")}
        </h1>
        <p className="text-lg md:text-2xl mt-4 font-quicksand max-w-xl mx-auto text-marfil/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
          {t("bienvenida")}
        </p>

        <a
          href="#cielo"
          className="mt-8 inline-flex items-center gap-2 bg-aurora text-[#0C0A12] font-semibold px-7 py-3 rounded-full shadow-[0_0_24px_rgba(232,169,190,0.55)] hover:bg-lavanda hover:shadow-[0_0_30px_rgba(195,178,228,0.7)] transition duration-300 transform hover:scale-105 font-quicksand"
        >
          {t("descubre")}
        </a>
      </div>
    </section>
  );
};

export default Espacio;
