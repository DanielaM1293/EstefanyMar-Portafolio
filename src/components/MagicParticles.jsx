import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const MagicParticles = () => {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0 pointer-events-none"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          color: {
            value: [
              "#FFC1CC",
              "#C3B2E4",
              "#BDE3D0",
              "#F5E6B3",
              "#E8A9BE",
              "#FFDEFA",
              "#FFF5B7",
            ],
          },
          shape: {
            type: ["circle", "star", "character"],
            character: [
              { value: "✨", font: "Verdana", style: "", weight: "400", fill: true },
              { value: "🌸", font: "Verdana", style: "", weight: "400", fill: true },
              { value: "💖", font: "Verdana", style: "", weight: "400", fill: true },
              { value: "🌟", font: "Verdana", style: "", weight: "400", fill: true },
              { value: "🩷", font: "Verdana", style: "", weight: "400", fill: true },
              { value: "🦋", font: "Verdana", style: "", weight: "400", fill: true },
            ],
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 0.6,
              opacity_min: 0.3,
              sync: false,
            },
          },
          size: {
            value: { min: 3, max: 12 },
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "top",
            random: true,
            straight: false,
            outModes: { default: "out" },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["bubble", "attract"],
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            bubble: {
              distance: 100,
              size: 10,
              duration: 2,
              opacity: 1,
              color: {
                value: "#FFD1DC",
              },
            },
            attract: {
              distance: 120,
              duration: 0.4,
              factor: 1,
            },
            push: {
              quantity: 6,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default MagicParticles;
