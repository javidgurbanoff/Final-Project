import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-16 right-4 p-3 rounded-full border-2 border-[#aa8453] bg-[#aa8453] text-white w-[40px] h-[40px]
                transition-opacity duration-300 ease-in-out ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
      aria-label="Back to top"
    >
      <IoIosArrowUp className="items-center" />
    </button>
  );
};

export default BackToTopButton;
