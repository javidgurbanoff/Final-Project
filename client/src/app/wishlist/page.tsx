"use client";

import React from "react";
import NavbarWithSidebar from "../components/NavbarWithSidebar/NavbarWithSidebar";
import Footer from "../features/footer/footer";
import { useWishlist } from "../context/WishlistContext";

export default function WishList() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavbarWithSidebar />
      <h1 className="text-2xl font-bold text-center mt-8">Your Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <img src={item.imageUrl} alt={item.name} />
              <p className="text-sm text-gray-500">
                Description of {item.name}
              </p>
              <button
                className="text-red-500 mt-2"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        )}
      </div>

      <Footer />
    </div>
  );
}
