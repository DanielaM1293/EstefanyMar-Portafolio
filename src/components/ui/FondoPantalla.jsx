// src/components/ui/FondoPantalla.jsx
// Fondo que SIEMPRE cubre la sección completa, sin importar qué tan alta sea.
// La imagen/video tiene el tamaño de la pantalla (se ve nítido, no estirado)
// y se recorta a los bordes de la sección.
const FondoPantalla = ({ children, className = "" }) => (
  <div
    className={`absolute inset-0 z-0 overflow-hidden pointer-events-none [clip-path:inset(0)] ${className}`}
    aria-hidden="true"
  >
    <div className="fixed top-0 left-0 w-screen" style={{ height: "100lvh" }}>
      {children}
    </div>
  </div>
);

export default FondoPantalla;
