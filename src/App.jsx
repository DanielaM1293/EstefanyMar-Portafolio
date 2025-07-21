import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import {
  Navbar,
  BotonWhatsApp,
  LanguageSelector,
  Seo,
  MunequitoScroll,
  CursorMagico,
  Preloader,
} from "@/components";

import Testimonios from "@/pages/Testimonios";
import { usePreloadImages, useTranslate } from "@/hooks";

import Espacio from "@/sections/Espacio";
import Cielo from "@/sections/Cielo";
import Tierra from "@/sections/Tierra";
import Mar from "@/sections/Mar";
import Inframundo from "@/sections/Inframundo";
import CorteHielo from "@/sections/CorteHielo";

import "./App.css";

function App() {
  usePreloadImages();
  const [lang, setLang] = useState("es");
  const t = useTranslate(lang); // Puedes usarlo si necesitas traducir en App.jsx

  return (
    <div className="relative font-quicksand scroll-smooth bg-[#0C0A12] text-[#F8F5F1]">
      <LanguageSelector lang={lang} setLang={setLang} />
      <div className="scrollbar-thin scrollbar-thumb-aurora scrollbar-track-[#0C0A12]" />
      <MunequitoScroll />
      <Preloader />
      <CursorMagico />
      <Seo
        title="Estefany Mar | Frontend Developer"
        description="Portafolio mágico de Estefany Mar"
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar lang={lang} />
              <BotonWhatsApp />
              <section id="espacio">
                <Espacio lang={lang} />
              </section>
              <section id="cielo">
                <Cielo lang={lang} />
              </section>
              <section id="tierra">
                <Tierra lang={lang} />
              </section>
              <section id="mar">
                <Mar lang={lang} />
              </section>
              <section id="inframundo">
                <Inframundo lang={lang} />
              </section>
              <section id="cortehielo">
                <CorteHielo lang={lang} />
              </section>
            </>
          }
        />
        <Route path="/testimonios" element={<Testimonios lang={lang} />} />
      </Routes>
    </div>
  );
}

export default App;
