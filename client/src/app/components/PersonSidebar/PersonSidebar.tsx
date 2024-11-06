import React from "react";

const CartSidebar = ({ isSidebarOpen, closeSidebar, type }) => {
  if (!isSidebarOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-4">
      <button
        onClick={closeSidebar}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>

      {/* Conditional Content */}
      {type === "person" ? (
        <div>
          <h2 className="text-lg font-semibold mb-4">Account</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-[#aa8453]">
                Login
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-[#aa8453]">
                Register
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-[#aa8453]">
                Wishlist
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
          <p className="text-gray-500">Your cart is currently empty.</p>
          {/* Add logic here to display actual cart items if needed */}
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
