"use client";

import React, { useState } from "react";
import Footer from "../features/footer/footer";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import NavbarWithSidebar from "../components/NavbarWithSidebar/NavbarWithSidebar";
import Modal from "../components/Modal/Modal";
import { ToastContainer, toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    toast.success("Your message has been sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    setTimeout(() => {}, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavbarWithSidebar />
      <BackToTopButton />
      <ToastContainer />
      <Modal />

      <div className="flex-grow text-center pt-[90px] w-full flex flex-col items-center pb-[30px]">
        <div className="pb-[50px]">
          <h1 className="text-[30px] text-[#222] font-gilda">CONTACT US</h1>
        </div>

        <div className="w-full max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your Name"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#aa8453]"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Your Email"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#aa8453]"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Your Message"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#aa8453]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#aa8453] text-white py-3 rounded-md hover:bg-[#2b2b2b] transition-all"
            >
              Send Message
            </button>
          </form>

          <div className="w-full mt-12">
            <iframe
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              title="Location Map"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=First%20Canadian%20Place+(Vinova)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
