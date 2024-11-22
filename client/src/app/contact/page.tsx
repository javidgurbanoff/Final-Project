"use client";

import React, { useState } from "react";
import Footer from "../features/footer/footer";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import NavbarWithSidebar from "../components/NavbarWithSidebar/NavbarWithSidebar";
import Modal from "../components/Modal/Modal";

export default function Contact() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavbarWithSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        closeSidebar={closeSidebar}
      />

      <BackToTopButton />

      <Modal />

      <div className="flex-grow text-center pt-[90px] w-full flex flex-col items-center pb-[30px]">
        <div className="pb-[90px]">
          <h1 className="text-[30px] text-[#222] font-gilda">CONTACT</h1>
        </div>

        <div className="w-full">
          <iframe
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Location Map"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=First%20Canadian%20Place+(Vinova)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
