"use client";
import React, { useState } from "react";
import Footer from "../features/footer/footer";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import NavbarWithSidebar from "../components/NavbarWithSidebar/NavbarWithSidebar";
import Modal from "../components/Modal/Modal";
import { IoHomeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoShareSocial } from "react-icons/io5";
import { TbHelp } from "react-icons/tb";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import ProductRelated from "../components/ProductRelated/ProductRelated";
import MightAlsoLike from "../components/MightAlsoLike/MightAlsoLike";
import RecentlyViewedProduct from "../components/RecentlyViewedProducts/RecentlyViewedProducts";
import CookieConsent from "../components/CookieConsent/CookieConsent";
import FeaturesGrid from "../components/FeaturesGrid/FeaturesGrid";

export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const mediaItems = [
    {
      type: "image",
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/15_1120x.jpg?v=1694678110",
    },
    {
      type: "video",
      src: "//vinova-furstore.myshopify.com/cdn/shop/videos/c/vp/865c4b4184c543cca15ff7b57217a4bb/865c4b4184c543cca15ff7b57217a4bb.HD-1080p-2.5Mbps-18839987.mp4?v=0",
    },
    {
      type: "image",
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/15a_1120x.jpg?v=1695803744",
    },
    {
      type: "image",
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/15c_1120x.jpg?v=1695803744",
    },
    {
      type: "image",
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/15d_1120x.jpg?v=1695803744",
    },
  ];
  const slickTrack = [
    {
      type: "image",
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/15_150x.jpg?v=1694678110",
    },
    {
      type: "image",
      src: "https://vinova-furstore.myshopify.com/cdn/shop/files/preview_images/865c4b4184c543cca15ff7b57217a4bb.thumbnail.0000000000_150x.jpg?v=1695803739",
    },
    {
      type: "image",
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/15a_150x.jpg?v=1695803744",
    },

    {
      type: "image",
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/15c_150x.jpg?v=1695803744",
    },
    {
      type: "image",
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/15d_150x.jpg?v=1695803744",
    },
  ];

  const handleQuantityChange = (type) => {
    if (type === "increment") setQuantity(quantity + 1);
    if (type === "decrement" && quantity > 1) setQuantity(quantity - 1);
  };

  const goToNextMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavbarWithSidebar />
      <BackToTopButton />
      <Modal />
      <CookieConsent />

      <div className="px-4 lg:px-32">
        <div className="flex items-center text-[14px] py-[23px] space-x-2 mt-4 text-[#222]">
          <Link href="/">
            <IoHomeOutline className="w-3 h-3" />
          </Link>
          <span className="flex justify-center items-center">
            Home <GoDotFill className="text-center mx-2 w-2 h-2" /> Diamond Halo
            Stud Monte
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-row">
            <div className="flex-1 relative group">
              {mediaItems?.[currentMediaIndex]?.type === "image" ? (
                <img
                  src={mediaItems[currentMediaIndex]?.src}
                  alt="Product Image"
                  className="w-[570px] h-[706px] object-cover"
                />
              ) : mediaItems?.[currentMediaIndex]?.type === "video" ? (
                <video
                  src={mediaItems[currentMediaIndex]?.src}
                  controls
                  className="w-[570px] h-[706px] object-cover"
                />
              ) : (
                <div className="w-[570px] h-[706px] bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No media available</span>
                </div>
              )}

              <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={goToPreviousMedia}
                  className="text-white bg-[#aa8453] w-[60px] h-[60px] rounded-full flex items-center justify-center hover:bg-[#2b2b2b] hover:text-[#aa8453] transition-all"
                >
                  <RiArrowLeftSLine className="text-2xl" />
                </button>

                <button
                  onClick={goToNextMedia}
                  className="text-white bg-[#aa8453] w-[60px] h-[60px] rounded-full flex items-center justify-center hover:bg-[#2b2b2b] hover:text-[#aa8453] transition-all"
                >
                  <RiArrowRightSLine className="text-2xl" />
                </button>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              {slickTrack.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentMediaIndex(index)}
                  className={`border ${
                    currentMediaIndex === index
                      ? "border-[#aa8453]"
                      : "border-gray-200"
                  } rounded-md overflow-hidden cursor-pointer`}
                >
                  <img
                    src={item.src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-[98px] h-[121px] object-cover"
                  />
                </div>
              ))}
            </div>
            <div className=" w-full h-[434px]">
              <div className="mt-[60px] mb-[52px]">
                <ul className="  flex">
                  <li>Description</li>
                  <li>Deliver Policy</li>
                  <li>Shipping & Return</li>
                  <li>Custom tab</li>
                </ul>
              </div>
              <p className="text-[#6b7280]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridicu lus
                mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum
                dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor aenean massa.{" "}
              </p>
              <img
                src="https://images.vinovathemes.com/prestashop_teemax/image_product_detail.png"
                alt=""
                className="pb-[30px] mt-[20px]"
              />
              <ul className="text-[#6b7280] text-[14px] pl-4">
                <li className="before:content-['•'] before:text-black before:pr-2">
                  Ribbed and double-stitched collar and armholes
                </li>
                <li className="before:content-['•'] before:text-black before:pr-2">
                  High-density fabric for vivid print clarity
                </li>
                <li className="before:content-['•'] before:text-black before:pr-2">
                  Machine-wash safe
                </li>
                <li className="before:content-['•'] before:text-black before:pr-2">
                  Single right rear button flap pocket
                </li>
                <li className="before:content-['•'] before:text-black before:pr-2">
                  Products are proudly printed in the United States
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1 h-[848px] space-y-6">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold text-gray-800">
                Diamond Halo Stud Monte
              </h1>
              <div className="w-10 h-10 flex items-center justify-center border border-[#ededed] rounded-full text-[#848484] hover:text-[#aa8453] hover:bg-[#2b2b2b] transition-all cursor-pointer">
                <FaHeart />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl text-orange-600 font-bold">
                $236.00
              </span>
              <span className="text-gray-400 line-through">$945.00</span>
              <span className="text-sm text-white bg-orange-600 px-2 py-1 rounded-full">
                -75%
              </span>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-bold">89% Sold</span> - Only 11 item(s) left
              in stock!
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="w-[89%] h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                style={{ clipPath: "inset(0 11% 0 0)" }}
              ></div>
            </div>
            <div className="text-sm text-gray-600">
              <p>
                <span className="font-bold">Tags:</span> Gray, Red
              </p>
              <p>
                <span className="font-bold">SKU:</span> E-00239
              </p>
              <p>
                <span className="font-bold">Category:</span> Armchair, Bathroom,
                Bedroom, Clocks, Flash Deals, Flower vase, Home page, Kitchen,
                Sofa, Tables
              </p>
              <div className="pt-4">
                <span className="font-bold">Quantity:</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <button className="bg-[#aa8453] text-white px-6 py-3 w-[370px] font-barlow text-[14px] h-[46px] rounded-[4px]  hover:bg-[#2b2b2b] hover:text-[#aa8453] transition-all">
                Add To Bag
              </button>
            </div>
            <button className="border-2 border-[#000000] px-6 py-3 font-normal font-gilda rounded-[4px] w-[490px] h-[46px] text-[14px] shadow-md hover:bg-[#082e21] hover:text-[#ffffff] transition-all">
              Buy It Now
            </button>
            <div className="flex items-center text-[16px] mt-[25px] pb-[20px] border-b border-gray-300 gap-6">
              <div className="flex items-center gap-2 hover:text-[#6b7280] cursor-pointer">
                <IoShareSocial />
                <span className="text-[10px]">SHARE</span>
              </div>

              <div className="flex items-center gap-2 hover:text-[#6b7280] cursor-pointer">
                <Link href="/questioning">
                  <TbHelp />
                </Link>
                <span className="text-[10px]">ASK A QUESTION</span>
              </div>

              <div className="flex items-center gap-2 hover:text-[#6b7280] cursor-pointer">
                <Link href="/faq">
                  <BsChatLeftDotsFill />
                </Link>

                <span className="text-[10px]">FAQ</span>
              </div>
            </div>
            <div className="mb-[45px] pt-[40px]">
              <span className="text-[#202020] text-[12px] mb-[10px] font-bold font-barlow">
                GUARANTEED SAFE CHECKOUT:
              </span>
              <img
                src="https://vinova-furstore.myshopify.com/cdn/shop/files/payment_700x.png?v=1695805699"
                alt=""
              />{" "}
            </div>
            <div className="flex items-center gap-2">
              <FaRegClock />
              <span className="text-[12px]">
                Orders ship within 5 to 10 business days.
              </span>
            </div>
            <div className=" flex items-center gap-2">
              <FaShippingFast />
              <span className="text-[12px]">
                Hoorey ! This item ships free to the US
              </span>
            </div>
          </div>
        </div>
        <FeaturesGrid />
        <ProductRelated />
        <MightAlsoLike />
        <div className="flex justify-center">
          <button
            type="submit"
            className={`
      bg-[#aa8453] 
      w-[200px] 
      h-[60px] 
      text-white 
      px-6 
      py-2 
      rounded 
      mt-[40px] 
      ? "opacity-50 cursor-not-allowed" : hover:text-[#aa8453] hover:bg-[#2b2b2b] transition-all cursor-pointer"} 
      mx-auto
    `}
          >
            View More Items
          </button>
        </div>
        <RecentlyViewedProduct />
      </div>
      <Footer />
    </div>
  );
}
