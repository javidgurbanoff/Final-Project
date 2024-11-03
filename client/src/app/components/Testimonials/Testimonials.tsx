"use client";
import React, { useState } from "react";

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-[110px] pb-[130px]">
      <h2 className="text-center text-[46px] font-gilda text-[#222222]">
        Testimonials
      </h2>
      <div className="flex space-x-6 mt-10">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[370px] h-[390px] text-center "
          >
            <img
              src="https://vinova-furstore.myshopify.com/cdn/shop/files/a-2-2_380x380_crop_center.png?v=1696405374"
              alt="Kwang Sang"
              className="mb-4 w-[120px] h-[120px] object-cover rounded-full"
            />
            <h3 className="text-[16px] text-[#202020]">Kwang Sang</h3>
            <p className="text-[14px] text-[#20202080] mt-2">
              Lorem ipsum dolor sit amet, adipiscing elit. Sed non risus.
              Suspendisse lectus tortor, dignissim sit amet.
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10" onClick={handleNextPage}>
        <div className="flex space-x-2 cursor-pointer">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`h-[4px] w-[50px] ${
                currentPage === index ? "bg-[#aa8453]" : "bg-[#cccccc]"
              } transition-all duration-300`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
