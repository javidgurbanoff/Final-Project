import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import {
  FaPhone,
  FaRegEnvelope,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-[412px] bg-[#1b1b1b] text-[#ffffff] pb-[75px]">
      <div className="container justify-center pb-[40px] mx-auto pt-[75px] flex pl-[175px] gap-9 pr-[175px]">
        <div className=" pr-[15px] pl-[15px] ">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo_2_190x.png?v=1696826748"
            alt="Logo"
            className="mb-4 w-[190px] h-[47px]"
          />
          <div className="flex items-center mb-[20px]">
            <MdOutlineLocationOn className="text-[#bbc0c1] mr-[25px] w-6 h-6 \" />
            <span className="text-[#778082]">2357 Gordon Street, CA</span>
          </div>
          <div className="flex items-center mb-[20px] ">
            <FaPhone className="text-[#bbc0c1] mr-[25px] rotate-90 " />{" "}
            <span className="text-[#778082] hover:text-[#aa8453] transition-all cursor-pointer">
              0123 456 789
            </span>
          </div>
          <div className="flex items-center ">
            <FaRegEnvelope className="text-[#bbc0c1] mr-[25px]" />
            <span className="text-[#778082] hover:text-[#aa8453] transition-all cursor-pointer">
              demo@gmail.com
            </span>
          </div>
        </div>

        <div className="pl-[15px] pr-[15px]">
          <h4 className="font-gilda text-[20px] mb-[30px] gap-2">About Us</h4>
          <ul>
            <li className="text-[#778082] mb-[15px] hover:text-[#aa8453] transition-all cursor-pointer">
              Our Story
            </li>
            <li className="text-[#778082] mb-[15px] hover:text-[#aa8453] transition-all cursor-pointer">
              Our Team
            </li>
            <li className="text-[#778082] hover:text-[#aa8453] transition-all cursor-pointer">
              Designers
            </li>
          </ul>
        </div>

        <div className=" pr-[15px]">
          <h4 className="font-gilda text-[20px] mb-[30px]">Customer Service</h4>
          <ul>
            <li className="text-[#778082] mb-[15px] hover:text-[#aa8453] transition-all cursor-pointer">
              Home
            </li>
            <li className="text-[#778082] mb-[15px] hover:text-[#aa8453] transition-all cursor-pointer">
              Products
            </li>
            <li className="text-[#778082] hover:text-[#aa8453] transition-all   cursor-pointer ">
              Contacts
            </li>
          </ul>
        </div>

        <div className="pl-[15px] pr-[15px]">
          <h4 className="font-gilda text-[20px] mb-[30px]">Help</h4>
          <ul>
            <li className="text-[#778082] mb-[15px] hover:text-[#aa8453] transition-all cursor-pointer">
              Contact us
            </li>
            <li className="text-[#778082] mb-[15px] hover:text-[#aa8453] transition-all cursor-pointer">
              Online Store
            </li>
            <li className="text-[#778082] hover:text-[#aa8453] transition-all cursor-pointer">
              Maps
            </li>
          </ul>
        </div>

        <div className="pl-[60px] pr-[15px]">
          <h4 className="font-gilda text-[20px] mb-[30px]">Support</h4>
          <ul>
            <li className="text-[#778082] mb-[15px] hover:text-[#aa8453] transition-all   cursor-pointer">
              FAQ's
            </li>
            <li className="text-[#778082] mb-[15px] hover:text-[#aa8453] transition-all  cursor-pointer">
              Shipping
            </li>
            <li className="text-[#778082] hover:text-[#aa8453] transition-all cursor-pointer">
              Return
            </li>
          </ul>
        </div>

        <div className="pl-[15px] pr-[15px]">
          <h4 className="font-gilda text-[20px] mb-8">Payments</h4>
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-2-7_250x.png?v=1696490455"
            alt="Payments"
            className="mb-4"
          />
          <h4 className="font-gilda text-[20px] mb-8">Follow Us</h4>
          <div className="flex  space-x-4 ">
            <FaFacebookF className="text-[#ffffff] hover:text-[#aa8453] transition-all h-5 w-5  cursor-pointer " />
            <FaPinterestP className="text-[#ffffff] hover:text-[#aa8453] transition-all h-5 w-5 cursor-pointer " />
            <FaInstagram className="text-[#ffffff] hover:text-[#aa8453] transition-all h-5 w-5 cursor-pointer " />
            <FaTwitter className="text-[#ffffff] hover:text-[#aa8453] transition-all h-5 w-5 cursor-pointer " />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1200px] h-[68px] flex flex-col items-center justify-center  mx-auto pb-[20px]">
        <div className="w-full border-t-[1px] border-t-[#494949] mt-8"></div>
        <p className="text-[#778082] pt-3 text-[16px] mt-6 items-center">
          Copyright © 2023 Vinovathemes. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
