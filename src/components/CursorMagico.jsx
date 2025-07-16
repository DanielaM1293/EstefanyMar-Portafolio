// src/components/CursorMagico.jsx
import { useEffect } from "react";

const CursorMagico = () => {
  useEffect(() => {
    const crearBrillito = (x, y) => {
      const s = document.createElement("span");
      s.className = "cursor-sparkle";
      s.style.left = `${x}px`;
      s.style.top = `${y}px`;
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 700);
    };

    const mover = (e) => crearBrillito(e.clientX, e.clientY);
    window.addEventListener("mousemove", mover);
    return () => window.removeEventListener("mousemove", mover);
  }, []);

  return null;
};

export default CursorMagico;
