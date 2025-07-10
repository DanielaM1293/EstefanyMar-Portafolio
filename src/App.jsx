import { useState } from "react";
import Espacio from "./sections/Espacio";
import Cielo from "./sections/Cielo";
import Tierra from "./sections/Tierra";
import Mar from "./sections/Mar";
import Inframundo from "./sections/Inframundo";
import CorteHielo from "./sections/CorteHielo";
import Navbar from "./components/Navbar";
import BotonWhatsApp from "./components/BotonWhatsApp";
import LanguageSelector from "./components/LanguageSelector";

import "./App.css";

function App() {
  const [lang, setLang] = useState("es");

  return (
    <div className="relative font-quicksand scroll-smooth bg-[#0C0A12] text-[#F8F5F1]">
      {/* Selector de idioma */}
      <LanguageSelector lang={lang} setLang={setLang} />

<div className="scrollbar-thin scrollbar-thumb-aurora scrollbar-track-[#0C0A12]">
</div>

      {/* Barra de navegación y botón de WhatsApp */}
<Navbar lang={lang} />
      <BotonWhatsApp />

      {/* Secciones visuales */}
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
    </div>
  );
}

export default App;
