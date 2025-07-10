import React from "react";
import { motion } from "framer-motion";
import "./Cometa.css";

const Cometa = ({ delay = 0, color = "#f5e6b3", rotate = 25, path = {} }) => {
  const defaultPath = {
    x: ["-20vw", "20vw", "60vw", "100vw"],
    y: ["-20vh", "30vh", "40vh", "60vh"],
  };

  const movement = {
    x: path.x || defaultPath.x,
    y: path.y || defaultPath.y,
    rotate: [rotate, rotate + 10, rotate + 20, rotate + 30],
    opacity: [0, 1, 1, 0],
  };

  return (
<motion.div
  className="cometa-wrapper absolute z-30"
  initial={{ x: movement.x[0], y: movement.y[0], rotate, opacity: 0 }}
  animate={movement}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
    repeatDelay: 4 + delay,
}}
>

      <div className="cometa-cuerpo">
        <div
          className="cometa-cola"
          style={{
            background: `linear-gradient(to left, ${color}aa, ${color}66, transparent)`,
          }}
        />
        <div
          className="cometa-nucleo"
          style={{
            background: `radial-gradient(circle, ${color}, ${color}bb)`,
            boxShadow: `0 0 10px ${color}, 0 0 25px ${color}88`,
          }}
        />
        <div className="cometa-particulas">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="cometa-particula"
              style={{ background: i % 2 === 0 ? color : "#f8f5f1" }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Cometa;
