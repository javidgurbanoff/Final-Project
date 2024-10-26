import React from "react";
import { IoMdStar } from "react-icons/io";

const AboutUs = () => {
  return (
    <div className="w-full flex justify-center items-center pt-[30px] pb-[130px] ">
      <div className="w-[532px]">
        <div className="flex text-[#aa8453] mb-2">
          <IoMdStar className="text-[20px]" />
          <IoMdStar className="text-[20px]" />
          <IoMdStar className="text-[20px]" />
          <IoMdStar className="text-[20px]" />
          <IoMdStar className="text-[20px]" />
        </div>

        <h1 className="text-[46px] text-[#222222]  font-gilda mb-4">
          About Us
        </h1>

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
            <p className=" text-[#202020] text-[14px]">Contact us</p>
            <span className="text-[#aa8453] font-semibold">084-2525-6868</span>
          </div>
        </div>
      </div>

      <div className="flex w-[600px] justify-between ml-8 gap-7">
        <img
          src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-4-1_380x.png?v=1698481536"
          alt="Image 1"
          className="w-[179px] h-[286px] object-cover mt-[50px] transform scale-100 transition-all duration-[1500ms] ease-out "
        />
        <img
          src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-4-2_380x.png?v=1698481536"
          alt="Image 2"
          className="w-[179px] h-[286px] object-cover transform scale-100 transition-all duration-[1500ms] ease-out"
        />
        <img
          src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-4-3_380x.png?v=1698481536"
          alt="Image 3"
          className="w-[179px] h-[286px] object-cover mt-[50px] transform scale-100 transition-all duration-[1500ms] ease-out"
        />
      </div>
      <div className=""></div>
    </div>
  );
};

export default AboutUs;
