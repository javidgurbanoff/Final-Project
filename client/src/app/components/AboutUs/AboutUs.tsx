import React from "react";
import { IoMdStar } from "react-icons/io";

const AboutUs = () => {
  return (
    <div className="w-full flex justify-center items-start pt-[30px] pb-[130px]">
      <div className="w-[532px]">
        <div className="flex text-[#aa8453] mb-2">
          <IoMdStar className="text-[20px]" />
          <IoMdStar className="text-[20px]" />
          <IoMdStar className="text-[20px]" />
          <IoMdStar className="text-[20px]" />
          <IoMdStar className="text-[20px]" />
        </div>

        <h1 className="text-[46px] text-[#222222] font-gilda mb-4">About Us</h1>

        <p className="text-[14px] font-barlow mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate.
        </p>

        <div className="flex items-center">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/icon-4-5_380x.png?v=1696841531"
            alt="Contact Icon"
            className="w-[40px] h-[40px]"
          />
          <div className="pl-5">
            <p className="text-[#202020] text-[14px]">Contact us</p>
            <span className="text-[#aa8453] font-semibold">084-2525-6868</span>
          </div>
        </div>
      </div>

      <div className="flex w-[600px] justify-between ml-8 gap-7">
        <div className="relative w-[179px] h-[286px] mt-[50px] gap-2 overflow-hidden">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-4-1_380x.png?v=1698481536"
            alt="Image 1"
            className="w-full h-full object-cover  transition-transform duration-[1500ms] ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="relative w-[179px] h-[286px] overflow-hidden">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-4-2_380x.png?v=1698481536"
            alt="Image 2"
            className="w-full h-full object-cover transition-transform duration-[1500ms] ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="relative w-[179px] h-[286px] mt-[50px] overflow-hidden">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-4-3_380x.png?v=1698481536"
            alt="Image 3"
            className="w-full h-full object-cover transition-transform duration-[1500ms] ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
