"use client";
import React from "react";
import NavbarWithSidebar from "../components/NavbarWithSidebar/NavbarWithSidebar";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import Footer from "../features/footer/footer";

const Purchase: React.FC = () => {
  return (
    <div className="bg-[#fff]">
      <NavbarWithSidebar />
      <BackToTopButton />
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start items-start space-y-2 flex-col">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-[#000000]">
            Order #13432
          </h1>
          <p className="text-base font-medium leading-6 text-[#000000]">
            30th November 2024 at 10:34 PM
          </p>
        </div>

        <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start bg-[#aa8453] px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-white">
                Customer’s Cart
              </p>

              <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    className="w-full hidden md:block"
                    src="https://vinova-furstore.myshopify.com/cdn/shop/products/21_360x.jpg?v=1694678180"
                    alt="sofa"
                  />
                  <img
                    className="w-full md:hidden"
                    src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                    alt="stone decoration"
                  />
                </div>
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-white">
                      Premium Quality Italic Sofa
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm leading-none text-white">
                        <span className="text-gray-400">Style: </span> Italic
                        Minimal Design
                      </p>
                      <p className="text-sm leading-none text-white">
                        <span className="text-gray-400">Size: </span> Medium
                      </p>
                      <p className="text-sm leading-none text-white">
                        <span className="text-gray-400">Color: </span> Dark Blue
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg leading-6 text-white">
                      $136.00{" "}
                      <span className="text-[#cd2020] line-through">
                        {" "}
                        $345.00
                      </span>
                    </p>
                    <p className="text-base xl:text-lg leading-6 text-white">
                      01
                    </p>
                    <p className="text-base xl:text-lg font-semibold leading-6 text-white">
                      $136.00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                <div className="w-full md:w-40">
                  <img
                    className="w-full hidden md:block"
                    src="https://vinova-furstore.myshopify.com/cdn/shop/products/16_360x.jpg?v=1694678119"
                    alt="stone"
                  />
                  <img
                    className="w-full md:hidden"
                    src="https://cdn.shopify.com/s/files/1/0826/1222/4275/products/13_360x.jpg?v=1694678199"
                    alt="dress"
                  />
                </div>
                <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-white">
                      High Quality Decorative Stone
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm leading-none text-white">
                        <span className="text-gray-400">Style: </span> Italic
                        Minimal Design
                      </p>
                      <p className="text-sm leading-none text-white">
                        <span className="text-gray-400">Size: </span> Small
                      </p>
                      <p className="text-sm leading-none text-white">
                        <span className="text-gray-400">Color: </span> Milky
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg leading-6 text-white">
                      $95.00{" "}
                      <span className="text-[#cd2020] line-through">
                        {" "}
                        $299.00
                      </span>
                    </p>
                    <p className="text-base xl:text-lg leading-6 text-white">
                      02
                    </p>
                    <p className="text-base xl:text-lg font-semibold leading-6 text-white">
                      $95.00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-[#aa8453] space-y-6">
                <h3 className="text-xl font-semibold leading-5 text-white">
                  Summary
                </h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between w-full">
                    <p className="text-base leading-4 text-white">Subtotal</p>
                    <p className="text-base leading-4 text-gray-300">$231.00</p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-white">
                      Discount{" "}
                      <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-[#000] dark:text-[#fff] leading-3 text-[#fff]">
                        STUDENT
                      </span>
                    </p>
                    <p className="text-base leading-4 text-gray-300">
                      -$28.00 (50%)
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-white">Shipping</p>
                    <p className="text-base leading-4 text-gray-300">$8.00</p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base font-semibold leading-4 text-white">
                    Total
                  </p>
                  <p className="text-base font-semibold leading-4 text-gray-300">
                    $101.5
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 bg-[#aa8453] w-full space-y-6">
                <h3 className="text-xl font-semibold leading-5 text-white">
                  Shipping Information
                </h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <p className="text-base leading-4 text-white">Full Name</p>
                  <p className="text-base leading-4 text-gray-300">
                    Sally Williamson
                  </p>
                  <p className="text-base leading-4 text-white">Email</p>
                  <p className="text-base leading-4 text-gray-300">
                    sally@example.com
                  </p>
                  <p className="text-base leading-4 text-white">Phone</p>
                  <p className="text-base leading-4 text-gray-300">
                    (555) 123-4567
                  </p>
                  <p className="text-base leading-4 text-white">
                    Shipping Address
                  </p>
                  <p className="text-base leading-4 text-gray-300">
                    1234 William Street, Suite 100, Australia, Post Code-12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Purchase;
