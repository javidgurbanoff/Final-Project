"use client";

import React, { useState, useEffect } from "react";
import Footer from "../features/footer/footer";
import { IoHomeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import NavbarWithSidebar from "../components/NavbarWithSidebar/NavbarWithSidebar";
import Link from "next/link";
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
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      setMessage(
        "Password must be at least 8 characters long, include one uppercase letter and one number."
      );
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
      const response = await fetch(
        "http://localhost:3001/api/v1/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

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
            className={`bg-[#aa8453] w-[570px] h-[50px] text-white px-6 py-2 rounded ${
              pending
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#2b2b2b] hover:text-[#aa8453]"
            } transition-all flex justify-center items-center`}
          >
            {pending ? <span className="loader" /> : "Register"}
          </button>

          {message && <p className="text-red-500 mt-4">{message}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
}
