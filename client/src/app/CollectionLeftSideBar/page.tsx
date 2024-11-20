"use client";

import React, { useState } from "react";
import Footer from "../features/footer/footer";
import { IoHomeOutline, IoTrashOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { MdOutlineTune } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import NavbarWithSidebar from "../components/NavbarWithSidebar/NavbarWithSidebar";
import Modal from "../components/Modal/Modal";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

export default function CollectionLeftSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const catalogFurnitur = [
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/32_360x.jpg?v=1694678290",
      title: "Uiamond Halo Strud Cum",
      star: "4",
      price: "628",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/21_360x.jpg?v=1694678180",
      title: "Diamond Uiamond Halo Stud Sociis",
      star: "4",
      price: "200",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/18_360x.jpg?v=1694678145",
      title: "Diamond Halo Stud Quis",
      star: "4",
      price: "736",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/12_360x.jpg?v=1694678190",
      title: "Diamond Halo Stud Magnis",
      star: "4",
      price: "325",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/13_360x.jpg?v=1694678199",
      title: "Diamond Halo Stud Massa",
      star: "0",
      price: "450",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/15_360x.jpg?v=1694678110",
      title: "Diamond Halo Stud Monte",
      star: "0",
      price: "236",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/1_c2307dbf-d624-4bcd-b3de-99a7963f7496_360x.jpg?v=1694678001",
      title: "Diamond Halo Stud Conse",
      star: "0",
      price: "198",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/34_360x.jpg?v=1694677982",
      title: "Diamond Halo Stud Donec",
      star: "0",
      price: "409",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/3_360x.jpg?v=1694678220",
      title: "Diamond Halo Stud Cum",
      star: "0",
      price: "300",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/7_d7204dd0-b555-40c6-a0db-7b659380a3af_360x.jpg?v=1694678092",
      title: "Diamond Halo Stud Dolor",
      star: "0",
      price: "269",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/9_360x.jpg?v=1694678010",
      title: "Diamond Halo Stud Earrings",
      star: "4",
      price: "472",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/16_360x.jpg?v=1694678119",
      title: "Diamond Halo Stud Natoque",
      star: "2",
      price: "479",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <BackToTopButton />
      <NavbarWithSidebar />
      <Modal />
      <div className="pt-[147px] pb-[147px] mb-[110px] h-[375px] bg-[#e7e8eb]">
        <div className="ml-44">
          <h1 className="text-[30px] font-gilda mb-[7px] text-[#222222]">
            ARMCHAIR
          </h1>
          <div className="flex items-center space-x-2 text-[11px] text-[#222]">
            <Link href="/">
              <IoHomeOutline className="w-4 h-4" />
            </Link>
            <span className="flex justify-center pt-1 items-center">
              Home <GoDotFill className="text-center mx-2 w-3 h-3" /> Armchair
            </span>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-[1200px] flex px-4 mx-auto">
          <div className="w-[270px]">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <GiHamburgerMenu className="text-lg" />
                <h5 className="font-barlow text-lg text-[#202020] pl-2">
                  CATEGORIES
                </h5>
              </div>
              <ul className="text-sm text-[#6b7280] space-y-2">
                {[
                  "Living Room",
                  "Bedroom",
                  "Kitchen",
                  "Planter",
                  "Bookshelf",
                  "See More +",
                ].map((item) => (
                  <li
                    key={item}
                    className="py-2 px-2 hover:bg-[#efefef] cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-[25px] pb-[25px]">
              <div className="flex items-center mb-6">
                <MdOutlineTune className="text-lg" />
                <h5 className="font-gilda text-lg text-[#202020] pl-2">
                  FILTER BY
                </h5>
              </div>
              <div className="flex items-center justify-center bg-[#aa8453] text-white h-12 rounded cursor-pointer hover:bg-[#2b2b2b] hover:text-[#aa8453] transition">
                <IoTrashOutline className="mr-2" />
                <h6 className="text-base">Clear All</h6>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h6 className="text-[12px] text-[#202020] font-extrabold font-barlow">
                  COLOR
                </h6>
                <span className="text-[10px] text-[#bcbcbc] cursor-pointer">
                  RESET
                </span>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {[
                  "bg-black",
                  "[background-color:#0000FF]",
                  "[background-color:#A52A2A]",
                  "[background-color:#5F9EA0]",
                  "[background-color:#008B8B]",
                  "bg-orange-500",
                  "bg-cyan-500",
                  "bg-blue-300",
                  "bg-gray-400",
                  "bg-sky-200",
                  "bg-purple-500",
                  "bg-yellow-100",
                  "bg-indigo-900",
                  "bg-yellow-500",
                  "bg-red-600",
                  "[background-color:#FFFFFF]",
                  "bg-yellow-400",
                  "bg-lime-500",
                ].map((color, index) => (
                  <div
                    key={index}
                    className={`w-[28px] h-[28px] rounded-full ${color} cursor-pointer border`}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h6 className="text-[12px] text-[#202020] font-extrabold font-barlow">
                  AVAILABILITY
                </h6>
                <span className="text-[10px] text-[#bcbcbc] cursor-pointer">
                  RESET
                </span>
              </div>
              <div className="space-y-2">
                {[
                  { label: "In stock", count: 32 },
                  { label: "Out of stock", count: 1 },
                ].map((item) => (
                  <label
                    key={item.label}
                    className="flex items-center text-[#6b7280] text-sm"
                  >
                    <input type="checkbox" className="mr-2" />
                    {item.label}
                    <span className="ml-auto text-[10px] text-[#bcbcbc]">
                      ({item.count})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h6 className="text-[14px] text-[#202020] font-extrabold font-barlow">
                  PRICE
                </h6>
                <span className="text-[10px] text-[#bcbcbc] cursor-pointer">
                  RESET
                </span>
              </div>
              <div className="relative mb-4">
                <div className="h-2 bg-[#aa8453] rounded-full"></div>
              </div>
              <div className="flex items-center justify-between mb-[25px] pb-[25px]">
                <input
                  type="text"
                  className="w-[90px] border border-[#e0e0e0] rounded p-1 text-center"
                  value="0"
                  readOnly
                />
                <span className="px-2">-</span>
                <input
                  type="text"
                  className="w-[90px] border border-[#e0e0e0] rounded p-1 text-center"
                  value="956"
                  readOnly
                />
              </div>
            </div>

            <div className="mb-[25px] pb-[25px]">
              <div className="flex items-center justify-between mb-4">
                <h6 className="text-[12px] text-[#202020] font-extrabold font-barlow">
                  PRODUCT TYPE
                </h6>
                <span className="text-[10px] text-[#bcbcbc] cursor-pointer">
                  RESET
                </span>
              </div>
              <div className="space-y-2 max-h-40 w-64 overflow-y-auto">
                {[
                  "Baskets",
                  "Chairs",
                  "Clocks",
                  "Flower Pot",
                  "Flower Vase",
                  "Lamps",
                  "Post & Planters",
                  "Tables",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center text-[#6b7280] text-sm"
                  >
                    <input type="checkbox" className="mr-2" />
                    {item}
                    <span className="ml-auto text-[10px] text-[#bcbcbc]">
                      (1)
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 bg-gray-100 p-4 pl-[60px]">
            <div className="flex gap-1 items-center text-[14px] mb-4">
              <span>Sort By </span>
              <span className="font-bold">Featured</span>
              <span className="text-[#202020]"></span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {catalogFurnitur.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 cursor-pointer transition"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-40 object-cover mb-2 rounded"
                  />
                  <p className="font-bold text-[#222222] mb-1">{item.title}</p>
                  <span className="text-[#6b7280]">${item.price}</span>
                </div>
              ))}
            </div>
            <div className=" w-[840px] h-[123px] flex flex-col items-center justify-center mb-[15px]">
              <span className="text-[12px] font-barlow ">
                Showinf 12 of 32 products
              </span>
              <button className="bg-[#aa8453] text-[18px] w-[250px] px-[20px] h-[50px] text-white py-2 rounded">
                Load More Items
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
