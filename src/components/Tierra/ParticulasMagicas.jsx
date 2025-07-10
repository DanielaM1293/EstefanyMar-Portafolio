import React from "react";

const ParticulasMagicas = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 animate-pulse">
      <div className="w-2 h-2 bg-aurora rounded-full blur-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping" />
      <div className="w-1.5 h-1.5 bg-aurora/70 rounded-full blur-sm absolute top-1/3 left-2/3 animate-ping delay-100" />
      <div className="w-1.5 h-1.5 bg-aurora/60 rounded-full blur-sm absolute top-2/3 left-1/3 animate-ping delay-200" />
    </div>
  );
};

export default ParticulasMagicas;
