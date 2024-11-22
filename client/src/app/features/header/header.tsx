"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { BiStar } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import BackToTopButton from "@/app/components/BackToTopButton/BackToTopButton";
import CookieConsent from "@/app/components/CookieConsent/CookieConsent";
import Link from "next/link";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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
        { name: "Collection Left Sidebar", link: "/CollectionLeftSidebar" },
        { name: "Collection 2", link: "#" },
        { name: "Collection 2", link: "#" },
        { name: "Collection 2", link: "#" },
        { name: "Collection 2", link: "#" },
      ],
    },
    {
      name: "PRODUCTS",
      link: "#",
      subItems: [
        { name: "Product", link: "/product" },
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
        { name: "Account", link: "/account" },
        { name: "Store Direction Page", link: "#" },
        { name: "Store Locations Page", link: "#" },
        { name: "Testimonials Page", link: "#" },
      ],
    },
  ];

  return (
    <div className="relative text-center">
      <BackToTopButton />
      <CookieConsent />
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
        <Link
          href="#"
          className="text-[14px] mb-3 inline-block font-barlow underline underline-offset-2 hover:text-[#aa8453] transition-all duration-300"
        >
          DISCOVERY NOW
        </Link>
      </div>

      <div className="absolute top-8 left-4 right-4 flex justify-between items-center pl-[159px] pr-[175px]">
        <Link href="/">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo_2.png?v=1696826748&width=160"
            alt="logo"
            className="cursor-pointer"
          />
        </Link>

        <div className="flex font-barlow pt-[2px] text-[15px] pl-[53px]">
          {NavbarItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.link}
                className="text-white hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px] relative"
              >
                {item.name}
              </Link>
              {item.subItems && (
                <div className="hidden group-hover:block absolute left-0 mt-2 text-left bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1 w-[200px]">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex space-x-1 text-white items-center gap-7">
          <FaSearch
            className="transition-all cursor-pointer w-[19px] h-[19px]"
            onClick={toggleSearchBar}
          />
          <Link href="#" onClick={toggleSidebar}>
            <GoPerson className="transition-all cursor-pointer w-[24px] h-[24px]" />
          </Link>
          <div className="relative">
            <BiStar className="transition-all cursor-pointer w-[24px] h-[24px]" />
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

      <div
        className={`absolute top-0 left-0 right-0 z-50 transition-transform duration-500 ${
          isSearchBarOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } flex justify-center items-center bg-white py-5 shadow-md`}
      >
        <div className="flex items-center border border-gray-300 rounded-md w-full max-w-4xl overflow-hidden">
          <FaSearch className="ml-3 text-gray-400" />
          <input
            type="text"
            className="p-3 w-full h-[50px] outline-none"
            placeholder="Enter your keywords"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="px-5 py-3 text-[12px] text-black rounded-md ">
            SEARCH
          </button>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
      {isSearchBarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSearchBar}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 w-[370px] h-full bg-[#ffffff] text-[#6b7280] transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-700 ease-in-out z-50`}
      >
        <div className="px-[40px] py-[100px] text-[18px] text-left">
          <ul className="space-y-9 text-[#222222] font-barlow">
            <li>
              <Link
                href="/login"
                className="hover:text-[#aa8453] transition-all"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="hover:text-[#aa8453] transition-all"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                href="/wishlist"
                className="hover:text-[#aa8453] transition-all"
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="hover:text-[#aa8453] transition-all"
              >
                Checkout
              </Link>
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
