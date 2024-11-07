"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import BackToTopButton from "@/app/components/BackToTopButton/BackToTopButton";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const NavbarItems = [
    {
      name: "HOME",
      link: "#",
    },
    {
      name: "COLLECTION",
      link: "#",
      subItems: [
        { name: "Collection 1", link: "#" },
        { name: "Collection 2", link: "#" },
      ],
    },
    {
      name: "PRODUCTS",
      link: "#",
      subItems: [
        { name: "Product 1", link: "#" },
        { name: "Product 2", link: "#" },
      ],
    },
    {
      name: "OTHER PAGES",
      link: "#",
      subItems: [
        { name: "404 Error", link: "#" },
        { name: "About Us", link: "/about" },
        { name: "Contact Us", link: "/contact" },
        { name: "FAQs Page", link: "/faq" },
        { name: "Store Direction Page", link: "#" },
        { name: "Store Locations Page", link: "#" },
        { name: "Testimonials Page", link: "#" },
      ],
    },
  ];

  return (
    <div className="relative text-center">
      <BackToTopButton />
      <img
        src="https://vinova-furstore.myshopify.com/cdn/shop/files/s-4-1_2048x.jpg?v=1697014370"
        alt="background"
        className="pb-[30px]"
      />

      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-16 text-white">
        <span className="font-gilda font-extralight text-[47px] text-shadow-lg">
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
          {NavbarItems.map((item, index) => (
            <div key={index} className="relative group">
              <a
                href={item.link}
                className="text-white hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]"
              >
                {item.name}
              </a>
              {item.subItems && (
                <div className="hidden group-hover:block absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
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
        } transition-transform duration-700 ease-in-out z-50`}
      >
        <div className="px-[40px] py-[100px] text-[18px] text-left">
          <ul className="space-y-9 text-[#222222] font-barlow ">
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
    </div>
  );
};

export default Header;
