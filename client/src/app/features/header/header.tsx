"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative text-center">
      <img
        src="https://vinova-furstore.myshopify.com/cdn/shop/files/s-4-1_2048x.jpg?v=1697014370"
        alt="background"
        className="pb-[30px]"
      />

      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-16 text-white">
        <span className="font-gilda font-normal text-[45px] text-shadow-lg">
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
      <div className="absolute top-8 left-4 right-4 flex justify-between items-center pl-[159px] pr-[175px]">
        <a href="/">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo_2.png?v=1696826748&width=160"
            alt="logo"
            className="cursor-pointer"
          />
        </a>
        <div className="flex font-barlow pt-[2px] text-[15px] pl-[53px]">
          <a
            className="text-[#aa8453] hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]"
            href="#"
          >
            HOME
          </a>
          <a
            className="text-white hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]"
            href="#"
          >
            COLLECTION
          </a>
          <a
            className="text-white hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]"
            href="#"
          >
            PRODUCTS
          </a>
          <span className="text-white hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]">
            OTHER PAGES
          </span>
        </div>
        <div className="flex space-x-1 text-white items-center gap-7">
          <FaSearch className="transition-all cursor-pointer w-[19px] h-[19px]" />
          <a href="#" onClick={toggleSidebar}>
            <GoPerson className="transition-all cursor-pointer w-[24px] h-[24px]" />
          </a>
          <div className="relative">
            <IoIosStarOutline className="transition-all cursor-pointer w-[24px] h-[24px]" />
            <span className="absolute top-0 right-0 translate-x-[35%] -translate-y-[35%] bg-[#aa8453] text-white rounded-full w-[16px] h-[16px] text-[10px] flex items-center pt-[3px] justify-center">
              0
            </span>
          </div>
          <div className="relative">
            <MdOutlineShoppingCart className="transition-all cursor-pointer w-[24px] h-[24px]" />
            <span className="absolute top-0 right-0 translate-x-[35%] -translate-y-[35%] bg-[#aa8453] text-white rounded-full w-[16px] h-[16px] text-[10px] flex items-center pt-[3px] justify-center">
              0
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 text-white">
        <a
          href="#"
          className="text-[16px] mt-7 inline-block hover:text-[#aa8453] transition-all duration-300 font-barlow"
        >
          BLOG
        </a>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 w-[370px] h-full bg-[#ffffff] text-[#6b7280] transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-700	 ease-in-out z-50`}
      >
        <div className="">
          <ul className="space-y-9 px-[40px] py-[100px] text-[18px] text-left">
            <li>
              <a href="/login" className="hover:text-[#aa8453] transition-all">
                Login
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="hover:text-[#aa8453] transition-all"
              >
                Register
              </a>
            </li>
            <li>
              <a
                href="/wishlist"
                className="hover:text-[#aa8453] transition-all"
              >
                Wishlist
              </a>
            </li>
            <li>
              <a
                href="/account"
                className="hover:text-[#aa8453] transition-all"
              >
                Checkout
              </a>
            </li>
            <li className="pt-[30px] text-[14px] font-gilda">
              <span className="">CURRENCY</span>
              <div className="text-[11px] font-barlow"> USD</div>
            </li>
            <li className=" text-[14px] font-gilda">
              <span>LANGUAGE</span>
              <div className=" text-[11px] font-barlow">ENGLISH</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
