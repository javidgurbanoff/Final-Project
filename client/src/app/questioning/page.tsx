"use client";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Link from "next/link";

const questioning = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsMessageSent(true);
    setMessage("");
    setTimeout(() => setIsMessageSent(false), 3000);
    handleCloseModal();
  };

  return (
    <div className="">
      <div className="pl-3">
        <button className="mt-4  h-[50px] text-[#000000] py-2 px-3 rounded-lg hover:bg-[#082e21] hover:text-[#ffffff] transition-all ">
          <Link href="/">Back To HomePage</Link>
        </button>
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-[48px] font-semibold font-gilda">Ask a Question</h1>
        <div className="container text-center mt-8">
          <p className="text-lg mt-4">
            Have a question about our products? Click the button below to ask.
          </p>
          <button
            onClick={handleOpenModal}
            className="mt-4 bg-[#aa8453] h-[50px] text-white py-2 px-6 rounded-lg hover:bg-[#2b2b2b]"
          >
            Ask a Question
          </button>
        </div>

        {isModalOpen && (
          <div className="modal-overlay fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="modal-content bg-white p-6 rounded-lg w-[400px]">
              <h2 className="text-xl font-semibold mb-4">Your Question</h2>
              <form onSubmit={handleSubmit}>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-[150px] border p-2 mb-4 rounded-lg"
                  placeholder="Write your question here..."
                  required
                />
                <div className="flex justify-between items-center">
                  <button
                    type="submit"
                    className="bg-[#aa8453] text-white px-6 py-2 rounded-lg hover:bg-[#2b2b2b]"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="text-[#aa8453] hover:text-[#2b2b2b] font-semibold"
                  >
                    Close
                  </button>
                </div>
              </form>
              {isMessageSent && (
                <div className="mt-4 text-green-500 font-semibold">
                  Your question has been sent successfully!
                </div>
              )}
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default questioning;
