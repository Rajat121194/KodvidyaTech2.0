import React, { useState, useEffect } from "react";
import heroImg from "../../assets/pictures/por.jpg";
import Career from "./Careers";

const Elevate = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-30 py-16 md:py-40 sm:py-20 lg:py-60 bg-chitu text-gold overflow-hidden">
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 text-center md:text-left space-y-4 md:space-y-6">
        <h1 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px]">
          Elevate your Career at CodeMechanism Infotech
        </h1>

        <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px]">
          Using cutting-edge technological solutions and staying one step ahead
          of the competition are essential to advancing your career with
          CodeMechanism Infotech. Here’s how CodeMechanism Infotech can help you
          grow professionally:
        </p>

        <div className="flex justify-center md:justify-start">
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-Sans rounded-lg shadow-md bg-gold text-chitu hover:bg-chitu hover:text-gold border border-gold hover:font-bold transition duration-300 ease-in-out"
          >
            View Job Openings
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src={heroImg}
          alt="Career Opportunities"
          className="rounded-3xl max-w-[90%] sm:max-w-[500px] md:max-w-[600px] w-full h-auto object-cover shadow-blue shadow-2xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-kalu/80 z-50 px-4 sm:px-8"
          onClick={() => setIsOpen(false)} // Close on outside click
        >
          {/* Popup Box */}
          <div
            className="bg-yellowLight rounded-xl shadow-lg w-full sm:w-[90%] md:w-[70%] lg:w-[60%] h-[80%] relative flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gold/30">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gold hover:text-red-500 text-3xl font-bold transition"
              >
                ✕
              </button>
            </div>

            {/* Scrollable content area */}
            <div
              className="flex-1 overflow-y-auto px-4 sm:px-6 pb-6"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <Career />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Elevate;
