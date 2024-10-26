"use client"; // Ensures client-side rendering

import React, { useState } from "react";
import Footer from "../features/footer/footer";
import { IoHomeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export default function Register() {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when background overlay is clicked
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header with navigation and icons */}
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

        {/* Icons with badges */}
        <div className="flex space-x-1 text-white items-center gap-7">
          <FaSearch className="transition-all cursor-pointer w-[19px] h-[19px]" />
          <a href="/register">
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

          {/* Menu button to open sidebar */}
          <button
            className="text-white hover:text-[#aa8453] transition-all"
            onClick={toggleSidebar} // This will toggle the sidebar
          >
            Menu
          </button>
        </div>
      </div>

      {/* Registration Form */}
      <div className="flex-grow text-center pt-[90px] w-full flex flex-col items-center pb-[30px]">
        <h1 className="text-[30px] text-[#222] font-gilda">ACCOUNT</h1>

        {/* Breadcrumb */}
        <div className="flex justify-center items-center space-x-2 mt-4 text-[#222]">
          <a href="/">
            <IoHomeOutline className="w-3 h-3" />
          </a>
          <span className="flex justify-center items-center">
            Home <GoDotFill className="text-center w-2 h-2" /> Account
          </span>
        </div>

        {/* Form Section */}
        <div className="w-[600px] flex flex-col mt-6 space-y-4">
          <h4 className="text-[#202020] text-[18px]">SIGN IN</h4>
          <p className="text-[14px]">Insert your account information:</p>
          <input
            placeholder="ENTER YOUR EMAIL"
            type="email"
            className="w-[570px] h-[50px] p-2 border border-gray-300 rounded"
          />
          <input
            placeholder="PASSWORD"
            type="password"
            className="w-[570px] h-[50px] p-2 border border-gray-300 rounded"
          />

          <div className="flex items-center space-x-2 text-[12px] font-barlow">
            <span>If you don't have an account, please</span>
            <a href="/register">
              <span className="text-[#6aa1da] hover:text-[#aa8453]">
                Register Here
              </span>
            </a>
          </div>

          {/* Submit Button */}
          <button className="bg-[#aa8453] w-[570px] h-[50px] text-white px-6 py-2 rounded hover:bg-[#2b2b2b] hover:text-[#aa8453] transition-all">
            Login
          </button>
        </div>
      </div>

      {/* Overlay - background, visible when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[370px] h-full bg-[#ffffff] text-[#6b7280] transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-700 ease-in-out z-50`}
      >
        <div className="p-8">
          <ul className="space-y-3 text-[18px] text-left">
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
            <li className="pt-[30px] text-[14px]">
              <a
                href="/account"
                className="hover:text-[#aa8453] transition-all"
              >
                Currency
              </a>
              <div className="text-[11px]"> USD</div>
            </li>
            <li className=" text-[14px]">
              <a
                href="/account"
                className="hover:text-[#aa8453] transition-all"
              >
                Language
              </a>
              <div className=" text-[11px]">ENGLISH</div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
