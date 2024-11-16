"use client";

import React, { useState } from "react";
import Footer from "../features/footer/footer";
import { IoHomeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import Modal from "../components/Modal/Modal";
import NavbarWithSidebar from "../components/NavbarWithSidebar/NavbarWithSidebar";
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
      <NavbarWithSidebar />
      <Modal />
      <div className="flex-grow text-center pt-[90px] w-full flex flex-col items-center pb-[30px]">
        <div className=" pb-[90px]">
          <h1 className="text-[30px] text-[#222] font-gilda">ACCOUNT</h1>

          <div className="flex justify-center items-center space-x-2 mt-4 text-[#222]">
            <Link href="/">
              <IoHomeOutline className="w-3 h-3" />
            </Link>
            <span className="flex justify-center items-center">
              Home <GoDotFill className="text-center mx-2 w-2 h-2" /> Account
            </span>
          </div>
        </div>
        <div className="w-[600px] h-[400px] flex flex-col space-y-4">
          <div className="w-[570px] h-[256px]">
            <h3 className="text-[15px] text-[#202020] border-b w-[170px] border-[#105caa] pb-[8px] font-bold font-barlow mb-[13px] text-left">
              Reset your password
            </h3>
            <p className="text-[13px] font-barlow text-[#6b7280] text-left mb-[10px]">
              We will send you an email to reset your password.
            </p>
            <input
              type="email"
              id="RecoverEmail"
              placeholder="Enter your email address"
              className="w-full text-[12px] h-[50px] p-5 border border-[#ececec] rounded hover:border-[#aa8453] mb-5"
            />
            <div className="flex space-x-4 pt-3">
              <button className="rounded-[4px] bg-[#aa8453] text-[#ffffff] font-barlow h-[50px] px-9 py-2 hover:bg-[#2b2b2b] hover:text-[#aa8453] transition-all">
                Submit
              </button>
              <button className="rounded-[4px] bg-[#aa8453] text-[#ffffff] font-barlow h-[50px] px-9 py-2 hover:bg-[#2b2b2b] hover:text-[#aa8453] transition-all">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
