import { useEffect } from "react";

const usePreloadImages = () => {
  useEffect(() => {
    const imagesToPreload = [
            "/assets/android-chrome-192x192.png",
      "/assets/android-chrome-512x512.png",
      "/assets/apple-touch-icon.png",
      "/assets/arana.png",
      "/assets/aranas.png",
      "/assets/araña.png",
      "/assets/bolita.png",
      "/assets/bolitas.png",
      "/assets/bosque-encantado.webp",
      "/assets/calabazas.gif",
      "/assets/Calcifer.ico",
      "/assets/Calcifer.png",
      "/assets/castillo.png",
      "/assets/castillo-cielo.png",
      "/assets/chihirofantasma.png",
      "/assets/colombiacore.png",
      "/assets/copos.png",
      "/assets/espacio.webp",
      "/assets/esqueletos.png",
      "/assets/favicon.ico",
      "/assets/favicon-16x16.png",
      "/assets/favicon-32x32.png",
      "/assets/fondocontacto.webp",
      "/assets/fondotierra.jpg",
      "/assets/grupo_almanza_logo.png",
      "/assets/jack.gif",
      "/assets/jackamarillo.gif",
      "/assets/jacknegro.gif",
      "/assets/jinete.png",
      "/assets/loader.png",
      "/assets/luz.png",
      "/assets/mononoke.png",
      "/assets/mononokes.png",
      "/assets/muñequito.png",
      "/assets/murcielago.png",
      "/assets/murcielagos.png",
      "/assets/niña.png",
      "/assets/nube.png",
      "/assets/ponyo.png",
      "/assets/ponyoagua.png",
      "/assets/porco.png",
      "/assets/ranlogo.jpg",
      "/assets/sendero.webp",
      "/assets/Studio Ghibli Movie GIF.gif",
      "/assets/totoro.png",
      "/assets/totoros.png",
      "/assets/amarillo.png",
      "/assets/cinamon.png",
      "/assets/cinamorroll.png",
      "/assets/guño.png",
      "/assets/hello.png",
      "/assets/kuromicorazon.png",
      "/assets/llorando.png",
      "/assets/melodi.png",
      "/assets/melodicorazon.png",
      "/assets/mymelodicapa.png",
      "/assets/pajaro.png",
      "/assets/pastel.png",
      "/assets/perro.png",
      "/assets/rarones.png",
      "/assets/sanrio.png",
      "/assets/sapo.png",
    ];

    // Se precargan DESPUÉS de que la página ya cargó y el navegador está libre,
    // para no competir con lo que la persona ve primero.
    const precargar = () =>
      imagesToPreload.forEach((src) => {
        const img = new Image();
        img.src = src;
      });

    const cuandoLibre = () =>
      "requestIdleCallback" in window
        ? window.requestIdleCallback(precargar, { timeout: 4000 })
        : setTimeout(precargar, 2000);

    if (document.readyState === "complete") cuandoLibre();
    else window.addEventListener("load", cuandoLibre, { once: true });

    return () => window.removeEventListener("load", cuandoLibre);
  }, []);
};

export default usePreloadImages;
