"use client";

import React from "react";
import NavbarWithSidebar from "../components/NavbarWithSidebar/NavbarWithSidebar";
import Footer from "../features/footer/footer";

export default function WishList() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavbarWithSidebar />
      <h1 className="text-2xl font-bold text-center mt-8">Your Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4">
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
          <h2 className="font-semibold text-lg">Item 1</h2>
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/products/8_260x.jpg?v=1694678072"
            alt=""
          />
          <p className="text-sm text-gray-500">Description of item 1</p>
        </div>
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
          <h2 className="font-semibold text-lg">Item 2</h2>
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/products/37_260x.jpg?v=1694677956"
            alt=""
          />
          <p className="text-sm text-gray-500">Description of item 2</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
