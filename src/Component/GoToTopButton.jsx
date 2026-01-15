import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#0B6177] hover:bg-[#FFD700] text-white hover:text-black 
                     px-4 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out 
                     transform hover:scale-110 flex items-center gap-2 group"
          aria-label="Go to top"
        >
          <ChevronUp 
            size={24} 
            className="transition-transform duration-300 group-hover:-translate-y-1" 
          />
          <span className="font-semibold text-sm whitespace-nowrap">
            Go to Top
          </span>
        </button>
      )}
    </>
  );
}

