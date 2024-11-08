"use client";

import React, { useState } from "react";
import Footer from "../features/footer/footer";
import { IoHomeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export default function About() {
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
        <a href="/">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo_2.png?v=1696826748&width=160"
            alt="Vinova Fur Store Logo"
          />
        </a>

        <div className="flex font-barlow pt-[2px] text-[15px] pl-[53px]">
          {["HOME", "COLLECTION", "PRODUCTS", "OTHER PAGES"].map(
            (item, index) => (
              <a
                key={index}
                className="text-[#fff] hover:text-[#aa8453] cursor-pointer transition-all py-[10px] px-[30px]"
                href={item === "HOME" ? "/" : "#"}
              >
                {item}
              </a>
            )
          )}
        </div>

        <div className="flex space-x-7 text-white items-center">
          <FaSearch className="transition-all cursor-pointer w-[19px] h-[19px]" />
          <button
            className="text-white hover:text-[#aa8453] transition-all"
            onClick={toggleSidebar}
          >
            <GoPerson className="w-[24px] h-[24px]" />
          </button>

          <div className="relative">
            <IoIosStarOutline className="transition-all cursor-pointer w-[24px] h-[24px]" />
            <span className="absolute top-0 right-0 translate-x-[35%] -translate-y-[35%] bg-[#aa8453] text-white rounded-full w-[16px] h-[16px] text-[10px] flex items-center justify-center">
              0
            </span>
          </div>

          <div className="relative">
            <MdOutlineShoppingCart className="transition-all cursor-pointer w-[24px] h-[24px]" />
            <span className="absolute top-0 right-0 translate-x-[35%] -translate-y-[35%] bg-[#aa8453] text-white rounded-full w-[16px] h-[16px] text-[10px] flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>

      <div className="flex-grow text-center pt-[90px] w-full flex flex-col items-center pb-[30px]">
        <div className="pb-[90px]">
          <h1 className="text-[30px] text-[#222] font-gilda">ABOUT US</h1>

          <div className="flex justify-center items-center space-x-2 mt-4 text-[#222]">
            <a href="/">
              <IoHomeOutline className="w-3 h-3" />
            </a>
            <span className="flex items-center text-[12px]">
              Home <GoDotFill className="mx-2 w-2 h-2 text-[#232630]" /> About
              Us
            </span>
          </div>
        </div>

        <div className="w-[1170px]">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/about_1512x.jpg?v=1695614575"
            alt="About our company"
            className="w-full h-auto mb-[30px]"
          />
          <div className="text-[16px] text-left">
            <p className="font-bold mb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              consequat ut ex vel finibus. Nunc eget molestie purus. Fusce
              imperdiet pulvinar est, eget fermentum nisi.Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae
            </p>
            <p className="mb-[30px]">
              Maecenas congue metus id turpis iaculis mattis. Sed pellentesque
              id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit
              eros maximus ut. Integer non tincidunt justo, rhoncus Aenean
              venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo
              et luctus rutrum, lobortis sed mauris. Integer congue, sem
              elementum varius tristique, erat nulla rutrum risus, a imperdiet
              nulla lorem fermentum erat. Pellentesque elementum justo at velit
              fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta
              eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien,
              eget faucibus sapien. Proin hendrerit lacus turpis.
            </p>
            <p className="mb-[5px]">
              Maecenas congue metus id turpis iaculis mattis. Sed pellentesque
              id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit
              eros maximus ut. Integer non tincidunt justo, rhoncus Aenean
              venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo
              et luctus rutrum, lobortis sed mauris.
            </p>
          </div>

          <div className="flex items-center justify-center bg-[#f7f7f7] rounded-lg p-10 mt-[90px] max-w-[1000px] mx-auto">
            <img
              src="https://vinova-furstore.myshopify.com/cdn/shop/files/quote_380x.png?v=1695614714"
              alt="Decorative quote graphic"
              className="mr-6"
            />
            <div className="w-full max-w-[700px]">
              <div className="flex items-start">
                <img
                  src="https://vinova-furstore.myshopify.com/cdn/shop/files/icon_quote_40x32.png?v=1695614714"
                  alt="Quote icon"
                  className="mr-4 w-[32px] h-auto"
                />
                <p className="text-[20px] text-left leading-8 text-[#232630]">
                  Best purchase I’ve made this winter! The color and knitting
                  are exquisite and it's so comfy! Went from NYC to Miami
                  without ever taking it off. Super cute!!
                </p>
              </div>
              <p className="text-left text-[13px] mt-4 pl-9 font-semibold text-[#555]">
                Kwang Shang - CEO Vinovathemes
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-[1200px] h-[570px] items-center text-left pb-[30px] pt-[30px]">
          <div className="flex-1 max-w-[600px] ">
            <h3 className="font-bold text-[24px] mt-[10px]">Why choose us?</h3>
            <p className="line-clamp-5 mt-[10px] mb-[10px]">
              Maecenas congue metus id turpis iaculis mattis. Sed pellentesque
              id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit
              eros maximus ut. Integer non tincidunt justo, rhoncus Aenean
              venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo
              et luctus rutrum, lobortis sed mauris. Integer congue, sem
              elementum varius tristique.
            </p>
          </div>

          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/71390-shopping-cart-loader_768x.gif?v=1695614716"
            alt="Loading icon"
            className="ml-10"
          />
        </div>

        <div className="flex w-[1200px] h-[570px] items-center text-left pb-[30px] pt-[30px]">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/74384-swipe-for-shopping_768x.gif?v=1695614722"
            alt="Loading icon"
            className=" pl-[15px] pr-[15px]"
          />

          <div className="flex-1 max-w-[600px]">
            <h3 className="font-bold text-[24px] mt-[10px]">
              Trusted online shopping
            </h3>
            <p className="line-clamp-5 mt-[10px] mb-[10px] text-[16px] text-[#505157]">
              Maecenas congue metus id turpis iaculis mattis. Sed pellentesque
              id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit
              eros maximus ut. Integer non tincidunt justo, rhoncus Aenean
              venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo
              et luctus rutrum, lobortis sed mauris. Integer congue, sem
              elementum varius tristique.
            </p>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`fixed top-0 right-0 w-[370px] h-full bg-[#ffffff] text-[#6b7280] transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-700 ease-in-out z-50`}
      >
        <div className="px-[40px] py-[100px] text-[18px]">
          <ul className="space-y-9">
            {["Login", "Register", "Wishlist", "Checkout"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-[#aa8453] transition-all"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
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
