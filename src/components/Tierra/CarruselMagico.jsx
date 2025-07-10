// src/components/Tierra/CarruselMagico.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imagenes = [
  "/assets/sendero.png",
  "/assets/alicia.jpg",
  "/assets/fondotierra.jpg",
];

const CarruselMagico = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };

  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <Slider {...settings}>
        {imagenes.map((src, i) => (
          <div key={i} className="w-full h-full">
            <img
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </Slider>

      {/* Filtro oscuro encima para contraste */}
      <div className="absolute inset-0 bg-[#0C0A12]/60 backdrop-blur-sm pointer-events-none" />
    </div>
  );
};

export default CarruselMagico;
