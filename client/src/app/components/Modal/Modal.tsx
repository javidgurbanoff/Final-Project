"use client";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      localStorage.removeItem("dontShowModal");
      localStorage.removeItem("emailSubmitted");
    }

    const dontShowAgain = localStorage.getItem("dontShowModal");
    const emailSubmitted = localStorage.getItem("emailSubmitted");

    if (!dontShowAgain && !emailSubmitted) {
      openModal();
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      localStorage.setItem("dontShowModal", "true");
    } else {
      localStorage.removeItem("dontShowModal");
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      closeModal();
      localStorage.setItem("emailSubmitted", "true");
      toast.success("Email submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    }, 2000);
  };

  return (
    <div>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden"
          aria-hidden="true"
        >
          <div
            className="relative bg-white flex flex-row"
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

              <div className="flex flex-row items-center justify-between w-full h-full overflow-y-auto">
                <div className="flex-shrink-0 w-1/2 h-full">
                  <img
                    src="https://vinova-furstore.myshopify.com/cdn/shop/files/newsletter_540x.jpg?v=1697185401"
                    alt="Newsletter"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-start justify-center w-1/2 pr-[50px] pl-[30px] pt-[60px] pb-[30px] h-full">
                  <h2 className="text-[#202020] text-[25px] font-gilda text-left font-semibold mb-3">
                    NEWSLETTER
                  </h2>
                  <p className="mb-5 text-left text-[12px] text-[#6b7280]">
                    Get 15% off your first purchase! Plus, be the first to know
                    about sales, new product launches, and exclusive offers!
                  </p>
                  <input
                    className="text-center w-[360px] text-[16px] py-[10px] mb-3 border-2 rounded-[4px] border-black"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button
                    onClick={handleSubmit}
                    className="bg-[#aa8453] w-[360px] h-[45px] text-white px-4 py-1 rounded hover:bg-[#2b2b2b] hover:text-[#aa8453] transition-all mb-3"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </button>

                  <div className="flex items-center mt-[80px]">
                    <input
                      type="checkbox"
                      id="dont-show-again"
                      className="mr-2 w-[18px] h-[18px] "
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="dont-show-again"
                      className="text-[10px] font-barlow text-[#909090]"
                    >
                      DON'T SHOW THIS POPUP AGAIN
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Modal;
