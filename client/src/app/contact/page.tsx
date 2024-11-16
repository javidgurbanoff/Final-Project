"use client";

import React, { useState } from "react";
import Footer from "../features/footer/footer";
import { IoHomeOutline } from "react-icons/io5";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import NavbarWithSidebar from "../components/NavbarWithSidebar/NavbarWithSidebar";
import Modal from "../components/Modal/Modal";
import { GoDotFill } from "react-icons/go";

export default function Contact() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavbarWithSidebar />
      <BackToTopButton />
      <Modal />

      <div className="flex-grow text-center pt-[90px] w-full flex flex-col items-center pb-[30px]">
        <div className=" pb-[90px]">
          <h1 className="text-[30px] text-[#222] font-gilda">CONTACT</h1>

          <div className="flex justify-center items-center space-x-2 mt-4 text-[#222]">
            <a href="/">
              <IoHomeOutline className="w-3 h-3" />
            </a>
            <span className="flex justify-center text-[11px] items-center">
              Home <GoDotFill className="text-center mx-2 w-2 h-2" /> Contact
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
