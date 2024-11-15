"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Footer from "../features/footer/footer";
import { IoHomeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import Sidebar from "@/app/components/SideBar/SideBar";
import Modal from "@/app/components/Modal/Modal";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      setMessage("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setPending(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        setMessage("Registration successful!");
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error during registration.");
    } finally {
      setPending(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Modal />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className="w-full h-[108px] flex justify-between items-center pl-[159px] bg-[#020202] pr-[175px]">
        <Link href="/">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo_2.png?v=1696826748&width=160"
            alt="logo"
          />
        </Link>

        <div className="flex font-barlow pt-[2px] text-[15px] pl-[53px]">
          <Link
            className="text-[#fff] hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]"
            href="/"
          >
            HOME
          </Link>
          <Link
            className="text-[#fff] hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]"
            href="#"
          >
            COLLECTION
          </Link>
          <Link
            className="text-[#fff] hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]"
            href="#"
          >
            PRODUCTS
          </Link>
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

        <form
          className="w-[600px] h-[400px] flex flex-col justify-center space-y-4"
          onSubmit={handleRegisterSubmit}
        >
          <h4 className="text-[#202020] text-left font-barlow font-extrabold text-[20px]">
            REGISTER
          </h4>
          <p className="text-[14px] text-left mb-[15px]">
            Insert your information:
          </p>
          <input
            placeholder="ENTER YOUR NAME"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[570px] text-[12px] h-[50px] p-5 border 1px border-[#ececec] rounded hover:border-[#aa8453] "
          />
          <input
            placeholder="ENTER YOUR EMAIL"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[570px] text-[12px] h-[50px] p-5 border 1px border-[#ececec] rounded hover:border-[#aa8453] "
          />
          <input
            placeholder="PASSWORD"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[570px] text-[12px] h-[50px] p-5 border 1px border-[#ececec] rounded hover:border-[#aa8453]"
          />

          <div className="flex items-center space-x-2 text-[12px] font-barlow">
            <span className="pl-1">Already have an account?</span>
            <Link href="/login">
              <span className="text-[#6aa1da] hover:text-[#aa8453]">
                Login Here
              </span>
            </Link>
          </div>

          <button
            type="submit"
            disabled={pending}
            className={`bg-[#aa8453] text-white font-bold py-2 px-4 rounded mt-4 w-full ${
              pending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {pending ? "Please wait..." : "Register"}
          </button>
          {message && <p className="text-red-500 mt-4">{message}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
}
