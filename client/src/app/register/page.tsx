import React from "react";
import Footer from "../features/footer/footer"; // Import Footer
import { IoHomeOutline } from "react-icons/io5"; // Import Home Icon
import { FaSearch } from "react-icons/fa"; // Import Search Icon
import { GoPerson } from "react-icons/go"; // Import Person Icon
import { IoIosStarOutline } from "react-icons/io"; // Import Star Icon
import { MdOutlineShoppingCart } from "react-icons/md"; // Import Cart Icon

export default function Register() {
  return (
    <div>
      {/* Header with navigation and icons */}
      <div className="absolute w-full h-[108px]  flex justify-between items-center pl-[159px] bg-[#020202] pr-[175px]">
        <img
          src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo_2.png?v=1696826748&width=160"
          alt="logo"
        />

        <div className="flex font-barlow pt-[2px] text-[15px] pl-[53px]">
          <a
            className="text-[#aa8453] hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]"
            href="/"
          >
            HOME
          </a>
          <a
            className="text-white hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]"
            href="#"
          >
            COLLECTION
          </a>
          <a
            className="text-white hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]"
            href="#"
          >
            PRODUCTS
          </a>
          <span className="text-white hover:text-[#aa8453] cursor-pointer transition-all pt-[10px] pb-[10px] pl-[30px] pr-[30px]">
            OTHER PAGES
          </span>
        </div>

        {/* Icons with badges */}
        <div className="flex space-x-1 text-white items-center gap-7">
          <FaSearch className="transition-all cursor-pointer w-[19px] h-[19px]" />
          <a href="/register">
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

      {/* Registration Form */}
      <div className="text-center pt-[90px] w-full h-[656px] pb-[30px]">
        <h1 className="text-[30px] text-[#222] font-gilda">CREATE ACCOUNT</h1>

        {/* Breadcrumb */}
        <div className="flex justify-center items-center space-x-2 mt-4 text-[#222]">
          <a href="/">
            <IoHomeOutline className="w-6 h-6" />
          </a>
          <span>Home &gt; Create Account</span>
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center mt-6 space-y-4">
          <input
            placeholder="FIRST NAME"
            type="text"
            className="w-[570px] h-[50px] p-2 border border-gray-300 rounded"
          />
          <input
            placeholder="LAST NAME"
            type="text"
            className="w-[570px] h-[50px] p-2 border border-gray-300 rounded"
          />
          <input
            placeholder="EMAIL"
            type="email"
            className="w-[570px] h-[50px] p-2 border border-gray-300 rounded"
          />
          <input
            placeholder="PASSWORD"
            type="password"
            className="w-[570px] h-[50px] p-2 border border-gray-300 rounded"
          />

          <div className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>Sign up for our newsletter</span>
          </div>

          {/* Submit Button */}
          <button className="bg-[#aa8453] w-[570px] h-[50px] text-white px-6 py-2 rounded hover:bg-[#2b2b2b] hover:text-[#aa8453] transition-all">
            Register
          </button>
        </div>

        {/* Already have an account */}
        <div className="mt-4">
          <span className="text-sm text-gray-500">
            If you have an account, please{" "}
            <a href="/login" className="text-[#aa8453] hover:underline">
              Login Here
            </a>
          </span>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
