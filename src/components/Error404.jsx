import React from 'react';
import Burbujas from '../components/Burbujas';

export const Error404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Fondo de estrellas */}
      <div className="absolute inset-0 bg-stars opacity-50"></div>
      
      <div className="text-center space-y-6 p-10 max-w-lg relative z-10">
        <h1 className="text-6xl font-extrabold text-purple-500 animate-pulse glow-text">404</h1>
        <h2 className="text-3xl font-semibold text-purple-300 glow-text">Página no encontrada</h2>
        
        <p className="text-lg text-gray-300">
          Lo sentimos, la página que estás buscando no existe. Parece que te has perdido en la galaxia.
        </p>
        
        <button className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition duration-300">
          Regresar a la Tierra
        </button>
      </div>
      <Burbujas/>
    </div>
  );
};

export default Error404;
