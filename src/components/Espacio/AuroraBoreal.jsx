import React from "react";
import "./AuroraBoreal.css";

const AuroraBoreal = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen bg-no-repeat bg-cover bg-top animate-fadeInSlow"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/high/andromeda-galaxy-4k-7wq1ctco2fzci64k.webp')",
      }}
    />
  );
};

export default AuroraBoreal;
