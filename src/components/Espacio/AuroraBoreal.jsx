import React from "react";
import "./AuroraBoreal.css";

const AuroraBoreal = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen bg-no-repeat bg-cover bg-top animate-fadeIn duration-700"
      style={{
        backgroundImage:
          "url('assets/espacio.webp')",

      }}
    />
  );
};

export default AuroraBoreal;
