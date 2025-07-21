import React from 'react';

const ParticulasMagicas = ({ showParticles = false }) => {
  return (
    <>
      {/* Partículas mágicas al enviar */}
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-[6px] h-[6px] bg-white/60 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random()}s`,
                animationDuration: `${0.8 + Math.random()}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Copos de nieve (escala intermedia) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="w-full h-full bg-[url('/assets/copos.png')] bg-repeat animate-snow opacity-15 scale-[1.5]" />
        <div className="w-full h-full bg-[url('/assets/luz.png')] bg-repeat animate-snow-90 opacity-15 scale-[1.5]" />
        <div className="w-full h-full bg-[url('/assets/copos.png')] bg-repeat animate-snow-120 opacity-10 scale-[1.5]" />
      </div>
    </>
  );
};

export default ParticulasMagicas;
