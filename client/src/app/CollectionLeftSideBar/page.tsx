"use client";

import React, { useState } from "react";
import Footer from "../features/footer/footer";
import { IoHomeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GoPerson, GoDotFill } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineShoppingCart, MdOutlineTune } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoTrashOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import Sidebar from "../components/SideBar/SideBar";

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
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />{" "}
      <div className="w-full h-[108px] flex justify-between items-center pl-[159px] bg-[#020202] pr-[175px]">
        <a href="/">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo_2.png?v=1696826748&width=160"
            alt="logo"
          />
        </a>

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
      <div className="pt-[147px] pb-[147px] mb-[110px] h-[375px] bg-[#e7e8eb]">
        <div className="ml-44">
          <h1 className="text-[30px] font-gilda mb-[7px] text-[#222222]">
            ARMCHAIR
          </h1>
          <div className="flex items-center space-x-2 text-[11px] text-[#222]">
            <a href="/">
              <IoHomeOutline className="w-4 h-4" />
            </a>
            <span className="flex justify-center pt-1 items-center">
              Home <GoDotFill className="text-center mx-2 w-3 h-3" /> Armchair
            </span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-[1200px] flex px-4 mx-auto">
          <div className="w-[270px]">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <GiHamburgerMenu className="text-lg" />
                <h5 className="font-barlow text-lg text-[#202020] pl-2">
                  CATEGORIES
                </h5>
              </div>
              <ul className="text-sm text-[#6b7280] space-y-2">
                {[
                  "Living Room",
                  "Bedroom",
                  "Kitchen",
                  "Planter",
                  "Bookshelf",
                  "See More +",
                ].map((item) => (
                  <li
                    key={item}
                    className="py-2 px-2 hover:bg-[#efefef] cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <MdOutlineTune className="text-lg" />
                <h5 className="font-gilda text-lg text-[#202020] pl-2">
                  FILTER BY
                </h5>
              </div>
              <div className="flex items-center justify-center bg-[#aa8453] text-white h-12 rounded cursor-pointer hover:bg-[#2b2b2b] hover:text-[#aa8453] transition">
                <IoTrashOutline className="mr-2" />
                <h6 className="text-base">Clear All</h6>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <IoIosArrowUp className="text-[#202020]" />
                  <h6 className="text-[14px] text-[#202020] font-extrabold font-barlow">
                    AVAILABILITY
                  </h6>
                </div>
                <span className="text-[10px] text-[#bcbcbc] cursor-pointer">
                  RESET
                </span>
              </div>
              <div className="space-y-2">
                <label className="flex items-center text-[#6b7280] text-sm">
                  <input type="checkbox" className="mr-2" />
                  In stock
                  <span className="ml-auto text-[10px] text-[#bcbcbc]">
                    (32)
                  </span>
                </label>
                <label className="flex items-center text-[#6b7280] text-sm">
                  <input type="checkbox" className="mr-2" />
                  Out of stock
                  <span className="ml-auto text-[10px] text-[#bcbcbc]">
                    (1)
                  </span>
                </label>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <IoIosArrowUp className="text-[#202020]" />
                  <h6 className="text-[14px] text-[#202020] font-extrabold font-barlow">
                    PRICE
                  </h6>
                </div>
                <span className="text-[10px] text-[#bcbcbc] cursor-pointer">
                  RESET
                </span>
              </div>
              <div className="relative mb-4">
                <div className="h-2 bg-[#aa8453] rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  className="w-[90px] border border-[#e0e0e0] rounded p-1 text-center"
                  value="0"
                  readOnly
                />
                <span className="px-2">-</span>
                <input
                  type="text"
                  className="w-[90px] border border-[#e0e0e0] rounded p-1 text-center"
                  value="956"
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="flex-1 bg-gray-100"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
