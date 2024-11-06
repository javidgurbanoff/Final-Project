"use client";

import React, { useState } from "react";
import Footer from "../features/footer/footer";
import { IoHomeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export default function Login() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="w-full h-[108px] flex justify-between items-center pl-[159px] bg-[#020202] pr-[175px]">
        <img
          src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo_2.png?v=1696826748&width=160"
          alt="logo"
        />

        <div className="flex font-barlow pt-[2px] text-[15px] pl-[53px]">
          <a
            className="text-[#fff] hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]"
            href="/"
          >
            HOME
          </a>
          <a
            className="text-[#fff] hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]"
            href="#"
          >
            COLLECTION
          </a>
          <a
            className="text-[#fff] hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]"
            href="#"
          >
            PRODUCTS
          </a>
          <span className="text-[#fff] hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]">
            OTHER PAGES
          </span>
        </div>

        <div className="flex space-x-1 text-white items-center gap-7">
          <FaSearch className="transition-all cursor-pointer w-[19px] h-[19px]" />
          <button
            className="text-white hover:text-[#aa8453] transition-all"
            onClick={toggleSidebar}
          >
            <GoPerson className="transition-all cursor-pointer w-[24px] h-[24px]" />
          </button>

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

      <div className="flex-grow text-center pt-[90px] w-full flex flex-col items-center pb-[30px]">
        <div className=" pb-[90px]">
          <h1 className="text-[30px] text-[#222] font-gilda">
            FREQUENTLY ASKED QUESTIONS
          </h1>

          <div className="flex justify-center items-center space-x-2 mt-4 text-[#222]">
            <a href="/">
              <IoHomeOutline className="w-3 h-3" />
            </a>
            <span className="flex justify-center text-[11px] items-center">
              Home <GoDotFill className="text-center mx-2 w-2 h-2" /> Frequently
              Asked Questions
            </span>
          </div>
        </div>
        <div className="flex ">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/757-delivery-flat_140x.gif?v=1695610093"
            alt=""
            className="pt-[22px] pb-[22px] pl-[10px] pr-[10px]"
          />
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/299-coins-dollar-flat_140x.gif?v=1695610092"
            alt=""
            className="pt-[22px] pb-[22px] pl-[10px] pr-[10px]"
          />
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/1708-home-safety-flat_140x.gif?v=1695610092"
            alt=""
            className="pt-[22px] pb-[22px] pl-[10px] pr-[10px]"
          />
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/1413-page-size-flat_140x.gif?v=1695610092"
            alt=""
            className="pt-[22px] pb-[22px] pl-[10px] pr-[10px]"
          />
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/455-credit-card-bank-flat_140x.gif?v=1695610092"
            alt=""
            className="pt-[22px] pb-[22px] pl-[10px] pr-[10px]"
          />
        </div>
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
        } transition-transform duration-700 ease-in-out z-50`}
      >
        <div className="px-[40px] py-[100px] text-[18px] text-left">
          <ul className="space-y-9 ">
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
              <span>CURRENCY</span>
              <div className="text-[11px] font-barlow">USD</div>
            </li>
            <li className="text-[14px] font-gilda">
              <span>LANGUAGE</span>
              <div className="text-[11px] font-barlow">ENGLISH</div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
