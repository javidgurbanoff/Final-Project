"use client";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";

const MightAlsoLikeItem = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const stars = Array(5).fill(0);

  return (
    <div
      className="max-w-sm mx-4 mb-6 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden relative">
        <img
          src={isHovered ? product.hoverImageUrl : product.imageUrl}
          alt={`${product.name} image`}
          className="w-full h-[334px] transform transition-transform duration-[350ms] ease-linear hover:scale-105 cursor-pointer"
        />

        <p className="absolute rounded-[6px] font-barlow font-semibold text-[13px] py-[5px] px-[8px] top-5 left-5 w-[49px] h-[24px] bg-[#aa8453] text-white text-center flex items-center justify-center">
          {product.discount}
        </p>

        {isHovered && (
          <div className="absolute top-5 right-5 flex gap-2">
            <div className="w-10 h-10 flex items-center justify-center border border-[#ededed] rounded-full text-[#848484] hover:text-[#aa8453] hover:bg-[#2b2b2b] transition-all cursor-pointer">
              <FaHeart />
            </div>

            <div className="w-10 h-10 flex items-center justify-center border border-[#ededed] rounded-full text-[#848484] hover:text-[#aa8453] hover:bg-[#2b2b2b] transition-all cursor-pointer">
              <IoMdPhotos className="text-xl" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-[14px] font-barlow text-[#000000]">
            {product.name}
          </h3>
          <div
            className="text-[#f9bf00] pl-1 flex"
            aria-label={`${product.rating} star rating`}
          >
            {stars.map((_, index) => (
              <FaHeart
                key={index}
                className={
                  index < product.rating ? "text-[#f9bf00]" : "text-gray-300"
                }
              />
            ))}
          </div>
        </div>
        <div className="flex items-center mt-2">
          <p className="text-[#222222] font-bold text-[14px]">
            {product.price}
          </p>
          {product.originalPrice && (
            <span className="text-[14px] text-[#d5d5d5] line-through decoration-[#da432a] ml-[10px]">
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const MightAlsoLike = () => {
  const mightAlsoLike = [
    {
      id: 1,
      name: "Acamond Halo Stud Conse",
      price: "$198",
      discount: "-64%",
      originalPrice: "$550.00",
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/13_360x.jpg?v=1694678199",
      hoverImageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/13a_360x.jpg?v=1695803456",
      rating: 5,
    },
    {
      id: 2,
      name: "Diamond Halo Stud Amet",
      price: "$210",
      discount: "-45%",
      originalPrice: "$380.00",
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/11_360x.jpg?v=1694678136",
      hoverImageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/11a_360x.jpg?v=1694678136",
      rating: 4,
    },
    {
      id: 3,
      name: "Diamond Halo Stud Donec",
      price: "$247",
      discount: "-68%",
      originalPrice: "$770.00",
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/8_360x.jpg?v=1694678072",
      hoverImageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/8a_360x.jpg?v=1694678072",
      rating: 0,
    },
    {
      id: 4,
      name: "Diamond Halo Stud Monte",
      price: "$236",
      discount: "-75%",
      originalPrice: "$945.00",
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/2_50dddb87-1edc-49f2-be89-a78c32ce0641_360x.jpg?v=1694678246",
      hoverImageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/2a_1dae4acc-3f60-44d2-a5cd-d85d36709d25_360x.jpg?v=1694678246",
      rating: 0,
    },
    {
      id: 5,
      name: "Diamond Halo Stud Monte",
      price: "$236",
      discount: "-75%",
      originalPrice: "$945.00",
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/28_360x.jpg?v=1694678229",
      hoverImageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/28a_360x.jpg?v=1694678229",
      rating: 0,
    },
    {
      id: 6,
      name: "Diamond Halo Stud Monte",
      price: "$236",
      discount: "-75%",
      originalPrice: "$945.00",
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/30_360x.jpg?v=1694678309",
      hoverImageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/30a_360x.jpg?v=1694678309",
      rating: 0,
    },
    {
      id: 7,
      name: "Diamond Halo Stud Monte",
      price: "$236",
      discount: "-75%",
      originalPrice: "$945.00",
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/22_540x.jpg?v=1694678128",
      hoverImageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/22a_360x.jpg?v=1694678128",
      rating: 0,
    },
    {
      id: 8,
      name: "Diamond Halo Stud Monte",
      price: "$236",
      discount: "-75%",
      originalPrice: "$945.00",
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/6_2244894f-10a7-46ed-832c-b2c7e0f2ca12_360x.jpg?v=1694678102",
      hoverImageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/6a_360x.jpg?v=1694678102",
      rating: 0,
    },
  ];

  return (
    <div className="flex flex-col items-center pt-[70px]">
      <h2 className="text-[46px] text-center font-gilda mb-8">
        You Might Also Like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {mightAlsoLike.map((product) => (
          <MightAlsoLikeItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MightAlsoLike;
