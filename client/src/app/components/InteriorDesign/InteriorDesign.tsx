import React from "react";

const InteriorDesign = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row mb-12">
      <div className="w-full lg:w-[760px] h-[514px] bg-[#1b1b1b] text-white flex justify-center items-center">
        <div className="w-[90%] lg:w-[635px] h-auto lg:h-[259px] p-[15px]">
          <h5 className="text-[32px] lg:text-[40px] text-left pb-1 pl-2 font-gilda mb-6">
            INTERIOR DESIGN FOR LIFE
          </h5>
          <p className="font-barlow text-left text-[16px] lg:text-[16px] pl-2 tracking-custom font-normal leading-6 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate.
          </p>
          <a
            href="#"
            className="text-[#aa8453] text-[18px] lg:text-[20px] pl-2 font-barlow underline hover:text-[#ffffff] transition-all duration-300"
          >
            Discover now
          </a>
        </div>
      </div>
      <div
        className="w-full lg:w-[760px] h-[514px] bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://vinova-furstore.myshopify.com/cdn/shop/files/img-4-8_900x.png?v=1696904103')",
        }}
      ></div>
    </div>
  );
};

export default InteriorDesign;
