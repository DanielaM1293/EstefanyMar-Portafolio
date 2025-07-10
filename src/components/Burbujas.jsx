import React from "react";

export const Burbujas = () => {
  const cantidadEstrellas = window.innerWidth > 768 ? 80 : 50;
  const estrellas = Array.from({ length: cantidadEstrellas });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {estrellas.map((_, index) => (
        <div
          key={index}
          className="estrella bg-gradient-to-r from-white via-white to-transparent rounded-full opacity-80 shadow-lg animate-flotar"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            width: `${Math.random() * 6 + 8}px`,
            height: `${Math.random() * 6 + 8}px`,
            bottom: `-${Math.random() * 100}px`,
            filter: `blur(${Math.random() * 2 + 1}px)`,
            boxShadow: `0 0 ${Math.random() * 3 + 2}px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}
    </div>
  );
};

export default Burbujas;
