// src/components/ui/FundidoSeccion.jsx
// Degradados arriba y abajo de una sección para que el paso entre
// una sección y otra sea suave y no un corte brusco.
const FundidoSeccion = ({ arriba = true, abajo = true, color = "#0C0A12" }) => (
  <>
    {arriba && (
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-28 md:h-40 z-[5] pointer-events-none"
        style={{ background: `linear-gradient(to bottom, ${color}, transparent)` }}
      />
    )}
    {abajo && (
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-28 md:h-40 z-[5] pointer-events-none"
        style={{ background: `linear-gradient(to top, ${color}, transparent)` }}
      />
    )}
  </>
);

export default FundidoSeccion;
