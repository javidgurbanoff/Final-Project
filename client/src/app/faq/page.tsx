"use client";

import React, { useState } from "react";
import Footer from "../features/footer/footer";
import { IoHomeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import Modal from "../components/Modal/Modal";
import NavbarWithSidebar from "../components/NavbarWithSidebar/NavbarWithSidebar";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

export default function Faq() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const faqItems = [
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/files/757-delivery-flat_140x.gif?v=1695610093",
      title: "Delivery Policy",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/files/299-coins-dollar-flat_140x.gif?v=1695610092",
      title: "Return & Refund",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/files/1708-home-safety-flat_140x.gif?v=1695610092",
      title: "Privacy Policy",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/files/1413-page-size-flat_140x.gif?v=1695610092",
      title: "Size Guide",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/files/455-credit-card-bank-flat_140x.gif?v=1695610092",
      title: "Payment & Taxes",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavbarWithSidebar />
      <BackToTopButton />
      <Modal />
      <div className="flex-grow text-center pt-[90px] w-full flex flex-col items-center pb-[30px]">
        <div className="pb-[90px]">
          <h1 className="text-[30px] text-[#222] font-gilda">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <div className="flex justify-center items-center space-x-2 mt-4 text-[#222]">
            <a href="/">
              <IoHomeOutline className="w-3 h-3" />
            </a>
            <span className="flex justify-center text-[11px] items-center">
              Home <GoDotFill className="text-center mx-2 w-2 h-2" /> Frequently
              Asked Questions
            </span>
          </div>
        </div>
        <div className="flex py-[22px] px-[10px]">
          {faqItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={item.src} alt={item.title} className=" pb-3" />
              <h2 className="text-sm font-semibold text-[#222]">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center px-4 max-w-3xl">
          <p className="text-[15px] text-[#222]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            consequat ut ex vel finibus. Nunc eget molestie purus. Fusce
            imperdiet pulvinar est, eget fermentum nisi. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
