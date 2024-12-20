"use client";
import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const BathRoom = () => {
  const [featureds, setFeatureds] = useState([]);

  const getFeatureds = () => {
    fetch("http://localhost:3001/api/v1/bathroom")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setFeatureds(data);
      })
      .catch((err) => console.error("Error fetching featureds:", err));
  };

  useEffect(() => {
    getFeatureds();
  }, []);

  return (
    <div className="w-full h-[397px] flex justify-center">
      <div className="flex w-[499px] h-[353px] relative">
        <div className="w-[206px] h-[324px] bg-[#1b1b1b] p-[30px] flex flex-col justify-center items-start">
          <h1 className="text-[24px] font-gilda text-[#ffffff] border-b-2 border-[#aa8453]">
            BATHROOM
          </h1>
          <ul className="mt-4 pl-[15px] text-[#ffffff] text-[16px] leading-8">
            <li className="hover:text-[#aa8453] transition-all duration-300 cursor-pointer">
              Table Lamp
            </li>
            <li className="hover:text-[#aa8453] transition-all duration-300 cursor-pointer">
              Pillow
            </li>
            <li className="hover:text-[#aa8453] transition-all duration-300 cursor-pointer">
              Mirror
            </li>
            <li className="hover:text-[#aa8453] transition-all duration-300 cursor-pointer mb-[18px]">
              Plants
            </li>
            <li className="mt-2 items-center flex transition-all duration-300 cursor-pointer group hover:text-[#aa8453]">
              View all
              <svg
                width="37"
                height="16"
                viewBox="0 0 37 16"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] ml-[5px] transition-all duration-300 group-hover:fill-[#aa8453]"
              >
                <path
                  d="M36.7071 8.70711C37.0976 8.31658 37.0976 7.68342 36.7071 7.29289L30.3431 0.928932C29.9526 0.538408 29.3195 0.538408 28.9289 0.928932C28.5384 1.31946 28.5384 1.95262 28.9289 2.34315L34.5858 8L28.9289 13.6569C28.5384 14.0474 28.5384 14.6805 28.9289 15.0711C29.3195 15.4616 29.9526 15.4616 30.3431 15.0711L36.7071 8.70711ZM0 9H36V7H0V9Z"
                  className="fill-[#ffffff] group-hover:fill-[#aa8453] transition-all duration-300"
                />
              </svg>
            </li>
          </ul>
        </div>

        <img
          src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-4-5_380x.png?v=1696904103"
          alt="Bath Room"
          className="w-[293px] h-[320px] object-cover ml-auto"
        />
      </div>

      <div className="w-[700px] h-[397px] flex justify-center items-center">
        <div className="flex">
          {featureds.length > 0 ? (
            featureds.map((item: any, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center mx-4 group"
              >
                <div className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center border border-[#ededed] rounded-full text-[#848484] group-hover:text-[#aa8453] group-hover:bg-[#2b2b2b] transition-all cursor-pointer">
                  <FaHeart />
                </div>
                <img
                  className="w-[194px] h-[240px] object-cover  transition-all"
                  src={item.imageURL}
                  alt={item.title}
                />
                <button className="mt-2 bg-[#222] text-[#aa8453] py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-all">
                  Quick Add
                </button>
                <h3 className="text-[16px] mt-2">{item.title}</h3>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BathRoom;
