"use client";

import { useState, useEffect } from "react";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    openModal();
  }, []);

  return (
    <div>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 overflow-y-auto overflow-x-hidden"
          aria-hidden="true"
        >
          <div
            className="relative bg-white rounded-lg flex flex-row"
            style={{ width: "885px", height: "550px" }}
          >
            <div className="relative flex flex-row items-center justify-between w-full h-full">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-row items-center justify-between w-full h-full">
                <div className="flex-shrink-0 w-1/2 h-full">
                  <img
                    src="https://vinova-furstore.myshopify.com/cdn/shop/files/newsletter_540x.jpg?v=1697185401"
                    alt="Newsletter"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-center justify-center w-1/2 p-4 h-full">
                  <h2 className="text-[#202020] text-2xl text-left font-semibold mb-4">
                    NEWSLETTER
                  </h2>
                  <p className="mb-6 text-center">
                    Get 15% off your first purchase! Plus, be the first to know
                    about sales, new product launches, and exclusive offers!
                  </p>
                  <input
                    className="text-center w-[360px] p-2 mb-4 border rounded-sm"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button className="bg-[#aa8453] w-[360px] h-[50px] text-white px-6 py-2 rounded hover:bg-[#2b2b2b] hover:text-[#aa8453] transition-all">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
