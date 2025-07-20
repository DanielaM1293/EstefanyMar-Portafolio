// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* 🎨 Paleta mágica */
      colors: {
        bosque:     "#0C0A12",
        lavanda:    "#C3B2E4",
        rocio:      "#BDE3D0",
        aurora:     "#E8A9BE",
        luciernaga: "#F5E6B3",
        universo:   "#8699C7",
        marfil:     "#F8F5F1",
      },

      /* 💫 Sombra mágica */
      boxShadow: {
        mágico: "0 0 12px #F5E6B3, 0 0 24px #E8A9BE",
      },

      /* ✨ Keyframes mágicos */
      keyframes: {
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        sparkles: {
          "0%,100%": {
            transform: "translateY(0) scale(1)",
            opacity: "0.7",
          },
          "50%": {
            transform: "translateY(-8px) scale(1.2)",
            opacity: "0.9",
          },
        },
        flotarSuave: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(10px)" },
        },
        glow: {
          "0%,100%": { textShadow: "0 0 8px #CFF3FF" },
          "50%":     { textShadow: "0 0 16px #E0F7FF" },
        },
        snow: {
          "0%":   { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "1000px 1000px" },
        },
        floatClouds: {
          "0%":   { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-8px)" },
        },
        flotarCastillo: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        flotar: {
          "0%":   { transform: "translateY(0)", opacity: "0.8" },
          "100%": { transform: "translateY(-100vh)", opacity: "0" },
        },
        fadeInSlow: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "0.3" },
        },
        flotarBurbujas: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-6px)" },
        },
        girarBurbuja: {
          "0%":   { transform: "rotateZ(0deg)" },
          "100%": { transform: "rotateZ(990deg)" },
        },
        particle: {
          "0%":   { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-40px)", opacity: "0" },
        },
        flotarTooltip: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      /* ⚙️ Alias de animaciones */
      animation: {
        float: "float 4s ease-in-out infinite",
        "gradient-x":    "gradientX 6s ease-in-out infinite",
        sparkles:        "sparkles 3s ease-in-out infinite",
        flotarSuave:     "flotarSuave 3s ease-in-out infinite",
        snow:            "snow 60s linear infinite",
        particle:        "particle 1s ease-out forwards",
        floatClouds:     "floatClouds 69s ease-in-out infinite alternate",
        flotarCastillo:  "flotarCastillo 6s ease-in-out infinite",
        flotar:          "flotar linear infinite",
        fadeInSlow:      "fadeInSlow 8s ease-in-out forwards",
        flotarBurbujas:  "flotarBurbujas 6s ease-in-out infinite",
        girarBurbuja:    "girarBurbuja 60s linear infinite",
        flotarTooltip:   "flotarTooltip 6s ease-in-out infinite",
        spinSuperSlow:   "spin 90s linear infinite",
        spinSlow:        "spinSlow 40s linear infinite",
      },
    },
  },
  plugins: [],
};
