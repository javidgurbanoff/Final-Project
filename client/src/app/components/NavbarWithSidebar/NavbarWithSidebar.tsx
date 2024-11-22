"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { BiStar } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import Dropdown from "@/app/components/DropDown/DropDown";

const NavbarWithSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Dropdown items for each menu
  const collectionItems = [
    { name: "Collection 1", link: "#" },
    { name: "Collection 2", link: "#" },
    { name: "Collection 3", link: "#" },
  ];

  const productItems = [
    { name: "Product 1", link: "#" },
    { name: "Product 2", link: "#" },
  ];

  const otherPagesItems = [
    { name: "404 Error", link: "#" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "FAQs Page", link: "/faq" },
    { name: "Account", link: "/account" },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <div className="w-full h-[108px] flex justify-between items-center px-[175px] bg-[#020202]">
        <Link href="/">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo_2.png?v=1696826748&width=160"
            alt="logo"
          />
        </Link>

        <div className="flex font-barlow items-center pt-[2px] text-[15px] pl-[53px]">
          <Link
            href="/"
            className="text-[#fff] hover:text-[#aa8453] px-[30px] py-[10px]"
          >
            HOME
          </Link>

          <Dropdown
            trigger={
              <span className="text-[#fff] hover:text-[#aa8453] px-[30px] py-[10px]">
                COLLECTION
              </span>
            }
            items={collectionItems}
          />

          <Dropdown
            trigger={
              <span className="text-[#fff] hover:text-[#aa8453] px-[30px] py-[10px]">
                PRODUCTS
              </span>
            }
            items={productItems}
          />

          <Dropdown
            trigger={
              <span className="text-[#fff] hover:text-[#aa8453] px-[30px] py-[10px]">
                OTHER PAGES
              </span>
            }
            items={otherPagesItems}
          />
        </div>

        <div className="flex space-x-1 text-white items-center gap-7">
          <FaSearch className="w-[19px] h-[19px] cursor-pointer" />
          <button onClick={toggleSidebar}>
            <GoPerson className="w-[24px] h-[24px] cursor-pointer" />
          </button>

          <div className="relative">
            <BiStar className="w-[24px] h-[24px] cursor-pointer" />
            <span className="absolute top-0 right-0 translate-x-[35%] -translate-y-[35%] bg-[#aa8453] text-white rounded-full w-[16px] h-[16px] text-[10px] flex items-center justify-center">
              0
            </span>
          </div>

          <div className="relative">
            <MdOutlineShoppingCart className="w-[24px] h-[24px] cursor-pointer" />
            <span className="absolute top-0 right-0 translate-x-[35%] -translate-y-[35%] bg-[#aa8453] text-white rounded-full w-[16px] h-[16px] text-[10px] flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 w-[370px] h-full bg-white text-[#6b7280] transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-700 ease-in-out z-50`}
      >
        <div className="px-[40px] py-[100px] text-[18px] text-left">
          <ul className="space-y-9">
            <li>
              <Link href="/login" className="hover:text-[#aa8453]">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-[#aa8453]">
                Register
              </Link>
            </li>
            <li>
              <Link href="/wishlist" className="hover:text-[#aa8453]">
                Wishlist
              </Link>
            </li>
            <li>
              <Link href="/account" className="hover:text-[#aa8453]">
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
    </>
  );
};

export default NavbarWithSidebar;
