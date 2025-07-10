import React, { useEffect, useState } from "react";
import "./EstrellasFugaces.css";


const generarEstrella = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}vh`,
  left: `${Math.random() * 100}vw`,
  delay: Math.random() * 5,
});

const EstrellasFugaces = () => {
  const [estrellas, setEstrellas] = useState([]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setEstrellas((prev) => [...prev.slice(-10), generarEstrella()]);
    }, 2000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      {estrellas.map((estrella) => (
        <div
          key={estrella.id}
          className="estrella-fugaz"
          style={{
            top: estrella.top,
            left: estrella.left,
            animationDelay: `${estrella.delay}s`,
          }}
        />
      ))}
    </>
  );
};

export default EstrellasFugaces;
