"use client";

import React, { useState, useEffect } from "react";

const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    deleteCookie("cookiesAccepted");
    setIsVisible(true);
  }, []);

  const handleAcceptCookies = () => {
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-5 flex-col left-5 right-0 w-[355px] h-[156px] bg-black text-white p-4 md:flex md:justify-between items-center z-50">
      <p className="text-[13px]">
        The cookie settings on this website are set to "allow all cookies" to
        give you the very best experience. Please click Accept Cookies to
        continue to use the site.
      </p>
      <div className="flex space-x-4 mt-3 md:mt-0">
        <button
          onClick={handleAcceptCookies}
          className="bg-[#aa8453] text-white px-4 py-2 rounded hover:bg-opacity-90 transition duration-300"
        >
          Accept
        </button>
        <button
          onClick={handleClose}
          className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300"
        >
          Privacy Policy
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
