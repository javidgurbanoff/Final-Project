"use client";

import React, { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://vinova-furstore.myshopify.com/cdn/shop/files/s-4-1_2048x.jpg?v=1697014370",
    "https://vinova-furstore.myshopify.com/cdn/shop/files/s-4-2_2048x.jpg?v=1697014371",
    "https://vinova-furstore.myshopify.com/cdn/shop/files/s-4-3_2048x.jpg?v=1697014371",
  ];

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative text-center">
      <div className="w-full h-[500px] overflow-hidden relative">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>

      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <span className="font-gilda font-extralight text-[47px] text-shadow-lg">
          DESIGN YOUR HOME
        </span>
        <br />
        <a
          href="#"
          className="text-[14px] mb-3 inline-block font-barlow underline underline-offset-2 hover:text-[#aa8453] transition-all duration-300"
        >
          DISCOVER NOW
        </a>
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white">
        {images.map((_, index) => (
          <div
            key={index}
            className={`text-[18px] cursor-pointer mb-2 ${
              currentSlide === index ? "text-[#aa8453]" : "text-white"
            } transition-all duration-300`}
            onClick={() => changeSlide(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
