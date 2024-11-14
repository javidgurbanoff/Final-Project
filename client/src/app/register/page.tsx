"use client";

import Footer from "../features/footer/footer";
import { IoHomeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "@/app/components/SideBar/SideBar";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.surname.trim() ||
      !form.email.trim() ||
      !form.password.trim()
    ) {
      setMessage("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (form.password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    setPending(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setMessage("User created successfully!");
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Error creating user.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error creating user.");
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
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />{" "}
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
            aria-label="Toggle Sidebar"
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
        <div className="pb-[90px]">
          <h1 className="text-[30px] text-[#222] font-gilda">CREATE ACCOUNT</h1>

          <div className="flex justify-center items-center space-x-2 mt-4 text-[13px] text-[#222]">
            <Link href="/">
              <IoHomeOutline className="w-3 h-3" />
            </Link>
            <span className="flex justify-center items-center">
              Home <GoDotFill className="text-center mx-2 w-2 h-2" />
              Create Account
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-[600px] flex flex-col pb-4 space-y-4"
        >
          <input
            placeholder="FIRST NAME"
            disabled={pending}
            className="w-[570px] text-[12px] h-[50px] p-5 border border-[#ececec] focus:border-[#aa8453] rounded hover:border-[#aa8453]"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="SURNAME"
            disabled={pending}
            className="w-[570px] text-[12px] h-[50px] p-5 border border-[#ececec] focus:border-[#aa8453] rounded hover:border-[#aa8453]"
            value={form.surname}
            onChange={(e) => setForm({ ...form, surname: e.target.value })}
          />
          <input
            placeholder="EMAIL"
            disabled={pending}
            className="w-[570px] text-[12px] h-[50px] p-5 border border-[#ececec] focus:border-[#aa8453] rounded hover:border-[#aa8453]"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="PASSWORD"
            type="password"
            disabled={pending}
            className="w-[570px] text-[12px] h-[50px] p-5 border border-[#ececec] rounded hover:border-[#aa8453]"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <div className="flex gap-1 text-left">
            <input type="checkbox" />
            <span className="text-[12px] font-barlow">
              Sign Up for our newsletter
            </span>
          </div>
          <div className="flex items-center space-x-2 text-[12px] font-barlow">
            <span className="pl-1">If you already have an account, please</span>
            <Link href="/login">
              <span className="text-[#6aa1da] hover:text-[#aa8453]">
                Login Here
              </span>
            </Link>
          </div>
          <button
            type="submit"
            disabled={pending}
            className={`bg-[#aa8453] w-[570px] h-[50px] text-white px-6 py-2 rounded ${
              pending
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#2b2b2b] hover:text-[#aa8453]"
            } transition-all`}
          >
            {pending ? "Registering..." : "Register"}
          </button>
          {message && <p className="text-red-500 mt-2">{message}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
}
